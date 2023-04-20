class Keyboard {
  keysInfo = [
              [
                ['keyboard-key keyboard-key--backquote', '~', 'Ë', 'key-backquote', '`', 'ё'], 
                ['keyboard-key', '!', '', 'key-1', '1', ''], 
                ['keyboard-key', '@', '', 'key-2', '2', ''], 
                ['keyboard-key', '#', '', 'key-3', '3', ''], 
                ['keyboard-key', '$', '', 'key-4', '4', ''], 
                ['keyboard-key', '%', '', 'key-5', '5', ''], 
                ['keyboard-key', '^', '', 'key-6', '6', ''], 
                ['keyboard-key', '&', '', 'key-7', '7', ''], 
                ['keyboard-key', '*', '', 'key-8', '8', ''], 
                ['keyboard-key', '(', '', 'key-9', '9', ''], 
                ['keyboard-key', ')', '', 'key-0', '0', ''], 
                ['keyboard-key', '_', '', 'key-dash', '-', ''], 
                ['keyboard-key', '+', '', 'key-equals', '=', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--backspace', '', '', 'key-backspace', 'Backspace', ''], 
              ], 
              [
                ['keyboard-key keyboard-key--functional', '', '', 'key-tab', 'Tab', ''], 
                ['keyboard-key keyboard-key--letter', 'Q', 'Й', 'key-q', 'q', 'й'], 
                ['keyboard-key keyboard-key--letter', 'W', 'Ц', 'key-w', 'w', 'ц'], 
                ['keyboard-key keyboard-key--letter', 'E', 'У', 'key-e', 'e', 'у'], 
                ['keyboard-key keyboard-key--letter', 'R', 'К', 'key-r', 'r', 'к'], 
                ['keyboard-key keyboard-key--letter', 'T', 'Е', 'key-t', 't', 'е'], 
                ['keyboard-key keyboard-key--letter', 'Y', 'Н', 'key-y', 'y', 'н'], 
                ['keyboard-key keyboard-key--letter', 'U', 'Г', 'key-u', 'u', 'г'], 
                ['keyboard-key keyboard-key--letter', 'I', 'Ш', 'key-i', 'i', 'ш'], 
                ['keyboard-key keyboard-key--letter', 'O', 'Щ', 'key-o', 'o', 'щ'], 
                ['keyboard-key keyboard-key--letter', 'π', 'З', 'key-p', 'p', 'з'], 
                ['keyboard-key', '{', 'Х', 'key-left-square-bracket', '[', 'х'], 
                ['keyboard-key', '}', 'Ъ', 'key-right-square-bracket', ']', 'ъ'], 
                ['keyboard-key', '|', '/', 'key-backslash', '\\', ''], 
                ['keyboard-key keyboard-key--functional', '', '', 'key-del', 'Del', ''], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--capslock', '', '', 'key-capslock', 'CapsLock', ''], 
                ['keyboard-key keyboard-key--letter', 'A', 'Ф', 'key-a', 'a', 'ф'], 
                ['keyboard-key keyboard-key--letter', 'S', 'Ы', 'key-s', 's', 'ы'], 
                ['keyboard-key keyboard-key--letter', 'D', 'В', 'key-d', 'd', 'в'], 
                ['keyboard-key keyboard-key--letter', 'F', 'А', 'key-f', 'f', 'а'], 
                ['keyboard-key keyboard-key--letter', 'G', 'П', 'key-g', 'g', 'п'], 
                ['keyboard-key keyboard-key--letter', 'H', 'Р', 'key-h', 'h', 'р'], 
                ['keyboard-key keyboard-key--letter', 'J', 'О', 'key-j', 'j', 'о'], 
                ['keyboard-key keyboard-key--letter', 'K', 'Л', 'key-k', 'k', 'л'], 
                ['keyboard-key keyboard-key--letter', 'L', 'Д', 'key-l', 'l', 'д'], 
                ['keyboard-key', ':', 'Ж', 'key-semicolon', ';', 'ж'], 
                ['keyboard-key', '"', 'Э', 'key-single-quote', '\'', 'э'], 
                ['keyboard-key keyboard-key--functional keyboard-key--enter', '', '', 'key-enter', 'Enter', ''], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'key-shift-left', 'Shift', ''], 
                ['keyboard-key keyboard-key--letter', 'Z', 'Я', 'key-z', 'z', 'я'], 
                ['keyboard-key keyboard-key--letter', 'X', 'Ч', 'key-x', 'x', 'ч'], 
                ['keyboard-key keyboard-key--letter', 'C', 'С', 'key-c', 'c', 'с'], 
                ['keyboard-key keyboard-key--letter', '√', 'М', 'key-v', 'v', 'м'], 
                ['keyboard-key keyboard-key--letter', 'B', 'И', 'key-b', 'b', 'и'], 
                ['keyboard-key keyboard-key--letter', 'N', 'Т', 'key-n', 'n', 'т'], 
                ['keyboard-key keyboard-key--letter', 'M', 'Ь', 'key-m', 'm', 'ь'], 
                ['keyboard-key keyboard-key--letter', '&lt;', 'Б', 'key-comma', ',', 'б'], 
                ['keyboard-key keyboard-key--letter', '&gt;', 'Ю', 'keym-dot', '.', 'ю'], 
                ['keyboard-key keyboard-key--letter', '', '.', 'key-slash', '/', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--arrow-up', '', '', 'key-arrow-up', '⬆', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'key-shift-right', 'Shift', ''], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'key-ctrl-left', 'Ctrl', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--win', '', '', 'key-win', 'Win', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'key-alt-left', 'Aly', ''],
                ['keyboard-key keyboard-key--space', '', '', 'key-space', '', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'key-alt-right', 'Alt', ''],
                ['keyboard-key keyboard-key--functional keyboard-key--arrow-left', '', '', 'key-arrow-left', '⬇', ''],
                ['keyboard-key keyboard-key--functional keyboard-key--down', '', '', 'key-down', '⬇', ''],
                ['keyboard-key keyboard-key--functional keyboard-key--right', '', '', 'key-rught', '⬇', ''],
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'key-ctrl-right', 'Ctrl', ''],
              ]
            ];
  outputText = '';

  constructor() {
    this.keyboardRender();
  }

  keyboardRender() {
    const body = document.getElementsByTagName('body');
    const container = document.createElement('div');
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const main = document.createElement('main');
    const keyboard = document.createElement('div');
    const keyboardOutput = document.createElement('textarea');
    const keyboardBody = document.createElement('div');
    const footer = document.createElement('footer');
    const footerText = document.createElement('footer-text');

    container.className = 'container';
    header.className = 'header';
    headerTitle.className = 'header-title';
    headerTitle.innerText = 'Виртуальная Клавиатура'
    keyboard.className = 'keyboard';
    keyboardOutput.className = 'keyboard-output';
    keyboardOutput.id = 'keyboard-output';
    keyboardOutput.setAttribute('rows', '8');
    keyboardBody.className = 'keyboard-body';
    keyboardBody.id = 'keyboard';
    footer.className = 'footer';
    footerText.className = 'footer-text';
    footerText.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe CTRL + ALT';

    header.append(headerTitle);
    keyboard.append(keyboardOutput);
    keyboard.append(keyboardBody);
    main.append(keyboard);
    footer.append(footerText);
    container.append(header);
    container.append(main);
    container.append(footer);
    body[0].append(container);

    for (let i = 0; i < this.keysInfo.length; i++) {
      const keyboardRow = document.createElement('div');
      keyboardRow.className = 'keyboard-row';
      
      for (let k = 0; k < this.keysInfo[i].length; k++) {
        const item = this.keysInfo[i][k];
        const [classValue, shiftValueEn, shiftValueRu, idValue, htmlValueEn, htmlValueRu] = [item[0], item[1], item[2], item[3], item[4], item[5]];
        const key = document.createElement('div');
        const shiftValue = (lang === 'en') ? shiftValueEn : shiftValueRu;
        const htmlValue = (lang === 'en') ? htmlValueEn : htmlValueRu;

        key.className = classValue;
        key.id = idValue;
        if (shiftValue !== '') {
          key.setAttribute('data-shift', shiftValue);
        }
        key.innerHTML = htmlValue;

        keyboardRow.append(key);
      }
      keyboardBody.append(keyboardRow);
    }
  }
}

let lang = 'en';

const keyboard = new Keyboard();
