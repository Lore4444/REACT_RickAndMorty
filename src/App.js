import "./App.css";
import { Header } from "./components/public/Header";
import { Footer } from "./components/public/Footer";
// import  Main  from './components/public/Main';

import Main from "./components/public/Main";
import { Route, Routes } from "react-router-dom";
import { Detail } from "./components/public/Detail";
import { UserForm } from "./components/public/UserForm";
import { Cards } from "./components/public/Cards";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route exact path={"/details/:id"} element={<Detail />} />
        <Route exact path={"/user-form"} element={<UserForm />} />
        <Route exact path={"/characters"} element={<Cards />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
