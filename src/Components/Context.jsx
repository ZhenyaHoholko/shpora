import React from "react";

function Context() {
  return (
    <div className="content">
      <h1>Контекст</h1>
      <p>Создать контекст:</p>
      <pre className="code">
        <code>
          {`               const MyContext = React.createContext(defaultValue);`}
        </code>
      </pre>
      <ul>
        <li>
          defaultValue - дефолтное значение или объект для получения через
          контекст
        </li>
      </ul>
      <p>
        Вызывая React.createContext мы получаем объект, который содержит два
        компонента:
      </p>
      <ol>
        <li>
          Компонент Provider. Благодаря ему все дочерние компоненты могут
          получать значения, которые мы ему передаем.
          <pre className="code">
            <code>
              {`            <MyContext.Provider value={value}> </MyContext.Provider>`}
            </code>
          </pre>
          <p>
            Компонент Provider принимает проп value, который будет передан во
            все компоненты, использующие этот контекст и являющиеся потомками
            этого компонента Provider. Один Provider может быть связан с
            несколькими компонентами, потребляющими контекст. Так же компоненты
            Provider могут быть вложены друг в друга, переопределяя значение
            контекста глубже в дереве.
          </p>
        </li>
        <li>
          <p>
            Компонент Consumer - это React-компонент, который подписывается на
            изменения контекста.
          </p>
          <p>
            Consumer принимает функцию в качестве дочернего компонента. Эта
            функция принимает текущее значение контекста и возвращает
            React-компонент. Передаваемый аргумент value будет равен ближайшему
            (вверх по дереву) значению этого контекста, а именно пропу value
            компонента Provider. Если такого компонента Provider не существует,
            аргумент value будет равен значению defaultValue, которое было
            передано в createContext().
          </p>
          <pre className="code">
            <code>
              {`            <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>`}
            </code>
          </pre>
          <p>
            Хук useContext. Принимает один параметр - это объект контекста,
            получаемый при вызове React.createContext и возвращает текущее
            значение контекста для этого контекста.
          </p>
          <p>
            Текущее значение контекста определяется пропом value ближайшего
            MyContext.Provider над вызывающим компонентом в дереве.
          </p>
          <pre className="code">
            <code className="code">{`            const value = useContext(MyContext);`}</code>
          </pre>
          <p>
            Компонент, вызывающий useContext, всегда будет перерендериваться при
            изменении значения контекста. Если повторный рендер компонента
            затратен, вы можете оптимизировать его с помощью мемоизации.
          </p>
          <p>Контекст лучше всего создавать в отдельном файле.</p>
        </li>
      </ol>
    </div>
  );
}

export default Context;