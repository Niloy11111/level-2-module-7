#### first we need to install

```javascript
yarn add express @types/express @types/node typescript nodemon -D

```

#### this is for run two terminal to properly visualize my coding actvites

#### to keep update the js from ts

```javascript
tsc - w;
```

#### to keep update nodemon use

```javascript
yarn start:dev
```

#### params

```javascript
"http://localhost:6001/56/75";
app.get("/:userId/:subid", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello world!");
});
```

#### params

```javascript
"http://localhost:6001/?email=hello@gmail.com";
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello world!");
});
```

#### 7-8 Middleware in express.js

#### milldleware works to connect request and response. so before sending the response we need to give a call to next function to run the middleware to next.otheerwise it wont run.
