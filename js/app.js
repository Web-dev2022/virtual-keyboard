class Keyboard {
  keysInfo = [
              [
                ['keyboard-key keyboard-key--backquote', '~', 'Ë', 'key-backquote', '`', 'ё', 192], 
                ['keyboard-key', '!', '', 'key-1', '1', '', 49], 
                ['keyboard-key', '@', '', 'key-2', '2', '', 50], 
                ['keyboard-key', '#', '', 'key-3', '3', '', 51], 
                ['keyboard-key', '$', '', 'key-4', '4', '', 52], 
                ['keyboard-key', '%', '', 'key-5', '5', '', 53], 
                ['keyboard-key', '^', '', 'key-6', '6', '', 54], 
                ['keyboard-key', '&', '', 'key-7', '7', '', 55], 
                ['keyboard-key', '*', '', 'key-8', '8', '', 56], 
                ['keyboard-key', '(', '', 'key-9', '9', '', 57], 
                ['keyboard-key', ')', '', 'key-0', '0', '', 48], 
                ['keyboard-key', '_', '', 'key-dash', '-', '', 189], 
                ['keyboard-key', '+', '', 'key-equals', '=', '', 187], 
                ['keyboard-key keyboard-key--functional keyboard-key--backspace', '', '', 'key-backspace', 'Backspace', '', 8], 
              ], 
              [
                ['keyboard-key keyboard-key--functional', '', '', 'key-tab', 'Tab', '', 9], 
                ['keyboard-key keyboard-key--letter', 'Q', 'Й', 'key-q', 'q', 'й', 81], 
                ['keyboard-key keyboard-key--letter', 'W', 'Ц', 'key-w', 'w', 'ц', 87], 
                ['keyboard-key keyboard-key--letter', 'E', 'У', 'key-e', 'e', 'у', 69], 
                ['keyboard-key keyboard-key--letter', 'R', 'К', 'key-r', 'r', 'к', 82], 
                ['keyboard-key keyboard-key--letter', 'T', 'Е', 'key-t', 't', 'е', 84], 
                ['keyboard-key keyboard-key--letter', 'Y', 'Н', 'key-y', 'y', 'н', 89], 
                ['keyboard-key keyboard-key--letter', 'U', 'Г', 'key-u', 'u', 'г', 85], 
                ['keyboard-key keyboard-key--letter', 'I', 'Ш', 'key-i', 'i', 'ш', 73], 
                ['keyboard-key keyboard-key--letter', 'O', 'Щ', 'key-o', 'o', 'щ', 79], 
                ['keyboard-key keyboard-key--letter', 'π', 'З', 'key-p', 'p', 'з', 80], 
                ['keyboard-key', '{', 'Х', 'key-left-square-bracket', '[', 'х', 219], 
                ['keyboard-key', '}', 'Ъ', 'key-right-square-bracket', ']', 'ъ', 221], 
                ['keyboard-key', '|', '/', 'key-backslash', '\\', '', 220], 
                ['keyboard-key keyboard-key--functional', '', '', 'key-del', 'Del', '', 46], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--capslock', '', '', 'key-capslock', 'CapsLock', '', 20], 
                ['keyboard-key keyboard-key--letter', 'A', 'Ф', 'key-a', 'a', 'ф', 65], 
                ['keyboard-key keyboard-key--letter', 'S', 'Ы', 'key-s', 's', 'ы', 83], 
                ['keyboard-key keyboard-key--letter', 'D', 'В', 'key-d', 'd', 'в', 68], 
                ['keyboard-key keyboard-key--letter', 'F', 'А', 'key-f', 'f', 'а', 70], 
                ['keyboard-key keyboard-key--letter', 'G', 'П', 'key-g', 'g', 'п', 71], 
                ['keyboard-key keyboard-key--letter', 'H', 'Р', 'key-h', 'h', 'р', 72], 
                ['keyboard-key keyboard-key--letter', 'J', 'О', 'key-j', 'j', 'о', 74], 
                ['keyboard-key keyboard-key--letter', 'K', 'Л', 'key-k', 'k', 'л', 75], 
                ['keyboard-key keyboard-key--letter', 'L', 'Д', 'key-l', 'l', 'д', 76], 
                ['keyboard-key', ':', 'Ж', 'key-semicolon', ';', 'ж', 186], 
                ['keyboard-key', '"', 'Э', 'key-single-quote', '\'', 'э', 222], 
                ['keyboard-key keyboard-key--functional keyboard-key--enter', '', '', 'key-enter', 'Enter', '', 13], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'key-shift-left', 'Shift', '', 16], 
                ['keyboard-key keyboard-key--letter', 'Z', 'Я', 'key-z', 'z', 'я', 90], 
                ['keyboard-key keyboard-key--letter', 'X', 'Ч', 'key-x', 'x', 'ч', 88], 
                ['keyboard-key keyboard-key--letter', 'C', 'С', 'key-c', 'c', 'с', 67], 
                ['keyboard-key keyboard-key--letter', '√', 'М', 'key-v', 'v', 'м', 86], 
                ['keyboard-key keyboard-key--letter', 'B', 'И', 'key-b', 'b', 'и', 66], 
                ['keyboard-key keyboard-key--letter', 'N', 'Т', 'key-n', 'n', 'т', 78], 
                ['keyboard-key keyboard-key--letter', 'M', 'Ь', 'key-m', 'm', 'ь', 77], 
                ['keyboard-key keyboard-key--letter', '&lt;', 'Б', 'key-comma', ',', 'б', 188], 
                ['keyboard-key keyboard-key--letter', '&gt;', 'Ю', 'keym-dot', '.', 'ю', 190], 
                ['keyboard-key keyboard-key--letter', '', '.', 'key-slash', '/', '', 191], 
                ['keyboard-key keyboard-key--functional keyboard-key--arrow-up', '', '', 'key-arrow-up', '⬆', '', 38], 
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'key-shift-right', 'Shift', '', 16], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'key-ctrl-left', 'Ctrl', '', 17], 
                ['keyboard-key keyboard-key--functional keyboard-key--win', '', '', 'key-win', 'Win', '', 91], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'key-alt-left', 'Alt', '', 18],
                ['keyboard-key keyboard-key--space', '', '', 'key-space', '', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'key-alt-right', 'Alt', '', 18],
                ['keyboard-key keyboard-key--functional keyboard-key--left', '', '', 'key-arrow-left', '⬇', '', 37],
                ['keyboard-key keyboard-key--functional keyboard-key--down', '', '', 'key-down', '⬇', '', 40],
                ['keyboard-key keyboard-key--functional keyboard-key--right', '', '', 'key-right', '⬇', '', 39],
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'key-ctrl-right', 'Ctrl', '', 17],
              ]
            ];

  functionalKeysInfo = [46, 17, 9, 20, 13, 16, 8, 18, 91, 93, 37, 38, 39, 40];

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
        const [classValue, shiftValueEn, shiftValueRu, idValue, htmlValueEn, htmlValueRu, keyCode] = [item[0], item[1], item[2], item[3], item[4], item[5], item[6]];
        const key = document.createElement('div');
        const shiftValue = (lang === 'en') ? shiftValueEn : shiftValueRu;
        const htmlValue = (lang === 'en') ? htmlValueEn : htmlValueRu;

        key.className = classValue;
        key.id = idValue;
        if (shiftValue !== '') {
          key.setAttribute('data-shift', shiftValue);
        }
        key.setAttribute('data-keycode', keyCode);
        key.innerHTML = htmlValue;

        keyboardRow.append(key);
      }
      keyboardBody.append(keyboardRow);
    }
  }

  isFunctionalKey(keyCode) {
    return (this.functionalKeysInfo.includes(keyCode)) ? true : false;
  }

  keyDown(keyValue, keyCode) {
    if (!this.isFunctionalKey(keyCode)) {
      this.changeOutput(keyValue);
      return;
    } else {

    }
  }
  
  changeOutput(text) {
    const keyboardOutput = document.getElementById('keyboard-output');
    this.outputText += text;
    keyboardOutput.innerHTML = this.outputText;
  }

}

let lang = 'en';

const keyboard = new Keyboard();
const keyboardKey = document.getElementsByClassName('keyboard-key');

for (let i = 0; i < keyboardKey.length; i++) {
  keyboardKey[i].addEventListener('click', function () {
    keyboard.keyDown(this.innerHTML, Number(this.getAttribute('data-keycode')));
  });
};

window.addEventListener("keydown", function (event) {
  keyboard.keyDown(event.key, event.keyCode);
});