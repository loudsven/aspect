# React + Redux + TypeScript + Vite

## Элементы

-   **panel** со свойствами: width, height, visible
-   **label** со свойствами: caption, visible
-   **button** со свойствами: caption, width, height, visible

-   width, height – число
-   caption – текст
-   visible – true/false

## Задача:

1. Задать начальный content, который будет включать в себя весь перечень элементов (включая вложенные) и отобразить его на экране.(`panel - <div> с рамкой`, `label - <span> c текстом`, `button - <button> с надписью`)соответственно с учетом размеров и видимости
2. В поле **«Путь»** вводим строку, в которой задаем путь внутри content.<br />Например: `'content[2].props.caption'`в поле **«Новое значение»** указываем новое значение данного свойства. Например: **'test2'**.

По клику на кнопке «применить» объект должен измениться и на экране должен отобразитьсяновое содержимое contentв поле «Новое значение» можно внести в том числе и такое значение: **{type: 'label', props: {caption: 'test', visible: false}}**.<br />
В этом случае, если путь существует, то объект заменится, иначе -добавится в конец массива content.Напримере, описанном выше:<br />Если путь: **content[0].content[0]**, то объект заменится на новый.<br />Если путь: **content[0].content[1]**, то объект добавится.
