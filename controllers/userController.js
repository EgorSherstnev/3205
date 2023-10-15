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
const db_1 = require("../db");
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield new Promise((resolve) => setTimeout(resolve, 5000));
                const { email, number } = req.body;
                console.log(`getUsers: email ${email} and number ${number}`);
                const foundUsers = db_1.users.filter((user) => {
                    return (user.email.toLowerCase() === email.toLowerCase() &&
                        (number === '' || user.number === number));
                });
                res.json(foundUsers);
            }
            catch (e) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(db_1.users);
        });
    }
}
const userController = new UserController();
exports.default = userController;
