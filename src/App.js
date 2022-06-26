import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/Todo/TodoTemplate";
import CalendarTemplate from "./components/Calendar/CalendarTemplate";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
      <CalendarTemplate />
    </>
  );
}

export default App;
