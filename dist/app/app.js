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
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
//for text body
app.use(express_1.default.text());
//create router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
//use router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created",
        data: user,
    });
});
userRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url);
    next();
};
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (err) {
        console.log(err);
        next(console_1.error); // commented the previous and passing the error to global error by next(error)
        // res.status(400).json({
        //   success: false,
        //   message: "failed",
        // });
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "gotd data",
    });
});
// if we give unknow url like http://localhost:6001/ksdjfds this generally Cannot GET /ksdjfds this in browser but now after writing app.all function we get a beutiful json error like global error.need to clarify that global error handles only the routes match error that are defined ,we need to give this app.all to catch the unknow url error properly.
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "route not found",
    });
});
//global error hanlder
app.use((error, req, res, next) => {
    if (error) {
        //the error here coming from all the routes the here by next function. whenever uses next function . it means the routes dont want to handle error my themselves rathar it wants to pass the extra error handling work for this global error handler.thats the simple overview what is global error handler.
        res.status(400).json({
            success: false,
            message: "Somehting went wrong",
        });
    }
});
exports.default = app;
