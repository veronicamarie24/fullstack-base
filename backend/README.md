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