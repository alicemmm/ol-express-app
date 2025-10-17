import express, { Request, Response } from 'express';
import { setupDatabase } from './db';
import userRoutes from './routers/userRoutes';

const app = express();
const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript with Express!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:$ {port}`);
// });

// 中间件
app.use(express.json());

// 路由
app.use('/api/users', userRoutes);

// 初始化数据库并启动服务
setupDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:$ {port}`);
  });
});

async function main() {
    setupDatabase();
}

// main();
