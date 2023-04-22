if (!sessionStorage['lang']) {
  sessionStorage['lang'] = 'en';
}

let lang = sessionStorage['lang'];

class Keyboard {
  keysInfo = [
              [
                ['keyboard-key keyboard-key--backquote under-shift under-capslock', '~', 'Ë', 'Backquote', '`', 'ё'], 
                ['keyboard-key under-shift', '!', '', 'Digit1', '1', '1'], 
                ['keyboard-key under-shift', '@', '', 'Digit2', '2', '2'], 
                ['keyboard-key under-shift', '#', '', 'Digit3', '3', '3'], 
                ['keyboard-key under-shift', '$', '', 'Digit4', '4', '4'], 
                ['keyboard-key under-shift', '%', '', 'Digit5', '5', '5'], 
                ['keyboard-key under-shift', '^', '', 'Digit6', '6', '6'], 
                ['keyboard-key under-shift', '&', '', 'Digit7', '7', '7'], 
                ['keyboard-key under-shift', '*', '', 'Digit8', '8', '8'], 
                ['keyboard-key under-shift', '(', '', 'Digit9', '9', '9'], 
                ['keyboard-key under-shift', ')', '', 'Digit0', '0', '0'], 
                ['keyboard-key under-shift', '_', '', 'Minus', '-', '-'], 
                ['keyboard-key under-shift', '+', '', 'Equal', '=', '='], 
                ['keyboard-key keyboard-key--functional keyboard-key--backspace', '', '', 'Backspace', 'Backspace', 'Backspace'], 
              ], 
              [
                ['keyboard-key keyboard-key--functional', '', '', 'Tab', 'Tab', 'Tab'], 
                ['keyboard-key under-shift under-capslock', 'Q', 'Й', 'KeyQ', 'q', 'й'], 
                ['keyboard-key under-shift under-capslock', 'W', 'Ц', 'KeyW', 'w', 'ц'], 
                ['keyboard-key under-shift under-capslock', 'E', 'У', 'KeyE', 'e', 'у'], 
                ['keyboard-key under-shift under-capslock', 'R', 'К', 'KeyR', 'r', 'к'], 
                ['keyboard-key under-shift under-capslock', 'T', 'Е', 'KeyT', 't', 'е'], 
                ['keyboard-key under-shift under-capslock', 'Y', 'Н', 'KeyY', 'y', 'н'], 
                ['keyboard-key under-shift under-capslock', 'U', 'Г', 'KeyU', 'u', 'г'], 
                ['keyboard-key under-shift under-capslock', 'I', 'Ш', 'KeyI', 'i', 'ш'], 
                ['keyboard-key under-shift under-capslock', 'O', 'Щ', 'KeyO', 'o', 'щ'], 
                ['keyboard-key under-shift under-capslock', 'P', 'З', 'KeyP', 'p', 'з'], 
                ['keyboard-key under-shift under-capslock', '{', 'Х', 'BracketLeft', '[', 'х'], 
                ['keyboard-key under-shift under-capslock', '}', 'Ъ', 'BracketRight', ']', 'ъ'], 
                ['keyboard-key under-shift', '|', '/', 'Backslash', '\\', '\\'], 
                ['keyboard-key keyboard-key--functional', '', '', 'Delete', 'Del', 'Del'], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--capslock', '', '', 'CapsLock', 'CapsLock', 'CapsLock'], 
                ['keyboard-key under-shift under-capslock', 'A', 'Ф', 'KeyA', 'a', 'ф'], 
                ['keyboard-key under-shift under-capslock', 'S', 'Ы', 'KeyS', 's', 'ы'], 
                ['keyboard-key under-shift under-capslock', 'D', 'В', 'KeyD', 'd', 'в'], 
                ['keyboard-key under-shift under-capslock', 'F', 'А', 'KeyF', 'f', 'а'], 
                ['keyboard-key under-shift under-capslock', 'G', 'П', 'KeyG', 'g', 'п'], 
                ['keyboard-key under-shift under-capslock', 'H', 'Р', 'KeyH', 'h', 'р'], 
                ['keyboard-key under-shift under-capslock', 'J', 'О', 'KeyJ', 'j', 'о'], 
                ['keyboard-key under-shift under-capslock', 'K', 'Л', 'KeyK', 'k', 'л'], 
                ['keyboard-key under-shift under-capslock', 'L', 'Д', 'KeyL', 'l', 'д'], 
                ['keyboard-key under-shift under-capslock', ':', 'Ж', 'Semicolon', ';', 'ж'], 
                ['keyboard-key under-shift under-capslock', '"', 'Э', 'Quote', '\'', 'э'], 
                ['keyboard-key keyboard-key--functional keyboard-key--enter', '', '', 'Enter', 'Enter', 'Enter'], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'ShiftLeft', 'Shift', 'Shift'], 
                ['keyboard-key under-shift under-capslock', 'Z', 'Я', 'KeyZ', 'z', 'я'], 
                ['keyboard-key under-shift under-capslock', 'X', 'Ч', 'KeyX', 'x', 'ч'], 
                ['keyboard-key under-shift under-capslock', 'C', 'С', 'KeyC', 'c', 'с'], 
                ['keyboard-key under-shift under-capslock', 'V', 'М', 'KeyV', 'v', 'м'], 
                ['keyboard-key under-shift under-capslock', 'B', 'И', 'KeyB', 'b', 'и'], 
                ['keyboard-key under-shift under-capslock', 'N', 'Т', 'KeyN', 'n', 'т'], 
                ['keyboard-key under-shift under-capslock', 'M', 'Ь', 'KeyM', 'm', 'ь'], 
                ['keyboard-key under-shift under-capslock', '&lt;', 'Б', 'Comma', ',', 'б'], 
                ['keyboard-key under-shift under-capslock', '&gt;', 'Ю', 'Period', '.', 'ю'], 
                ['keyboard-key under-shift', '?', ',', 'Slash', '/', '.'], 
                ['keyboard-key keyboard-key--functional keyboard-key--arrow-up', '', '', 'ArrowUp', '⬆', '⬆'], 
                ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'ShiftRight', 'Shift', 'Shift'], 
              ], 
              [
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'ControlLeft', 'Ctrl', 'Ctrl'], 
                ['keyboard-key keyboard-key--functional keyboard-key--win', '', '', 'MetaLeft', 'Win', 'Win'], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'AltLeft', 'Alt', 'Alt'],
                ['keyboard-key keyboard-key--functional keyboard-key--space', '', '', 'Space', '', ''], 
                ['keyboard-key keyboard-key--functional keyboard-key--alt', '', '', 'AltRight', 'Alt', 'Alt'],
                ['keyboard-key keyboard-key--functional keyboard-key--left', '', '', 'ArrowLeft', '⬇', '⬇'],
                ['keyboard-key keyboard-key--functional keyboard-key--down', '', '', 'ArrowDown', '⬇', '⬇'],
                ['keyboard-key keyboard-key--functional keyboard-key--right', '', '', 'ArrowRight', '⬇', '⬇'],
                ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'ControlRight', 'Ctrl', 'Ctrl'],
              ]
            ];

  functionalKeys = [46, 17, 9, 20, 13, 16, 8, 18, 91, 93, 37, 38, 39, 40, 32];
  notCapsLockEnglish = ['BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
  outputText = '';

  constructor () {
    this.keyboardRender();
  }

  keyboardRender () {
    const body = document.getElementsByTagName('body');
    const container = document.createElement('div');
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const main = document.createElement('main');
    const keyboard = document.createElement('div');
    const keyboardBody = document.createElement('div');
    const footer = document.createElement('footer');
    const footerText = document.createElement('footer-text');
    this.output = document.createElement('textarea');

    container.className = 'container';
    header.className = 'header';
    headerTitle.className = 'header-title';
    headerTitle.innerText = 'Виртуальная Клавиатура'
    keyboard.className = 'keyboard';
    this.output.className = 'keyboard-output';
    this.output.id = 'keyboard-output';
    this.output.setAttribute('rows', '8');
    keyboardBody.className = 'keyboard-body';
    keyboardBody.id = 'keyboard';
    footer.className = 'footer';
    footerText.className = 'footer-text';
    footerText.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe CTRL + ALT';

    header.append(headerTitle);
    keyboard.append(this.output);
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
        const [classValue, shiftValueEn, shiftValueRu, idValue, htmlValueEn, htmlValueRu] = 
              [item[0], item[1], item[2], item[3], item[4], item[5]];
        const key = document.createElement('button');

        key.className = classValue;
        key.id = idValue;
        if (!classValue.includes('keyboard-key--functional')) {
          key.setAttribute('data-shift-en', shiftValueEn);
          key.setAttribute('data-shift-ru', shiftValueRu);
          key.setAttribute('data-value-en', htmlValueEn);
          key.setAttribute('data-value-ru', htmlValueRu);
        }
        key.innerHTML = (lang === 'en') ? htmlValueEn : htmlValueRu;
        keyboardRow.append(key);
      }
      keyboardBody.append(keyboardRow);
      
      this.allKeys = document.getElementsByClassName('keyboard-key');
      this.keysUnderShift = document.getElementsByClassName('under-shift');
      this.keysUnderCapslock = document.getElementsByClassName('under-capslock');
      this.activeKeys = document.getElementsByClassName('active');
    }
  }
  
  isFunctionalKey (keyCode) {
    return (this.functionalKeys.includes(keyCode)) ? true : false;
  }
  
  mouseDown () {

  }

  mouseUp () {
    
  }
  
  keyDown () {
    this.output.focus();
    this.CurrentKey.classList.add('active');
    if (this.CurrentKey.id === 'ShiftRight' || this.CurrentKey.id === 'ShiftLeft') {
      this.keyShiftPressed('down');
    }
  }
  
  keyUp () {
    setTimeout (() => {
      for (let i = 0; i < this.activeKeys.length; i++) {
        this.activeKeys[i].classList.remove('active');
      };
    }, "200");
    if (this.CurrentKey.id === 'ShiftRight' || this.CurrentKey.id === 'ShiftLeft') {
      this.keyShiftPressed('up');
    }
  }

  keyShiftPressed(event) {
    for (let i = 0; i < this.keysUnderShift.length; i++) {
      const dataAttr = (event === 'down') ? 'data-shift-' + lang : 'data-value-' + lang;
      const keyValue = this.keysUnderShift[i].getAttribute(dataAttr);
      this.keysUnderShift[i].innerHTML = keyValue;
    };
  }
  
  changeOutput (text) {
    this.outputText += text;
    output.innerHTML = this.outputText;
  }
}

const keyboard = new Keyboard();

for (let i = 0; i < keyboard.allKeys.length; i++) {
  keyboard.allKeys[i].addEventListener('mousedown', function () {
    keyboard.mouseDown();
  });
  keyboard.allKeys[i].addEventListener('mouseup', function () {
    keyboard.mouseUp();
  });
};

document.addEventListener("keydown", function (event) {
  keyboard.CurrentKey = document.getElementById(event.code);
  keyboard.keyDown();
});

document.addEventListener("keyup", function (event) {
  keyboard.CurrentKey = document.getElementById(event.code);
  keyboard.keyUp();
});