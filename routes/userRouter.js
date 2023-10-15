"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.Router();
router.post('/search', userController_1.default.getUsers);
router.get('/getAll', userController_1.default.getAllUsers);
exports.default = router;
