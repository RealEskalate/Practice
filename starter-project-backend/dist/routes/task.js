"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var task_1 = require("../controllers/task");
var router = express_1.default.Router();
router.get('/', task_1.getTasks);
exports.default = router;
