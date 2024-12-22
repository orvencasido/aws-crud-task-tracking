# CRUD Web Application
Live Preview: <a href="https://d26chwpjybvo1s.cloudfront.net/">CRUD Web Application</a>

NOTE: To access the web app, you must first log in using a valid email address, verify the email, and then log in again with the user account you created.

This project is a serverless CRUD web application that allows users to add, edit, delete, and view tasks. It demonstrates the integration of front-end and back-end services using AWS technologies. Below is the architecture of the application:




## System Architecture
![CRUD Web Application Architecture](crud-system-architecture.png)






## Technology Used

Front-end: HTML, JavaScript
Back-end: AWS Lambda, API Gateway, DynamoDB
Hosting: AWS S3, AWS CloudFront
Authentication: AWS Cognito
Version Control: Git, GitHub




## 🔗 Developer Links
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/orvencasido)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/orven-casido-39bb58319/)
[![faceook](https://img.shields.io/badge/facebook-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://www.facebook.com/profile.php?id=100008985125961)


# CRUD Web Application Documentation

### Project Overview
The project showcases the cloud skills through the CRUD Web Application.


## Front-end Development

### HTML Creation
HTML file was created with a simple interface. It includes buttons for Add, Edit, Delete, Read, and Insert Text functionalities.

### JavaScript Functionality
A JavaScript file was written to handle user interactions and send requests to AWS services. The logic includes methods for POST, PATCH, DELETE, and GET requests, connecting the user interface to back-end APIs.

### GitHub Integration
The codebase was uploaded to GitHub for version control and collaboration. 


## Hosting the Front-end

### Static Website Hosting with S3
The HTML and JavaScript files were uploaded to an S3 bucket configured for static website hosting.

### Secure Hosting with CloudFront
AWS CloudFront was configured to serve the content securely with HTTPS. This setup improves performance by caching the content at multiple edge locations globally.


## Back-end Development

### Database Configuration
- A DynamoDB table was created to store tasks. The table includes a primary key (taskid) and attributes like taskName.
- The database is optimized for scalability and integrated seamlessly with the Lambda functions.

### Lambda Function Development
- AWS Lambda was used for serverless backend operations. A Python script was written to handle CRUD operations, connecting to DynamoDB and API Gateway.
- Functions implemented:
  = POST: Add a new task
  = GET: Retrieve tasks
  = PATCH: Edit a task
  = DELETE: Remove a task

### API Gateway Configuration
- API Gateway was configured with resources for POST, PATCH, DELETE, and GET methods.
- CORS was enabled to allow requests from the front-end.

### User Authentication with Cognito
- AWS Cognito was configured to secure the application. It authenticates users before allowing access to the web app.
- Users are redirected to a Cognito-hosted login page for authentication.

## Challenges Faced and Solutions

### Configuring CORS in API Gateway
Solution: Properly configured the Access-Control-Allow-Origin header in API Gateway responses.

### Javascript Functionality and DynamoDB variable naming
Solution: Manualy Debugging every code using network browser tools. 

### Conclusion
This CRUD application project was a comprehensive exercise in designing and deploying a scalable and secure web application on AWS. The combination of front-end and back-end services, along with modern serverless technologies, highlights the practical applications of cloud computing in real-world scenarios.

2024 | Orven Casido








