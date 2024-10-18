### Zeotap Assignment

Welcome to the **Zeotap Assignment** repository! This project is part of the submission for the **Software Engineer Intern** role. It contains two separate applications implemented as individual folders: **Application 1** (Rule Engine with Abstract Syntax Tree) and **Application 2** (Real-Time Weather Monitoring System).

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

## How to Bring the Project Locally

This repository is fully configured with connection strings, API keys, and database settings, making it easy to run the applications locally without the need for database installations or container setups. The PostgreSQL connection string is already included, allowing for easy testing.

### Steps to Clone and Run:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Abhi200206/Zeotap-assignment.git
    cd zeotap-assignment
    ```

2. **Navigate to each application folder** (`Application1` and `Application2`), and follow the setup instructions in their respective README files.

3. No need to configure the database manually—everything is included for seamless testing.

---

### Applications Overview

### 1. **Application 1: Rule Engine with Abstract Syntax Tree (AST)**

- **Description**: Implements a dynamic rule engine using an Abstract Syntax Tree (AST). Users can create, modify, and evaluate rules from the frontend.
- **Tech Stack**:
  - Frontend: React, TypeScript, TailwindCSS
  - Backend: Node.js, TypeScript, Prisma ORM, PostgreSQL
  - No need for separate database setup; it's pre-configured for testing.
- **Project Structure**:
  - `client`: Contains the React frontend of the application.
  - `rule-engine-ast-ts`: Contains the backend with a rule engine implementation using AST.

Refer to [Application1/README.md](./Application1/README.md) for detailed instructions.

---

### 2. **Application 2: Real-Time Weather Monitoring System**

- **Description**: Monitors real-time weather data using OpenWeatherMap API. Displays weather summaries, alerts when thresholds (e.g., high temperatures) are exceeded, and visualizes historical weather trends.
- **Tech Stack**:
  - Frontend: React, TypeScript, Chart.js, TailwindCSS
  - Backend: Node.js, TypeScript, Prisma ORM, PostgreSQL
  - Integrated connection strings and API keys included.
- **Project Structure**:
  - `client`: Contains the frontend, which visualizes weather summaries and alerts.
  - `server`: Contains the backend that fetches weather data, processes alerts, and stores summaries.

Refer to [Application2/README.md](./Application2/README.md) for detailed instructions.

---

## Technology Stack Summary

- **Frontend**: React, TypeScript, TailwindCSS, Chart.js
- **Backend**: Node.js, TypeScript, Prisma ORM, PostgreSQL, Axios
- **Dev Tools**: Vite, ESLint

---

Thank you for reviewing the **Zeotap Assignment**!
