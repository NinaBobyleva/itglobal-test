import "./App.scss";
import { Form } from "./components/Form/Form.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Wrapper } from "./components/Wrapper/Wrapper.jsx";

function App() {
  return (
    <div className="all">
      <Header />
      <Wrapper>
        <Sidebar />
        <Form />
      </Wrapper>
    </div>
  );
}

export default App;
