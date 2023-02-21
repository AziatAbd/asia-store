import styled from "styled-components";
import "./App.css";
import Header from "./components/header/Header";
import { Button } from "./components/UI/Button";
import { ReactComponent as Message } from "./assets/icons/message.svg";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <MainRoutes />

        <Button>
          <a
            href="https://api.whatsapp.com/send/?phone=996220011111&text&type=phone_number&app_absent=0"
            target={"_blank"}
            rel="noreferrer"
          >
            <Messages />
          </a>
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default App;

const Messages = styled(Message)`
  background: none;
  color: black;
`;
