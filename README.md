# GamanExhibit

## BSc Hons in Computing
**2023.2**
**Web API Development**
**Course Work**

### Coventry Index: 14946028
### NIBM Index: YR3COBSCCOMP232P-039
### NIBM Registered Name: M V N Hirushan

**Faculty of Engineering, Environment and Computing**
**School of Computing, Electronics and Mathematics**
**Coventry University**

**School of Computing and Engineering**
**National Institute of Business Management**
**Colombo-7**

---

## Project Overview
**GamanExhibit** is a dynamic frontend client application designed to demonstrate the capabilities of the **GamanAPI**, a bus booking and travel management system. This exhibit client is built using **Angular** and provides an interactive user interface to test and visualize API endpoints. It serves as a comprehensive evaluation tool to showcase API functionality to stakeholders or evaluators.

## Features
- **Dynamic Endpoint Parsing**:
  - Reads and parses route files (e.g., `authRoutes.ts`, `busRoutes.ts`) directly from the frontend assets.
  - Dynamically generates forms and visualizations for API endpoints.

- **Interactive UI**:
  - Displays API endpoints categorized by controllers (e.g., `Auth`, `Buses`, `Routes`).
  - Provides forms for each endpoint to input parameters dynamically.
  - Real-time visualization of constructed HTTP requests as the user types.
  - Full response visualization, including headers, status, and body, after submission.

- **Reusable Service**:
  - Centralized service for making HTTP requests with proper handling of query parameters, request bodies, and headers.

- **Lightweight and Flexible**:
  - No hardcoded endpoints; dynamically adapts to backend changes.
  - Designed as a lightweight alternative to tools like Swagger UI or Postman.

## Tech Stack
- **Angular**: Frontend framework for dynamic UI.
- **TypeScript**: Strongly typed JavaScript for predictable behavior.
- **Bootstrap**: Styling and responsive layout.

## Project Setup

### Clone the repository
```bash
git clone https://github.com/Hirushan-N/GamanExhibit.git
cd GamanExhibit
```

### Install dependencies
```bash
npm install
```

### Add route files
Place the `Routes.ts` files (e.g., `authRoutes.ts`, `busRoutes.ts`) in the `src/assets/` folder.

### Run the application
```bash
ng serve
```
The application will run at `http://localhost:4200`.

## Project Structure
```
GamanExhibit/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dynamic-controller/
│   │   │   │   ├── dynamic-controller.component.ts
│   │   │   │   ├── dynamic-controller.component.html
│   │   │   │   ├── dynamic-controller.component.css
│   │   │   ├── navigation/
│   │   │       ├── navigation.component.ts
│   │   │       ├── navigation.component.html
│   │   │       ├── navigation.component.css
│   │   ├── services/
│   │   │   ├── api.service.ts
│   ├── assets/
│   │   ├── authRoutes.ts
│   │   ├── busRoutes.ts
│   │   ├── routeRoutes.ts
│   │   ├── ticketRoutes.ts
│   │   ├── tripScheduleRoutes.ts
│   │   ├── userRoutes.ts
│
├── styles.css
└── angular.json
```

## Key Features

### Navigation and Endpoint Interaction
- Navigate between controllers using a dynamic menu.
- Select endpoints to view parameterized forms, request objects, and responses.

### Request and Response Visualization
- Dynamically construct HTTP request objects based on form input.
- Visualize full API responses, including headers, body, and status.

### Reusable Architecture
- Centralized service for all API requests, following Angular best practices.

## Future Enhancements
- Add JWT-based authorization support.
- Cache parsed endpoints to improve performance.
- Implement enhanced validation for form fields.
- Add support for customizable themes and dark mode.

## License
This project is developed as part of the coursework for the **Web API Development** module of the BSc Hons in Computing program. All rights reserved.
