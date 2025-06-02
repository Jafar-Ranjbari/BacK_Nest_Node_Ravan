# Todo Application

This is a simple Todo application built with NestJS. It allows users to create, update, and delete todo items.

## Features

- Create a new todo item
- Update an existing todo item
- Delete a todo item
- List all todo items

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd todo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application, run the following command:
```
npm run start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- **Create Todo**
  - `POST /todos`
  
- **Update Todo**
  - `PUT /todos/:id`
  
- **Delete Todo**
  - `DELETE /todos/:id`
  
- **Get All Todos**
  - `GET /todos`

## License

This project is licensed under the MIT License.