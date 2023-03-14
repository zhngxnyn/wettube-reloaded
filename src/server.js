import express from "express"; // express: node.js에서 동작하는 web framework
// framework: 반복적으로 어디에서나 등장하는 일들을 처리할 때 더 적은 코드, 지식으로도 더 많은 일을 보다 안전하게 처리할 수 있도록 도와줄 수 있는 도구.
// -> 공통적인 일은 framework가 미리 구현해놓은 기능을 사용하고 웹 사이트 개발자는 웹사이트 개성에 집중할 수 있도록하는 제품
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000; // 컴퓨터의 창문같은 것..

const app = express();
const logger = morgan("dev");

app.use(logger);

// create application
// ---------------------------------------------------
// application 설정

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// middleware를 use하는 게 먼저 오고, url의 get이 와야한다. -> 모든 url에 적용할 수 있음
// app.use(methodLogger, routerLogger); // global middleware를 만들 수 있게 해준다.

// server: 항상 켜져있는 컴퓨터 같은 것, request를 listening하고있음
// middleware: request와 response 사이에 있다. 브라우저가 request한 다음, 그리고 내가 응답하기 전. middleware = handler(controller)
// -> 응답하는 함수가 아니라 작업을 다음 함수에게 넘기는 함수

// ---------------------------------------------------
// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

// http: 서버끼리 소통하는 방법
