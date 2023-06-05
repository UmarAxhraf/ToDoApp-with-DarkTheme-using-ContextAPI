import "./App.css";
// import "./App-Dark.css"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./Container";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </>
  );
};

export default App;
