import React from "react";

function Router() {
  return (
    <div>
      <h1>Router</h1>
      <p>
        В React имеется своя система маршрутизации, которая позволяет
        сопоставлять запросы к приложению с определенными компонентами. Ключевым
        звеном в работе маршрутизации является модуль react-router, который
        содержит основной функционал по работе с маршрутизацией. Однако если мы
        собираемся работать в браузере, то нам также надо использовать модуль
        react-router-dom.
      </p>
      <pre>
        <code className="code">{`           npm i react-router-dom`}</code>
      </pre>
      <p>После установки нужно импортировать BrowserRouter, Routes, Route:</p>
      <pre>
        <code className="code">{`            import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';`}</code>
      </pre>
      <p>
        Вместо рендеринга компонента App мы рендерим компонент Router. Компонент
        Router передает информацию о текущем местоположении всем дочерним
        элементам, вложенным в него. Его следует использовать один раз и
        поместить рядом с корнем дерева компонентов:
      </p>
      <pre>
        <code className="code">{`            render(
                <Router>
                <App />
                </Router>,
                document.getElementById("root")
            ); `}</code>
      </pre>
      <p>
        Компонент-оболочка для любых маршрутов, которые мы хотим отобразить,
        называется Routes. Внутри Routes мы будем использовать компонент Route
        для каждой страницы, которую хотим отобразить.
      </p>
      <pre>
        <code className="code">{`            import React from "react";
            import { Routes, Route } from "react-router-dom";
            import { Home, About, Events, Products, Contact } from "./pages";
            function App() {
                return (
                    <div>
                         <Routes>
                            <Route path="/" element={<Home />} />
                            <Route  path="/about"  element={<About />} />
                            <Route  path="/events"  element={<Events />}  />
                            <Route  path="/products"  element={<Products />}  />
                            <Route  path="/contact"  element={<Contact />}  />
                        </Routes>
                     </div>
                );
            }`}</code>
      </pre>
    </div>
  );
}

export default Router;
