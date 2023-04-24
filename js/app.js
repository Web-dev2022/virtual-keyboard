if (!sessionStorage.lang) {
  sessionStorage.lang = 'en'
}

class Keyboard {
  constructor () {
    this.keyboardRender()
  }

  keysInfo = [
    [
      ['keyboard-key keyboard-key--backquote under-shift under-capslock lang', '~', 'Ë', 'Backquote', '`', 'ё'],
      ['keyboard-key under-shift', '!', '!', 'Digit1', '1', '1'],
      ['keyboard-key under-shift', '@', '@', 'Digit2', '2', '2'],
      ['keyboard-key under-shift', '#', '#', 'Digit3', '3', '3'],
      ['keyboard-key under-shift', '$', '$', 'Digit4', '4', '4'],
      ['keyboard-key under-shift', '%', '%', 'Digit5', '5', '5'],
      ['keyboard-key under-shift', '^', '^', 'Digit6', '6', '6'],
      ['keyboard-key under-shift', '&', '&', 'Digit7', '7', '7'],
      ['keyboard-key under-shift', '*', '*', 'Digit8', '8', '8'],
      ['keyboard-key under-shift', '(', '(', 'Digit9', '9', '9'],
      ['keyboard-key under-shift', ')', ')', 'Digit0', '0', '0'],
      ['keyboard-key under-shift', '_', '_', 'Minus', '-', '-'],
      ['keyboard-key under-shift', '+', '+', 'Equal', '=', '='],
      ['keyboard-key keyboard-key--functional keyboard-key--backspace', '', '', 'Backspace', 'Backspace', 'Backspace']
    ],
    [
      ['keyboard-key keyboard-key--functional', '', '', 'Tab', 'Tab', 'Tab'],
      ['keyboard-key under-shift under-capslock lang', 'Q', 'Й', 'KeyQ', 'q', 'й'],
      ['keyboard-key under-shift under-capslock lang', 'W', 'Ц', 'KeyW', 'w', 'ц'],
      ['keyboard-key under-shift under-capslock lang', 'E', 'У', 'KeyE', 'e', 'у'],
      ['keyboard-key under-shift under-capslock lang', 'R', 'К', 'KeyR', 'r', 'к'],
      ['keyboard-key under-shift under-capslock lang', 'T', 'Е', 'KeyT', 't', 'е'],
      ['keyboard-key under-shift under-capslock lang', 'Y', 'Н', 'KeyY', 'y', 'н'],
      ['keyboard-key under-shift under-capslock lang', 'U', 'Г', 'KeyU', 'u', 'г'],
      ['keyboard-key under-shift under-capslock lang', 'I', 'Ш', 'KeyI', 'i', 'ш'],
      ['keyboard-key under-shift under-capslock lang', 'O', 'Щ', 'KeyO', 'o', 'щ'],
      ['keyboard-key under-shift under-capslock lang', 'P', 'З', 'KeyP', 'p', 'з'],
      ['keyboard-key under-shift under-capslock lang', '{', 'Х', 'BracketLeft', '[', 'х'],
      ['keyboard-key under-shift under-capslock', '}', 'Ъ', 'BracketRight', ']', 'ъ'],
      ['keyboard-key under-shift', '|', '/', 'Backslash', '\\', '\\'],
      ['keyboard-key keyboard-key--functional', '', '', 'Delete', 'Del', 'Del']
    ],
    [
      ['keyboard-key keyboard-key--functional keyboard-key--capslock', '', '', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['keyboard-key under-shift under-capslock lang', 'A', 'Ф', 'KeyA', 'a', 'ф'],
      ['keyboard-key under-shift under-capslock lang', 'S', 'Ы', 'KeyS', 's', 'ы'],
      ['keyboard-key under-shift under-capslock lang', 'D', 'В', 'KeyD', 'd', 'в'],
      ['keyboard-key under-shift under-capslock lang', 'F', 'А', 'KeyF', 'f', 'а'],
      ['keyboard-key under-shift under-capslock lang', 'G', 'П', 'KeyG', 'g', 'п'],
      ['keyboard-key under-shift under-capslock lang', 'H', 'Р', 'KeyH', 'h', 'р'],
      ['keyboard-key under-shift under-capslock lang', 'J', 'О', 'KeyJ', 'j', 'о'],
      ['keyboard-key under-shift under-capslock lang', 'K', 'Л', 'KeyK', 'k', 'л'],
      ['keyboard-key under-shift under-capslock lang', 'L', 'Д', 'KeyL', 'l', 'д'],
      ['keyboard-key under-shift under-capslock lang', ':', 'Ж', 'Semicolon', ';', 'ж'],
      ['keyboard-key under-shift under-capslock lang', '"', 'Э', 'Quote', '\'', 'э'],
      ['keyboard-key keyboard-key--functional keyboard-key--enter', '', '', 'Enter', 'Enter', 'Enter']
    ],
    [
      ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'ShiftLeft', 'Shift', 'Shift'],
      ['keyboard-key under-shift under-capslock lang', 'Z', 'Я', 'KeyZ', 'z', 'я'],
      ['keyboard-key under-shift under-capslock lang', 'X', 'Ч', 'KeyX', 'x', 'ч'],
      ['keyboard-key under-shift under-capslock lang', 'C', 'С', 'KeyC', 'c', 'с'],
      ['keyboard-key under-shift under-capslock lang', 'V', 'М', 'KeyV', 'v', 'м'],
      ['keyboard-key under-shift under-capslock lang', 'B', 'И', 'KeyB', 'b', 'и'],
      ['keyboard-key under-shift under-capslock lang', 'N', 'Т', 'KeyN', 'n', 'т'],
      ['keyboard-key under-shift under-capslock lang', 'M', 'Ь', 'KeyM', 'm', 'ь'],
      ['keyboard-key under-shift under-capslock lang', '&lt;', 'Б', 'Comma', ',', 'б'],
      ['keyboard-key under-shift under-capslock lang', '&gt;', 'Ю', 'Period', '.', 'ю'],
      ['keyboard-key under-shift lang', '?', ',', 'Slash', '/', '.'],
      ['keyboard-key keyboard-key--functional keyboard-key--arrow-up', '', '', 'ArrowUp', '⬆', '⬆'],
      ['keyboard-key keyboard-key--functional keyboard-key--shift', '', '', 'ShiftRight', 'Shift', 'Shift']
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
      ['keyboard-key keyboard-key--functional keyboard-key--ctrl', '', '', 'ControlRight', 'Ctrl', 'Ctrl']
    ]
  ]

  functionalKeys = ['ControlRight', 'ControlLeft', 'MetaLeft', 'ArrowRight', 'AltLeft', 'Space', 'ArrowLeft', 'AltRight', 'ArrowDown', 'ArrowUp', 'ShiftRight', 'ShiftLeft', 'CapsLock', 'Enter', 'Tab', 'Delete', 'Backspace']
  notFunctionalsKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', '', '', '', '', '', '']
  notCapsLockEnglish = ['BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period']
  capsLockIsPressed = false
  ctrlLeftIsPressed = false
  altLeftIsPressed = false
  lang = sessionStorage.lang
  outputText = ''
  textRightPart = ''
  cursorPosition = 0

  keyboardRender () {
    const body = document.getElementsByTagName('body')
    const container = document.createElement('div')
    const header = document.createElement('header')
    const headerTitle = document.createElement('h1')
    const main = document.createElement('main')
    const keyboard = document.createElement('div')
    const keyboardBody = document.createElement('div')
    const footer = document.createElement('footer')
    const footerText = document.createElement('footer-text')
    this.output = document.createElement('textarea')

    container.className = 'container'
    header.className = 'header'
    headerTitle.className = 'header-title'
    headerTitle.innerText = 'Виртуальная Клавиатура'
    keyboard.className = 'keyboard'
    this.output.className = 'keyboard-output'
    this.output.id = 'keyboard-output'
    this.output.setAttribute('rows', '10')
    keyboardBody.className = 'keyboard-body'
    keyboardBody.id = 'keyboard'
    footer.className = 'footer'
    footerText.className = 'footer-text'
    footerText.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe CTRL + ALT'

    header.append(headerTitle)
    keyboard.append(this.output)
    keyboard.append(keyboardBody)
    main.append(keyboard)
    footer.append(footerText)
    container.append(header)
    container.append(main)
    container.append(footer)
    body[0].append(container)

    for (let i = 0; i < this.keysInfo.length; i++) {
      const keyboardRow = document.createElement('div')
      keyboardRow.className = 'keyboard-row'

      for (let k = 0; k < this.keysInfo[i].length; k++) {
        const item = this.keysInfo[i][k]
        const [classValue, shiftValueEn, shiftValueRu, idValue, htmlValueEn, htmlValueRu] =
              [item[0], item[1], item[2], item[3], item[4], item[5]]
        const key = document.createElement('button')

        key.className = classValue
        key.id = idValue
        if (!classValue.includes('keyboard-key--functional')) {
          key.setAttribute('data-shift-en', shiftValueEn)
          key.setAttribute('data-shift-ru', shiftValueRu)
          key.setAttribute('data-value-en', htmlValueEn)
          key.setAttribute('data-value-ru', htmlValueRu)
        }
        key.innerHTML = (this.lang === 'en') ? htmlValueEn : htmlValueRu
        keyboardRow.append(key)
      }
      keyboardBody.append(keyboardRow)

      this.allKeys = document.getElementsByClassName('keyboard-key')
      this.keysUnderShift = document.getElementsByClassName('under-shift')
      this.keysUnderCapslock = document.getElementsByClassName('under-capslock')
      this.activeKeys = document.getElementsByClassName('active')
      this.langKeys = document.getElementsByClassName('lang')
    }
  }

  isFunctionalKey (keyCode) {
    return this.functionalKeys.includes(keyCode)
  }

  isKorrectKey (keyCode) {
    return this.functionalKeys.includes(keyCode) || this.notFunctionalsKeys.includes(keyCode)
  }

  keyDown (key) {
    this.output.focus()

    if (!this.isFunctionalKey(key.id)) {
      this.changeOutput(key.innerHTML)
    } else {
      if (key.id === 'Space') {
        this.changeOutput(' ')
      } else if ((key.id === 'ShiftRight' || key.id === 'ShiftLeft') && this.capsLockIsPressed === false) {
        this.keyShiftPressed('down')
      } else if (key.id === 'Tab') {
        this.changeOutput('  ')
      } else if (key.id === 'CapsLock') {
        if (key.classList.contains('active')) {
          this.keyShiftPressed('up')
          key.classList.remove('active')
          this.capsLockIsPressed = false
          return
        } else {
          this.capsLockIsPressed = true
          this.keyShiftPressed('down')
        }
      } else if (key.id === 'ControlLeft') {
        this.ctrlLeftIsPressed = true
      } else if (key.id === 'AltLeft') {
        this.altLeftIsPressed = true
      } else if (key.id === 'Enter') {
        this.changeOutput('\n')
      } else if (key.id === 'Backspace' || key.id === 'Delete') {
        const factorBackspaceOne = (this.ctrlLeftIsPressed === true || key.id === 'Delete') ? 1 : 0
        const factorBackspaceTwo = (this.ctrlLeftIsPressed === false && key.id !== 'Delete') ? -1 : 0
        this.changeOutput('', factorBackspaceOne, factorBackspaceTwo)
      } else if (key.id === 'ArrowLeft') {
        if (this.output.selectionStart !== 0) {
          this.output.selectionEnd = this.output.selectionStart = this.output.selectionStart - 1
        }
      } else if (key.id === 'ArrowRight') {
        this.output.selectionEnd = this.output.selectionStart = this.output.selectionStart + 1
      } else if (key.id === 'ArrowDown') {
        this.changeOutput('⬇')
      } else if (key.id === 'ArrowUp') {
        this.changeOutput('⬆')
      }
    }
    key.classList.add('active')
  }

  keyUp (key) {
    this.output.focus()

    if ((key.id === 'ShiftRight' || key.id === 'ShiftLeft') && this.capsLockIsPressed === false) {
      this.keyShiftPressed('up')
    } else if (key.id === 'CapsLock' && this.capsLockIsPressed === true) {
      this.capsLockIsPressed = false
      this.keyShiftPressed('up')
    } else if (key.id === 'ControlLeft') {
      this.ctrlLeftIsPressed = false
    } else if (key.id === 'AltLeft') {
      this.altLeftIsPressed = false
    }

    setTimeout(() => {
      for (let i = 0; i < this.activeKeys.length; i++) {
        if (this.activeKeys[i].id === 'CapsLock' && this.capsLockIsPressed === true) {
          continue
        }
        this.activeKeys[i].classList.remove('active')
      };
    }, '200')
  }

  keyShiftPressed (direction) {
    for (let i = 0; i < this.keysUnderShift.length; i++) {
      const dataAttr = (direction === 'down') ? 'data-shift-' + this.lang : 'data-value-' + this.lang
      const keyValue = this.keysUnderShift[i].getAttribute(dataAttr)
      this.keysUnderShift[i].innerHTML = keyValue
    };
  }

  changeOutput (newFragment, factorBackspaceOne = 0, factorBackspaceTwo = 0) {
    this.textRightPart = this.outputText.slice(this.output.selectionStart + factorBackspaceOne, this.outputText.length)
    this.outputText = this.outputText.slice(0, this.output.selectionStart + factorBackspaceTwo) + newFragment
    this.cursorPosition = this.outputText.length
    this.outputText += this.textRightPart

    this.output.innerHTML = this.outputText
    this.output.selectionStart = this.output.selectionEnd = this.cursorPosition
  }
}

const keyboard = new Keyboard()

for (let i = 0; i < keyboard.allKeys.length; i++) {
  keyboard.allKeys[i].addEventListener('mousedown', function () {
    keyboard.keyDown(this)
  })
  keyboard.allKeys[i].addEventListener('mouseup', function () {
    if (keyboard.allKeys[i].id !== 'CapsLock') {
      keyboard.keyUp(this)
    }
  })
}

document.addEventListener('keydown', function (event) {
  event.preventDefault()
  if (!keyboard.isKorrectKey(event.code)) {
    return
  }
  const currentKey = document.getElementById(event.code)
  if ((event.code === 'AltLeft' && keyboard.ctrlLeftIsPressed === true) || (event.code === 'ControlLeft' && keyboard.altLeftIsPressed === true)) {
    sessionStorage.lang = (keyboard.lang === 'en') ? 'ru' : 'en'
    keyboard.lang = sessionStorage.lang

    const dataAttr = (keyboard.capsLockIsPressed === false) ? 'data-value-' + keyboard.lang : 'data-shift-' + keyboard.lang
    for (let i = 0; i < keyboard.langKeys.length; i++) {
      keyboard.langKeys[i].innerHTML = keyboard.langKeys[i].getAttribute(dataAttr)
    }
  }
  keyboard.keyDown(currentKey)
})

document.addEventListener('keyup', function (event) {
  event.preventDefault()
  if (!keyboard.isKorrectKey(event.code)) {
    return
  }
  const currentKey = document.getElementById(event.code)
  keyboard.keyUp(currentKey)
})
