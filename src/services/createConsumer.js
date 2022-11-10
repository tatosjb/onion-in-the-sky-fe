import { createConsumer } from "@rails/actioncable";

const WS_URL = process.env.REACT_APP_WS_URL;
console.log(WS_URL);

export default createConsumer(WS_URL);
