# Fullstack Base Template

A full-stack TypeScript template for local app development with React frontend and Express.js backend, featuring Prisma ORM with SQLite database. This template is designed to be cloned and customized for new local applications.

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
- **Development**: Hot Module Replacement (HMR)

## Getting Started

### 1. Clone and Customize

1. Clone this repository:
   ```bash
   git clone https://github.com/veronicamarie24/fullstack-base.git your-app-name
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
   ```
   # Example:
   model User {
      id    Int     @id @default(autoincrement())
      name  String
      email String  @unique
      posts Post[]
   }
    
   model Post {
      id     Int    @id @default(autoincrement())
      title  String
      content String
      author User   @relation(fields: [authorId], references: [id])
      authorId Int
   }
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

The backend will be available at `http://localhost:3001`.

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

## Development Workflow

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