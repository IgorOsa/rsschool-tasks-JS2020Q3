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
    currentLayout: "en"
  },

  keyLayout: {
    en: {
      false: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
        ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'enter'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        ['done', 'lang', 'space', 'left', 'right']
      ],
      true: [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
        ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
        ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'enter'],
        ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
        ['done', 'lang', 'space', 'left', 'right']
      ],
    },
    ru: {
      false: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'enter'],
        ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
        ['done', 'lang', 'space', 'left', 'right']
      ],
      true: [
        ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
        ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
        ['caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'enter'],
        ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','],
        ['done', 'lang', 'space', 'left', 'right']
      ]
    }
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
      element.addEventListener('click', () => {
        this.properties.caretStart = element.selectionStart;
        this.properties.caretEnd = element.selectionEnd;
      });
      element.addEventListener('keyup', event => {
        this.properties.value = element.value;
        this.properties.caretStart = element.selectionStart;
        this.properties.caretEnd = element.selectionEnd;
      })
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => `<i class="material-icons">${icon_name}</i>`;
    const currentLayout = this.keyLayout[this.properties.currentLayout][this.properties.shift];

    currentLayout.forEach((row) => {
      row.map(key => {
        const keyElement = document.createElement('button');

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');

        switch (key) {
          case 'backspace':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('backspace');

            keyElement.addEventListener('click', () => {
              const { caretStart, caretEnd } = this.properties;

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
              this._triggerEvent('oninput');
            });

            break;

          case 'tab':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_tab');

            keyElement.addEventListener('click', () => {
              console.log('keyboard_tab');
            });

            break;

          case 'caps':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
            keyElement.innerHTML = createIconHTML('keyboard_capslock');

            keyElement.addEventListener('click', () => {
              this._toggleCapsLock();
              keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
            });

            break;

          case 'shift':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
            keyElement.innerHTML = createIconHTML('keyboard_arrow_up');

            keyElement.addEventListener('click', () => {
              this._toggleShift();
              keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
            });

            break;

          case 'enter':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_return');

            keyElement.addEventListener('click', () => {
              this.properties.value += '\n';
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
              this._triggerEvent('oninput');
            });

            break;

          case 'space':
            keyElement.classList.add('keyboard__key--extra-wide');
            keyElement.innerHTML = createIconHTML('space_bar');

            keyElement.addEventListener('click', () => {
              this.properties.value += ' ';
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
              this._triggerEvent('oninput');
            });

            break;

          case 'left':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_arrow_left');

            keyElement.addEventListener('click', () => {
              if (this.properties.caretStart > 0) {
                this.properties.caretStart -= 1;
                this.properties.caretEnd -= 1;
              }
              this._triggerEvent('oninput');
            });

            break;

          case 'right':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_arrow_right');

            keyElement.addEventListener('click', () => {
              if (this.properties.value.length > this.properties.caretEnd) {
                this.properties.caretStart += 1;
                this.properties.caretEnd += 1;
              }
              this._triggerEvent('oninput');
            });

            break;

          case 'done':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
            keyElement.innerHTML = createIconHTML('keyboard_hide');

            keyElement.addEventListener('click', () => {
              this.close();
              this._triggerEvent('onclose');
            });

            break;

          case 'lang':
            keyElement.innerHTML = this.properties.currentLayout;

            keyElement.addEventListener('click', () => {
              this.properties.currentLayout = this.properties.currentLayout === 'en' ? 'ru' : 'en';
              this._switchLayout();
            });

            break;

          default:
            keyElement.textContent = key;

            keyElement.addEventListener('click', () => {
              const input = this.properties.capsLock ? keyElement.textContent : key;
              const value = this.properties.value;
              const output = [value.slice(0, this.properties.caretStart), input, value.slice(this.properties.caretEnd)].join('');
              this.properties.value = output;
              this.properties.caretStart += 1;
              this.properties.caretEnd += 1;
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
