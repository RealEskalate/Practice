"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var DB_URI = process.env.MONGO_URI;
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api/tasks", routes_1.default.taskRouter);
app.use("/api/notes", routes_1.default.noteRouter);
// @ts-ignore -- added to ignore the DB_URI error since it's a environment setup issue
mongoose_1.default.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(function () {
    app.listen(8000, function () { return console.log('Server running...'); });
})
    .catch(function (err) { return console.log('Error occured while connecting', err); });
