import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
const app = express();

//parser
app.use(express.json());

//for text body
app.use(express.text());

//create router
const userRouter = express.Router();
const courseRouter = express.Router();

//use router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created",
    data: user,
  });
});
userRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "User is created",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
};

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(something);
    } catch (err) {
      console.log(err);
      next(error); // commented the previous and passing the error to global error by next(error)
      // res.status(400).json({
      //   success: false,
      //   message: "failed",
      // });
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "gotd data",
  });
});

// if we give unknow url like http://localhost:6001/ksdjfds this generally Cannot GET /ksdjfds this in browser but now after writing app.all function we get a beutiful json error like global error.need to clarify that global error handles only the routes match error that are defined ,we need to give this app.all to catch the unknow url error properly.
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "route not found",
  });
});

//global error hanlder
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    //the error here coming from all the routes the here by next function. whenever uses next function . it means the routes dont want to handle error my themselves rathar it wants to pass the extra error handling work for this global error handler.thats the simple overview what is global error handler.
    res.status(400).json({
      success: false,
      message: "Somehting went wrong",
    });
  }
});

export default app;
