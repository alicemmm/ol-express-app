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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUserById = getUserById;
const db_1 = require("../db");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, db_1.initDB)();
            const users = yield db.all("SELECT * FROM users");
            res.json({ success: true, data: users });
        }
        catch (err) {
            res.status(500).json({
                error: 'Database query failed',
                success: false
            });
        }
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        const db = yield (0, db_1.initDB)();
        const user = yield db.get("SELECT * FROM users WHERE id = ?", id);
        user ? res.json({ success: true, data: user }) : res.status(404).send({ success: false, error: 'User not found' });
    });
}
