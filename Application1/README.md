
### Application 1: Rule Engine with Abstract Syntax Tree (AST)

This directory contains both the frontend and backend for the **Rule Engine with Abstract Syntax Tree (AST)** application.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Frontend Setup (Client)](#frontend-setup-client)
5. [Backend Setup (Server)](#backend-setup-server)
6. [Running the Application](#running-the-application)

---

## Project Overview

This project implements a dynamic rule engine using an Abstract Syntax Tree (AST) to evaluate user-defined rules. The application provides a frontend interface where users can create, modify, and evaluate rules. The backend processes these rules and evaluates them based on the inputs provided.

---

## Technology Stack

**Frontend (Client)**:
- **React**
- **TypeScript**
- **TailwindCSS**

**Backend (Server)**:
- **Node.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

---

## Directory Structure

```
Application1/
│
├── client/               # Frontend application
│   └── client-app/       # React-based client code
│
└── rule-engine-ast-ts/   # Backend server application
    └── prisma/           # Prisma migrations and schema
```

---

## Frontend Setup (Client)

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps to Run the Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd Application1/client/client-app
    ```

2. **Install dependencies and start the development server**:
    ```bash
    npm run start
    ```

Once the above command is run, you can use the following command to start the server in the future:

3. **Start the development server**:
    ```bash
    npm run dev
    ```

---

## Backend Setup (Server)

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps to Run the Backend

1. **Navigate to the backend directory**:
    ```bash
    cd Application1/rule-engine-ast-ts
    ```

2. **Start the backend server**:
    To start the backend server:
    ```bash
    npm run start
    ```

---

## Running the Application

To run both the frontend and backend together:

1. **Run the backend server**:
    - Open a terminal and navigate to the backend folder (`Application1/rule-engine-ast-ts`).
    - Run the backend server using the steps provided above.

2. **Run the frontend server**:
    - Open another terminal and navigate to the frontend folder (`Application1/client/client-app`).
    - Run the frontend development server using the steps above.

3. **Access the application**:
    Once both the frontend and backend servers are running, open your browser and visit `http://localhost:5173` (or the port specified by your frontend setup) to interact with the application.

---
