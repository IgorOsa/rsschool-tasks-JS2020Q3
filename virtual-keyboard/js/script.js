const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
    shift: false,
    caretStart: 0,
    caretEnd: 0,
    currentLayout: 'en',
    keyPressed: '',
    audio: false
  },

  keyLayout: {
    en: {
      false: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
        ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'enter'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        ['done', 'lang', 'space', 'arrowleft', 'arrowright', 'audio']
      ],
      true: [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
        ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'enter'],
        ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
        ['done', 'lang', 'space', 'arrowleft', 'arrowright', 'audio']
      ],
      sounds: {
        Shift: './../../virtual-keyboard/assets/sounds/snare.wav',
        CapsLock: './../../virtual-keyboard/assets/sounds/hihat.wav',
        Backspace: './../../virtual-keyboard/assets/sounds/kick.wav',
        Enter: './../../virtual-keyboard/assets/sounds/clap.wav',
        others: './../../virtual-keyboard/assets/sounds/tink.wav'
      }
    },
    ru: {
      false: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'enter'],
        ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
        ['done', 'lang', 'space', 'arrowleft', 'arrowright', 'audio']
      ],
      true: [
        ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
        ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
        ['capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'enter'],
        ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','],
        ['done', 'lang', 'space', 'arrowleft', 'arrowright', 'audio']
      ],
      sounds: {
        Shift: './../../virtual-keyboard/assets/sounds/Cev_H2.mp3',
        CapsLock: './../../virtual-keyboard/assets/sounds/tom.wav',
        Backspace: './../../virtual-keyboard/assets/sounds/RP4_KICK_1.mp3',
        Enter: './../../virtual-keyboard/assets/sounds/openhat.wav',
        others: './../../virtual-keyboard/assets/sounds/Kick_n_Hat.mp3'
      }
    },
    raw: [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
      ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
      ['', '', 'Space', 'ArrowLeft', 'ArrowRight'],
    ]
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
          element.selectionStart = this.properties.caretStart;
          element.selectionEnd = this.properties.caretEnd;
          element.style.outline = 'none';
          element.focus();
        });
      });
      element.addEventListener('keyup', event => {
        this.properties.value = element.value;
        this.properties.caretStart = element.selectionStart;
        this.properties.caretEnd = element.selectionEnd;

        const keyPressed = this.elements.keysContainer.querySelector(`[data-id='${event.code}']`);
        if (keyPressed) {
          keyPressed.classList.remove('keyboard__key--pressed');
        }

        if (event.code.match(/ShiftLeft|ShiftRight/)) {
          this._toggleShift();
        } else if (event.code === 'CapsLock') {
          keyPressed.click();
        }
      })
      element.addEventListener('keydown', event => {
        const keyPressed = this.elements.keysContainer.querySelector(`[data-id='${event.code}']`);
        if (keyPressed) {
          this.keyPressed = keyPressed.dataset.id;
          keyPressed.classList.add('keyboard__key--pressed');
        }
        this._playSounds();
      })
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => `<i class="material-icons">${icon_name}</i>`;
    const currentLayout = this.keyLayout[this.properties.currentLayout][this.properties.shift];

    currentLayout.forEach((row, i) => {
      row.map((key, j) => {
        const keyElement = document.createElement('button');

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        keyElement.dataset.id = this.keyLayout.raw[i][j];

        switch (key) {
          case 'backspace':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('backspace');

            keyElement.addEventListener('click', () => {
              const { caretStart, caretEnd } = this.properties;
              this.keyPressed = keyElement.dataset.id;

              if (caretStart !== 0) {
                const value = this.properties.value;
                if (caretStart !== caretEnd) {
                  this.properties.value = [value.slice(0, caretStart), value.slice(caretEnd)].join('');
                } else {
                  this.properties.value = [value.slice(0, caretStart - 1), value.slice(caretEnd)].join('');
                  this.properties.caretStart -= 1;
                }
                this.properties.caretEnd = this.properties.caretStart;
              }
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'capslock':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
            keyElement.innerHTML = createIconHTML('keyboard_capslock');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this._toggleCapsLock();
              this._playSounds();
              keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
            });

            break;

          case 'shift':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
            keyElement.innerHTML = createIconHTML('keyboard_arrow_up');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this._toggleShift();
              this._playSounds();
              keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
            });

            break;

          case 'enter':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_return');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this.properties.value += '\n';
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'space':
            keyElement.classList.add('keyboard__key--extra-wide');
            keyElement.innerHTML = createIconHTML('space_bar');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this.properties.value += ' ';
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'arrowleft':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_arrow_left');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              if (this.properties.caretStart > 0) {
                this.properties.caretStart -= 1;
                this.properties.caretEnd -= 1;
              }
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'arrowright':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_arrow_right');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              if (this.properties.value.length > this.properties.caretEnd) {
                this.properties.caretStart += 1;
                this.properties.caretEnd += 1;
              }
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'audio':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML(this.properties.audio ? 'volume_up' : 'volume_off');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this.properties.audio = !this.properties.audio;
              keyElement.innerHTML = createIconHTML(this.properties.audio ? 'volume_up' : 'volume_off');
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;

          case 'done':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
            keyElement.innerHTML = createIconHTML('keyboard_hide');

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this._playSounds();
              this.close();
              this._triggerEvent('onclose');
            });

            break;

          case 'lang':
            keyElement.innerHTML = this.properties.currentLayout;

            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              this.properties.currentLayout = this.properties.currentLayout === 'en' ? 'ru' : 'en';
              this._playSounds();
              this._switchLayout();
            });

            break;

          default:
            keyElement.textContent = key;
            keyElement.addEventListener('click', () => {
              this.keyPressed = keyElement.dataset.id;
              const input = this.properties.capsLock ? keyElement.textContent : key;
              const value = this.properties.value;
              const output = [value.slice(0, this.properties.caretStart), input, value.slice(this.properties.caretEnd)].join('');
              this.properties.value = output;
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
              this._playSounds();
              this._triggerEvent('oninput');
            });

            break;
        }

        fragment.appendChild(keyElement);
      });

      fragment.appendChild(document.createElement('br'));
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _switchLayout() {
    this.elements.keysContainer.innerHTML = '';
    this.elements.keysContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
  },

  _switchCase() {
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        if (!this.properties.shift) {
          key.textContent = this.properties.capsLock
            ? key.textContent.toUpperCase()
            : key.textContent.toLowerCase();
        } else {
          key.textContent = this.properties.capsLock
            ? key.textContent.toLowerCase()
            : key.textContent.toUpperCase();
        }
      }
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this._switchCase();
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;
    this._switchLayout();
    this._switchCase();
  },

  _playSounds() {
    if (this.properties.audio) {
      const audio = new Audio();
      if (this.keyPressed.match(/ShiftLeft|ShiftRight/)) {
        audio.src = this.keyLayout[this.properties.currentLayout].sounds.Shift;
      } else if (this.keyPressed === 'CapsLock') {
        audio.src = this.keyLayout[this.properties.currentLayout].sounds.CapsLock;
      } else if (this.keyPressed === 'Backspace') {
        audio.src = this.keyLayout[this.properties.currentLayout].sounds.Backspace;
      } else if (this.keyPressed === 'Enter') {
        audio.src = this.keyLayout[this.properties.currentLayout].sounds.Enter;
      }
      else {
        audio.src = this.keyLayout[this.properties.currentLayout].sounds.others;
      }
      audio.currentTime = 0;
      audio.play();
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
