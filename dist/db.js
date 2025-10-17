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
exports.initDB = initDB;
exports.setupDatabase = setupDatabase;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = (0, sqlite_1.open)({
            filename: './database.db', // 数据库文件路径
            driver: sqlite3_1.default.Database
        });
        return db;
    });
}
function setupDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield initDB(); // 初始化数据库
        yield db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE
    );

    INSERT OR IGNORE INTO users (name, email) VALUES 
      ('Alice', 'alice@example.com'),
      ('Bob', 'bob@example.com');
  `);
        return db;
    });
}
