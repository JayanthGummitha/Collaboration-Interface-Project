# Collaboration Interface

A full-stack project management and collaboration platform built with Spring Boot and React. This application provides comprehensive features for team collaboration, project management, issue tracking, and real-time communication.

## Features

- **User Authentication & Authorization**: Secure JWT-based authentication system
- **Project Management**: Create, manage, and organize projects
- **Issue Tracking**: Create, assign, and track issues with comments
- **Real-time Chat**: Team communication with messaging functionality
- **Subscription Management**: Integrated payment system with Razorpay
- **Email Notifications**: Automated email service for important updates
- **Team Collaboration**: Invite team members and manage project access

## Tech Stack

### Backend
- **Framework**: Spring Boot 3.3.1
- **Language**: Java 17
- **Database**: MySQL
- **Security**: Spring Security with JWT
- **ORM**: Spring Data JPA
- **Payment Integration**: Razorpay
- **Email**: Spring Boot Mail
- **Build Tool**: Maven

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux with Redux Thunk
- **Routing**: React Router DOM
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Axios

## Project Structure

```
.
├── backend-app/          # Spring Boot backend application
│   ├── src/
│   │   └── main/
│   │       └── java/com/collaboration_interface/
│   │           ├── config/           # Security & JWT configuration
│   │           ├── controller/       # REST API endpoints
│   │           ├── modal/            # Entity models
│   │           ├── repository/       # Data access layer
│   │           ├── service/          # Business logic
│   │           ├── request/          # Request DTOs
│   │           └── response/         # Response DTOs
│   └── pom.xml
│
└── frontend-app/         # React frontend application
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- **Java**: JDK 17 or higher
- **Node.js**: v16 or higher
- **MySQL**: 8.0 or higher
- **Maven**: 3.6 or higher
- **npm**: 8.0 or higher

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend-app
```

2. Configure MySQL database in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/collaboration_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Configure JWT secret and email settings in `application.properties`:
```properties
jwt.secret=your_jwt_secret_key
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
```

4. Configure Razorpay credentials:
```properties
razorpay.key.id=your_razorpay_key_id
razorpay.key.secret=your_razorpay_key_secret
```

5. Build and run the application:
```bash
./mvnw clean install
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure API base URL in your environment or configuration file:
```javascript
// Update the API base URL to point to your backend
const API_BASE_URL = 'http://localhost:8080';
```

4. Start the development server:
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - User login

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/{id}` - Get project by ID
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Issues
- `GET /api/issues/{issueId}` - Get issue by ID
- `GET /api/issues/project/{projectId}` - Get issues by project
- `POST /api/issues` - Create new issue
- `PUT /api/issues/{issueId}` - Update issue
- `DELETE /api/issues/{issueId}` - Delete issue

### Comments
- `POST /api/comments` - Create comment
- `DELETE /api/comments/{commentId}` - Delete comment

### Messages
- `POST /api/messages/send` - Send message
- `GET /api/messages/chat/{projectId}` - Get chat messages

### Subscriptions
- `GET /api/subscriptions/user` - Get user subscription
- `PATCH /api/subscriptions/upgrade` - Upgrade subscription

### Payments
- `POST /api/payments/{planType}` - Create payment link

## Building for Production

### Backend
```bash
cd backend-app
./mvnw clean package
java -jar target/collaboration-interface-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend-app
npm run build
```

The production-ready files will be in the `dist/` directory.

## Environment Variables

### Backend
Create `application.properties` or use environment variables:
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `JWT_SECRET`
- `SPRING_MAIL_USERNAME`
- `SPRING_MAIL_PASSWORD`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

### Frontend
Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:8080
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue in the GitHub repository.
