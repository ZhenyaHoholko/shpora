import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Asynchronous from "./Components/Asynchronous";
import Components from "./Components/Components";
import Context from "./Components/Context";
import Events from "./Components/Events";
import Form from "./Components/Form";
import Fragment from "./Components/Fragment";
import Home from "./Components/Home";
import Key from "./Components/Key";
import Lifecycle from "./Components/Lifecycle";
import ReactMemo from "./Components/ReactMemo";
import NotFound from "./Components/NotFound";
import Props from "./Components/Props";
import Refs from "./Components/Refs";
import Router from "./Components/Router";
import State from "./Components/State";
import UseEffect from "./Components/UseEffect";
import Virtual from "./Components/Virtual";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  return (
    <div className="forFonts">
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/asynchronousrequests" element={<Asynchronous />}></Route>
        <Route path="/components" element={<Components />}></Route>
        <Route path="/context" element={<Context />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/fragment" element={<Fragment />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/key" element={<Key />}></Route>
        <Route path="/lifecycle" element={<Lifecycle />}></Route>
        <Route path="/props" element={<Props />}></Route>
        <Route path="/reactMemo" element={<ReactMemo />}></Route>
        <Route path="/refs" element={<Refs />}></Route>
        <Route path="/router" element={<Router />}></Route>
        <Route path="/state" element={<State />}></Route>
        <Route path="/useEffect" element={<UseEffect />}></Route>
        <Route path="/virtual" element={<Virtual />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <footer className="footer">App ©2023 Created by Zhenya Hoholko</footer>
    </div>
  );
}

export default App;
