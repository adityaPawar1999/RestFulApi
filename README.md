# RestFulApi
The Field Template API documentation facilitates seamless management of field templates through clear authentication instructions, CRUD operations, and illustrative examples, enhancing developers' API interaction experience.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Technologies Used](#technologies-used)


## Description 
The Field Template API documentation offers a comprehensive guide to managing field templates, covering authentication, CRUD operations, and pagination. 
It enables developers to seamlessly create, retrieve, update, and delete field templates using clear endpoint descriptions and illustrative request/response examples, enhancing API interaction efficiency.


## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityaPawar1999/RestFulApi.git
   
2. **Navigate to the project directory:**
   cd RestFulApi

3. **Install dependencies:**
   npm i express bcrypt dotenv http jsonwebtoken mongoose nodemon slug



## API Endpoints

List all the available endpoints, along with their methods and functionalities, in a tabular format.

| Endpoint                  | Method | Description              |
| ------------------------- | ------ | ------------------------ |
| /api/fields               | GET    | Retrieve all fields      |
| /api/fields/:id           | GET    | Retrieve a single fields |
| /api/fields               | POST   | Create a new fields      |
| /api/fields/:id           | PUT    | Update an fields         |
| /api/fields/:id           | DELETE | Delete an fields         |




## Authentication

To access certain endpoints, you need to obtain an authentication token. Follow the steps below to obtain the token using Postman:

1. Obtain an authentication token.
2. Include the token in the `Authorization` headers of your HTTP request.

const userData = {
  id: 'aditya20', 
  username: 'adityaPawar',
}

**Token :**

Authorization: **eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsInVzZXJuYW1lIjoiYWRpdHlhUGF3YXIiLCJpYXQiOjE2OTcxNDAxMTF9.zwCN8RTsZDKg_S3yk6N_5KslHvxPRDxOpNpf1LVTBSA**




## Technologies Used

This project is built using the following technologies and tools:

- Node.js
- Express.js
- MongoDB 
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Postman (for API testing)
  
Ensure you have these technologies installed and configured before running the project.

