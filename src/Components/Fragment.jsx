import React from "react";

function Fragment() {
  return (
    <div className="content">
      <h1>Фрагмент</h1>
      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM.
      </p>
      <p>
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>
      <pre className="code">
        <code>{`            import { Fragment } from 'react';`}</code>
      </pre>
      <p>Заменяем теги div на Fragment:</p>
      <pre className="code">
        <code>{`            class ChildComponent extends React.Component {
                render() {
                    return (
                        <Fragment>
                            <h1>Hello Child Component</h1>
                        </Fragment>
                    )
                }
            }`}</code>
      </pre>
      <p>Существует сокращенная запись (импортировать не нужно):</p>
      <pre className="code">
        <code>{`             class ChildComponent extends React.Component {
                render() {
                    return (
                        <>
                            <h1>Hello Child Component</h1>
                        </>
                    )
                }
            }`}</code>
      </pre>
      <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
    </div>
  );
}

export default Fragment;
