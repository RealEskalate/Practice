"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = __importDefault(require("./task"));
var note_1 = __importDefault(require("./note"));
exports.default = {
    taskRouter: task_1.default,
    noteRouter: note_1.default
};
