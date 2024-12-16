import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { EndpointParameter } from '../../models/endpoint-parameter.model';

@Component({
  selector: 'app-dynamic-controller',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-controller.component.html',
  styleUrls: ['./dynamic-controller.component.css'],
})
export class DynamicControllerComponent implements OnInit {
  controllerName: string = '';
  endpoints: any[] = [];
  activeEndpoint: any = null;
  form!: FormGroup;
  requestObject: any = {};
  responseObject: any = {};

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.controllerName = params['controller'];
      console.log(this.controllerName);
      this.loadRoutes();
    });
  }

  loadRoutes() {
    fetch(`assets/${this.controllerName}Routes.ts`)
      .then((res) => res.json())
      .then((data) => {
        this.endpoints = data.endpoints;
        if (this.endpoints.length > 0) {
          this.selectEndpoint(this.endpoints[0]);
        }
      })
      .catch((error) => console.error('Error loading routes:', error));
  }  

  parseRoutes(fileContent: string) {
    const endpointRegex = /@swagger\s*\*\/([\s\S]*?)(router\.(get|post|put|delete))/g;
    const endpoints = [];
    let match;

    while ((match = endpointRegex.exec(fileContent)) !== null) {
      const comment = match[1];
      const method = match[3].toUpperCase();
      const pathMatch = comment.match(/\/[^\s]+/);
      const path = pathMatch ? pathMatch[0] : '';
      const parameters = this.parseParameters(comment);

      endpoints.push({ method, path, parameters });
    }

    return endpoints;
  }

  parseParameters(comment: string) {
    const paramRegex = /- in: (\w+)\s*name: (\w+)\s*schema:\s*type: (\w+)/g;
    const parameters = [];
    let match;

    while ((match = paramRegex.exec(comment)) !== null) {
      parameters.push({ name: match[2], type: match[3], required: false });
    }

    return parameters;
  }

  selectEndpoint(endpoint: any) {
    this.activeEndpoint = endpoint;
  
    this.form = this.fb.group(
      endpoint.parameters.reduce(
        (acc: { [key: string]: any }, param: EndpointParameter) => {
          acc[param.name] = ['', param.required ? Validators.required : null];
          return acc;
        },
        {}
      )
    );
  
    this.form.valueChanges.subscribe((values) => {
      this.updateRequestObject(values);
    });
  }
  

  updateRequestObject(values: any) {
    this.requestObject = {
      method: this.activeEndpoint.method,
      url: this.activeEndpoint.path,
      body: this.activeEndpoint.method !== 'GET' ? values : null,
      params: this.activeEndpoint.method === 'GET' ? values : null,
    };
  }

  submit() {
    this.apiService
      .sendRequest(
        this.requestObject.method,
        this.requestObject.url,
        this.requestObject.params,
        this.requestObject.body
      )
      .subscribe(
        (response) => (this.responseObject = response),
        (error) => (this.responseObject = error)
      );
  }
}
