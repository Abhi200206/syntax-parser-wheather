# Zeotap Assignment

Welcome to the **Zeotap Assignment** repository, which contains two separate applications as part of the submission for the Software Engineer Intern role. This repository demonstrates the solution to two different challenges, each implemented as its own project folder.

---

## Repository Structure

```
\zeotap-assignment
│
├── Application1        # Rule Engine with Abstract Syntax Tree (AST)
│   ├── client          # Frontend code for Application 1
│   └── rule-engine-ast-ts # Backend code for Application 1
│
└── Application2        # Real-Time Weather Monitoring System
    ├── client          # Frontend code for Application 2
    └── server          # Backend code for Application 2
```

---

## Applications Overview

### 1. **Application 1: Rule Engine with Abstract Syntax Tree (AST)**

- **Description**: This application implements a rule engine using an Abstract Syntax Tree (AST) to evaluate expressions dynamically based on user input.
- **Technology Stack**:
  - Frontend: React, TypeScript, TailwindCSS
  - Backend: Node.js, TypeScript, Prisma ORM, PostgreSQL
  - Database: PostgreSQL
  - Dev Tools: Vite, ESLint

- **Project Structure**:
  - `client`: Contains the React frontend of the application.
  - `rule-engine-ast-ts`: Contains the backend with a rule engine implementation using AST.

---

### 2. **Application 2: Real-Time Weather Monitoring System**

- **Description**: This application monitors weather data from the OpenWeatherMap API for specific cities in real-time. It provides weather summaries, threshold alerts for high temperatures, and historical trends through visualizations.
- **Technology Stack**:
  - Frontend: React, TypeScript, Chart.js, TailwindCSS
  - Backend: Node.js, TypeScript, Prisma ORM, PostgreSQL
  - Database: PostgreSQL
  - Weather API: OpenWeatherMap API
  - Dev Tools: Vite, ESLint

- **Project Structure**:
  - `client`: Contains the frontend, which visualizes weather summaries and alerts.
  - `server`: Contains the backend that fetches weather data, processes alerts, and stores summaries.

---

## Running the Applications Locally

Each application (`Application1` and `Application2`) has its own README file with step-by-step instructions for setting up and running the projects locally. This includes cloning, installing dependencies, and running both frontend and backend services.

- **Application 1**:
  - Refer to `\zeotap-assignment\Application1\README.md` for frontend and backend setup instructions.
- **Application 2**:
  - Refer to `\zeotap-assignment\Application2\README.md` for frontend and backend setup instructions

---

## Technology Stack Summary

**Frontend**:
- React
- TypeScript
- Tailwind CSS
- Chart.js (for Application 2)

**Backend**:
- Node.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Axios (for API requests)

**Dev Tools**:
- Vite
- ESLint

---

## Notes

- The repository is fully configured with connection strings, API keys, and database settings to ease the testing process. No additional setup is required for the databases; they are already integrated for smooth execution.
- Make sure to check the individual README files in each application folder for further information on the project and specific instructions on how to run the applications.

---

Thank you for reviewing the **Zeotap Assignment**!

