import React, { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div className="content">
      <h1>Обработка событий</h1>
      <p>
        События в React именуются в стиле camelCase вместо нижнего регистра.
      </p>
      <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
      <p>Популярные обработчики событий: onClick, onChange</p>
      <p>Существует множество поддерживаемых событий, вот общий список:</p>
      <ul>
        <li>Буфер обмена: onCopy, onCut, onPaste</li>
        <li>
          Составление/ввод данных: onCompositionEnd, onCompositionStart,
          onCompositionUpdate
        </li>
        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
        <li>Фокусировка: onFocus, onBlur</li>
        <li>Форма: onChange, onInput, onSubmit</li>
        <li>
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
          onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop,
          onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
          onMouseOver, onMouseUp
        </li>
        <li>Выделение: onSelect</li>
        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
        <li>UI: onScroll</li>
        <li>Колёсико мышки: onWheel</li>
        <li>
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
          onEmptied, onEncrypted, onEnded, onError, onLoadedData,
          onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress,
          onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting
        </li>
        <li>Изображение: onLoad, onError</li>
        <li>
          Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
        </li>
        <li>Переход: onTransitionEnd</li>
      </ul>
      <pre className="code">
        <code>{`            <button onClick={activateLasers}>
            Активировать лазеры
            </button>`}</code>
      </pre>
      <p>
        В React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault.
      </p>
      <pre className="code">
        <code>{`            function Form() {
                function handleSubmit(e) {
                  e.preventDefault();
                  console.log('Отправлена форма.');
                }
                return (
                  <form onSubmit={handleSubmit}>
                    <button type="submit">Отправить</button>
                  </form>
                );
            }`}</code>
      </pre>
      <p>
        В компоненте, определённом с помощью ES6-класса, в качестве обработчика
        события обычно выступает один из методов класса. Например, этот
        компонент Toggle рендерит кнопку, которая позволяет пользователю
        переключать состояния между «Включено» и «Выключено»:
      </p>
      <pre className="code">
        <code>{`            class Toggle extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {isToggleOn: true};
              
                  // Эта привязка обязательна для работы 'this' в колбэке.
                    this.handleClick = this.handleClick.bind(this);
                }

                handleClick() {
                    this.setState(prevState => ({
                        isToggleOn: !prevState.isToggleOn
                    }));
                }

                render() {
                    return (
                        <button className={'toggle__btn'} onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                        </button>
                    );
                }
            }

                    ReactDOM.render(
                    <Toggle />,
                    document.getElementById('root')
                    );`}</code>
      </pre>
      <p className="button">
        Результат кода:
        <pre className="button">
          <code>
            <button className={"toggle__btn"} onClick={() => handleClick()}>
              {isToggleOn ? "Включено" : "Выключено"}
            </button>
          </code>
        </pre>
      </p>
      <p>Этот же код, но переписанный на функциональную компоненту:</p>
      <pre className="code">
        <code>{`            function Toggle() {
                let [isToggleOn, setIsToggleOn] = useState(true);
                function handleClick() {
                  setIsToggleOn(!isToggleOn)
                }
                return (
                  <button className={'toggle__btn'} onClick={() => handleClick()}>
                    {isToggleOn ? 'Включено' : 'Выключено'}
                  </button>
                );
              }`}</code>
      </pre>
      <p>
        Внутри цикла часто нужно передать дополнительный аргумент в обработчик
        события. Например, если id — это идентификатор строки, можно
        использовать следующий вариант:
      </p>
      <pre className="code">
        <code>{` <button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>`}</code>
      </pre>
    </div>
  );
}

export default Events;
