"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var NoteSchema = new mongoose_1.default.Schema({
    title: {
        type: 'String',
        required: true,
        minlength: 1,
        maxlength: 300,
    },
    detail: {
        type: 'String',
        maxlength: 3600,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
var Note = mongoose_1.default.model("Note", NoteSchema);
exports.default = Note;
