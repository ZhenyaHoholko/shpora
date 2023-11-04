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
    <div>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/AsynchronousRequests" element={<Asynchronous />}></Route>
        <Route path="/Components" element={<Components />}></Route>
        <Route path="/Context" element={<Context />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Fragment" element={<Fragment />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Key" element={<Key />}></Route>
        <Route path="/Lifecycle" element={<Lifecycle />}></Route>
        <Route path="/Props" element={<Props />}></Route>
        <Route path="/ReactMemo" element={<ReactMemo />}></Route>
        <Route path="/Refs" element={<Refs />}></Route>
        <Route path="/Router" element={<Router />}></Route>
        <Route path="/State" element={<State />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="/Virtual_DOM" element={<Virtual />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
