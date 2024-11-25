import { Server } from "http";
import app from "./app";

const PORT = 6001;

let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log(` app listening on PORT ${PORT}`);
  });
}

bootstrap();
