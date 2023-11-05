import React, { useState } from "react";

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function State() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="content">
      <h1>Состояние</h1>
      <p>
        State (состояние) в React – это объект простого JS, позволяющий
        отслеживать данные компонента. Состояние компонента может меняться.
        Смена состояния компонента зависит от функциональности приложения.
        Изменения могут основываться на ответе от пользователя, новых сообщениях
        с сервера, ответа сети и т.д.
      </p>
      <p>
        Состояние компонента должно быть приватным для компонента и
        контролироваться им. Изменения состояния компонента необходимо делать
        внутри компонента – инициализация и обновление состояния компонента.
      </p>
      <pre className="code">
        <code>
          {`            class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = { username: 'johndoe' }
                }
                render() {
                    return (
                        <div> { this.state.username } </div>
                    )
                }
            }`}
        </code>
      </pre>
      <p>
        Единственный допустимый способ обновления состояния компонента – через
        setState().
      </p>
      <p>Так нельзя менять состояние: this.state.username='Mark'</p>
      <p>1 способ изменить state:</p>
      <pre className="code">
        <code>{`this.setState({username:'Mark'});`}</code>
      </pre>
      <p>2 способ изменить state:</p>
      <pre className="code">
        <code>{`this.setState(() => ({ username: 'Mark' }))`}</code>
      </pre>
      <p>
        В функциональных компонентах state создается с помощью хука useState()
      </p>
      <p>
        Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </p>
      <pre className="code">
        <code>{`import {useState} from 'react';`}</code>
      </pre>
      <p>
        Хук useState() принимается в качестве параметра первоначальное значение
        для переменной, а возвращает массив, содержащий переменную и функцию,
        которая изменяет эту переменную.
      </p>
      <p>
        При объявлении state часто используют деструктурирующее присваивание:
      </p>
      <pre className="code">
        <code>{`const [name, setName] = useState('Mark');`}</code>
      </pre>
      <p className="button">
        <button id="decrement" onClick={decrement}>
          -1
        </button>{" "}
        &nbsp;
        <a id="counter">Счетчик: {count}</a> &nbsp;
        <button id="increment" onClick={increment}>
          +1
        </button>
      </p>
      <p>
        Примером работы со state является счётчик, который изменяется при
        нажатии на кнопку.
      </p>
      <p>Код имеет следующий вид:</p>
      <pre className="code">
        <code>
          {`function Counter() {
                const [count, setCount] = useState(0);
                return (
                  <div className="count">
                     <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
                     <p>Счётчик: {count}</p>
                     <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
                  </div>
                );
            }`}
        </code>
      </pre>
    </div>
  );
}

export default State;
