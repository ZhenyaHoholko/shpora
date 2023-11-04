import React from "react";

function UseEffect() {
  return (
    <div>
      <h1>UseEffect</h1>
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук useEffect.
      </p>
      <pre>
        <code className="code">{`             import {useEffect} from 'react';`}</code>
      </pre>
      <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
      <ul>
        <li>componentDidMount()</li>
        <li>componentDidUpdate(prevProps, prevState)</li>
        <li>componentWillUnmount()</li>
      </ul>
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - [ ] (аналог componentDidMount).
      </p>
      <pre>
        <code className="code">{`            useEffect ( () => { }, [])`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - массив с зависимостью (или несколькими) (аналог
        componentDidUpdate).
      </p>
      <pre>
        <code className="code">{`             useEffect ( () => { }, [name])`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, второго
        параметра - нет (аналог componentDidMount + componentDidUpdate).
      </p>
      <pre>
        <code className="code">{`            useEffect ( () => { } )`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, которая
        возвращает другую функцию (аналог componentWillUnmount).
      </p>
      <pre>
        <code className="code">{`            useEffect ( () => {
                return () => {};
            })`}</code>
      </pre>
    </div>
  );
}

export default UseEffect;
