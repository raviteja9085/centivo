# Node.js + MongoDB API

A simple RESTful API built with Node.js, Express, and MongoDB that retrieves user data with an age constraint (>21).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Service](#running-the-service)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Features

- Modular, class-based organization (Controllers, Services, Models, Repository)
- GET `/users/:id` endpoint
- Validates MongoDB ObjectId format
- Returns 404 if user not found
- Returns 403 if user age ≤ 21
- Returns 400 for invalid ID format
- Graceful 500 for server errors

## Prerequisites

- Node.js v14 or newer
- npm
- MongoDB instance (local or remote)

## Project Structure

```
project-root/
├─ src/
│  ├─ app.js              # Entry point
│  ├─ routes/
│  │   └─ UserRoutes.js   # Express router
│  ├─ controllers/
│  │   └─ UserController.js
│  ├─ services/
│  │   └─ UserService.js
│  ├─ models/
│  │   └─ User.js
│  └─ repository/
│      └─ Database.js     # MongoDB connection helper
├─ .env                   # Environment variables
├─ package.json
└─ package-lock.json
```

## Installation

1. Clone the repo:

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the project root with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=Centivo
PORT=3000
```

- `MONGODB_URI`: mongodb://localhost:27017/
- `DB_NAME`: Centivo
- `PORT`: 3000

## Running the Service

- **Development** (with auto-reload):

  ```bash
  npm run dev
  ```

- **Production**:

  ```bash
  npm start
  ```

The server will be available at `http://localhost:3000`.

## API Endpoints

### GET /users/\:id

Fetch a user by their MongoDB ObjectId, only if they are older than 21.

- **URL Params**

  - `id` (string): MongoDB ObjectId of the user

- **Responses**

  - `200 OK` – Returns JSON:

    ```json
    {
      "id": "<ObjectId>",
      "name": "John Doe",
      "email": "johndoe@email.com",
      "age": 30
    }
    ```

  - `400 Bad Request` – Invalid ObjectId format

    ```json
    { "error": "Invalid ObjectId" }
    ```

  - `404 Not Found` – No user with that ID

    ```json
    { "error": "User not found" }
    ```

  - `403 Forbidden` – User exists but is under or equal to 21

    ```json
    { "error": "User is under age(21)" }
    ```

  - `500 Internal Server Error` – Unexpected server error

    ```json
    { "error": "Internal server error" }
    ```

## Error Handling

Errors are mapped to appropriate HTTP status codes and returned in JSON with an `error` message.
