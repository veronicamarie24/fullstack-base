# Fullstack Base Template

A production-ready full-stack TypeScript template with React frontend and Express.js backend, featuring Prisma ORM with SQLite database. This template is designed to be cloned and customized for new applications.

## Starter Template

This is a **starter template** that provides a solid foundation for building full-stack web applications. It includes:

- **Modern Tech Stack**: Latest versions of React, Express, TypeScript, and Prisma
- **Type Safety**: Full TypeScript support across frontend and backend
- **Database Ready**: SQLite with Prisma ORM for easy data modeling
- **Development Experience**: Hot reloading, linting, and modern tooling
- **Production Ready**: Build configurations and deployment guidance

## When to use this template

Use this template when you want to:
- Start a new full-stack web application
- Build APIs with a modern Node.js backend
- Create React applications with a robust backend
- Have a solid foundation that scales with your project
- Avoid boilerplate setup and focus on your business logic

## Getting Started

### 1. Clone and Customize

1. Clone this repository:
   ```bash
   git clone <your-repo-url> your-app-name
   cd your-app-name
   ```

2. Update project information:
   - Rename the project in both `package.json` files
   - Update the README with your project details
   - Modify the database schema in `backend/prisma/schema.prisma`
   - Customize the frontend components in `frontend/src/`

3. Initialize git for your new project:
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit from fullstack base template"
   ```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Customize your database schema:
   ```bash
   # Edit prisma/schema.prisma to define your data models
   # Example:
   # model User {
   #   id    Int     @id @default(autoincrement())
   #   name  String
   #   email String  @unique
   #   posts Post[]
   # }
   # 
   # model Post {
   #   id     Int    @id @default(autoincrement())
   #   title  String
   #   content String
   #   author User   @relation(fields: [authorId], references: [id])
   #   authorId Int
   # }
   ```

4. Set up the database:
   ```bash
   # Create and run migrations
   npx prisma migrate dev --name init
   
   # Generate Prisma client
   npx prisma generate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The backend will be available at `http://localhost:3000`.

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Customize the application:
   - Update `src/App.tsx` with your main application logic
   - Add new components in `src/components/`
   - Configure routing if needed
   - Customize the Material-UI theme

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`.

## Project Structure

```
fullstack-base/
├── backend/          # Express.js API server
│   ├── src/         # TypeScript source code
│   │   └── index.ts # Main server file
│   ├── prisma/      # Database schema and migrations
│   │   └── schema.prisma # Define your data models here
│   └── package.json # Backend dependencies
└── frontend/        # React application
    ├── src/         # React components and logic
    │   ├── App.tsx  # Main application component
    │   └── main.tsx # Application entry point
    ├── public/      # Static assets
    └── package.json # Frontend dependencies
```

## Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: SQLite with Prisma ORM
- **Development**: ts-node-dev for hot reloading

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Development**: Hot Module Replacement (HMR)

## Development Workflow

### Running Both Servers

1. Start both servers in separate terminals:
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

2. Development features:
   - Frontend automatically reloads when you change React components
   - Backend restarts when you modify TypeScript files
   - Database changes are reflected immediately with Prisma

### Making Changes

1. **Backend Changes**:
   - Add new routes in `backend/src/index.ts`
   - Create new Prisma models in `backend/prisma/schema.prisma`
   - Run `npx prisma migrate dev` after schema changes
   - Use `npx prisma studio` to view/edit data

2. **Frontend Changes**:
   - Add new components in `frontend/src/components/`
   - Update the main app in `frontend/src/App.tsx`
   - Customize styling with Material-UI components
   - Add new pages and routing as needed

## Database Management

- **Provider**: SQLite (file-based, no server required)
- **ORM**: Prisma
- **Database file**: `dev.db` (created automatically on first migration)

### Useful Database Commands

- `npx prisma studio` - Open database GUI
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes without migrations
- `npx prisma db seed` - Seed database with initial data (if configured)

## API Development

The backend provides a REST API that the frontend can consume:

1. **Define Models**: Add your data models in `prisma/schema.prisma`
2. **Create Routes**: Add API endpoints in `src/index.ts`
3. **Database Operations**: Use Prisma Client for database interactions
4. **Testing**: Test endpoints with tools like Postman, curl, or Thunder Client

### Example API Route

```typescript
// In backend/src/index.ts
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
```

## Frontend Development

The frontend is built with modern React patterns:

- **Components**: Functional components with hooks
- **Styling**: Material-UI components with Emotion
- **Type Safety**: Full TypeScript support
- **Development**: Fast refresh and hot module replacement

### Useful Frontend Commands

- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization Guide

### Backend Customization

1. **Environment Variables**: Add `.env` file for configuration
2. **Middleware**: Add authentication, CORS, etc. in `src/index.ts`
3. **Database**: Switch to PostgreSQL/MySQL for production
4. **Validation**: Add input validation with libraries like Zod
5. **Testing**: Add Jest or Vitest for testing

### Frontend Customization

1. **Routing**: Add React Router for multi-page applications
2. **State Management**: Add Redux Toolkit or Zustand if needed
3. **Authentication**: Implement login/logout flows
4. **Styling**: Customize Material-UI theme or switch to other UI libraries
5. **Testing**: Add React Testing Library for component testing

## Deployment

### Backend Deployment

1. **Build**: The TypeScript code will be compiled during deployment
2. **Environment**: Set up environment variables for production
3. **Database**: Consider using PostgreSQL or MySQL for production
4. **Platforms**: Deploy to Heroku, Railway, Render, or your preferred hosting

### Frontend Deployment

1. **Build**: Run `npm run build` to create optimized production files
2. **Static Hosting**: Deploy the `dist` folder to Vercel, Netlify, or similar
3. **Environment**: Configure environment variables for API endpoints
4. **Domain**: Set up custom domain and SSL certificate

## Next Steps

After setting up your project:

1. **Define Your Data Models**: Update `prisma/schema.prisma` with your application's data structure
2. **Create API Endpoints**: Add routes in `backend/src/index.ts` for your application's features
3. **Build UI Components**: Create React components in `frontend/src/` for your user interface
4. **Add Authentication**: Implement user authentication if needed
5. **Add Testing**: Set up testing frameworks for both frontend and backend
6. **Configure CI/CD**: Set up automated testing and deployment pipelines

## Support

This template provides a solid foundation, but you'll need to:
- Add your specific business logic
- Implement authentication and authorization
- Add error handling and validation
- Set up testing and CI/CD
- Configure production environments

The template is designed to get you started quickly while maintaining flexibility for your specific needs. 