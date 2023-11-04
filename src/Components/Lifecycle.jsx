import React, { useState } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Методы жизненного цикла</h1>
      <p>Основные методы жизненного цикла:</p>
      <ol>
        <li>
          constructor ()
          <p>Обычно в React конструкторы используются только для двух целей:</p>
          <ul>
            <li>
              Инициализация локального состояния путем присвоения объекта
              this.state.
            </li>
            <li>Привязка методов обработчика событий к экземпляру.</li>
          </ul>
        </li>
        <pre>
          <code className="code">{`this.setState({username:'Mark'});`}</code>
        </pre>
        <li>
          render ()
          <p>Рендеринг компонента. Отдает JSX.</p>
          <pre>
            <code className="code">{`render () {
    return (
        <div>
          'Hello'
        </div>
          )
}`}</code>
          </pre>
        </li>
        <li>
          componentDidMount()
          <p>
            componentDidMount() вызывается сразу после монтирования компонента
            (вставки в дерево). Используется для отправки запросов на серверк
            удаленным ресурсам, setTimeout, обращение к DOM-элементам.
          </p>
          <pre>
            <code className="code">{`componentDidMount()`}</code>
          </pre>
        </li>
        <li>
          componentDidUpdate(prevProps, prevState)
          <p>
            Вызывается после обновления компонента. В качестве парапметров
            передаются старые значения объектов: props и state.
          </p>
          <pre>
            <code className="code">{`componentDidUpdate(prevProps, prevState) {
  if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
      }
}`}</code>
          </pre>
        </li>
        <li>
          componentWillUnmount()
          <p>
            Вызывается перед удалением компонента из DOM. Используется для
            закрытия асинхронных запросов, таймеров.
          </p>
          <code className="code">{`componentWillUnmount() { 
  alert("The component named Header is about to be unmounted.");
            }`}</code>
          <p>
            Для использования методов жизненного цикла в функциональных
            компонентах предназначек хук useEffect.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Lifecycle;
