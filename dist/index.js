"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const userRoutes_1 = __importDefault(require("./routers/userRoutes"));
const app = (0, express_1.default)();
const port = 3000;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript with Express!');
// });
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:$ {port}`);
// });
// 中间件
app.use(express_1.default.json());
// 路由
app.use('/api/users', userRoutes_1.default);
// 初始化数据库并启动服务
(0, db_1.setupDatabase)().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:$ {port}`);
    });
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, db_1.setupDatabase)();
    });
}
// main();
