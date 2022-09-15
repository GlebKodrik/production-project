import {seyHello} from "./test";
import {render} from "react-dom";
import Counter from "./components/counter";

seyHello(12)

render(
  <Counter />,
  document.getElementById('root')
)