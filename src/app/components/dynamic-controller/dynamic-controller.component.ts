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
  endpoints: any[] = [
    {
      "method": "GET",
      "path": "/routes",
      "summary": "Get all routes or search routes",
      "tags": ["Routes"],
      "parameters": [
        {
          "in": "query",
          "name": "routeNumber",
          "type": "string",
          "description": "The route number to filter by"
        }
      ],
      "responses": [
        { "status": 200, "description": "List of routes matching the criteria" },
        { "status": 500, "description": "Internal server error" }
      ]
    }
  ];
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
    this.selectEndpoint(this.endpoints[0]);
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
