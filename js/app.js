let app = {
  colors: [
    'lightsteelblue',
    'palegreen',
    'crimson'
  ],

  contentArea: document.querySelector('.content'),

  init: function() {
    console.log(app.contentArea);
    app.generateForm();
    for (index in app.colors) {
      app.generateColorBox(app.colors[index]);
    }
  },

  generateForm: function() {
    let form = document.createElement('form');
    form.classList.add('bg-color-form');
    form.addEventListener('submit', app.handleColorAdd);

    let input = document.createElement('input');
    input.classList.add('bg-color-form-input');
    input.type = 'text';
    input.placeholder = 'Couleur CSS';

    form.appendChild(input);
    app.contentArea.appendChild(form);
  },

  generateColorBox: function(color) {
    let colorBox = document.createElement('div');
    colorBox.className = 'bg-color-selector';
    colorBox.style.background = color;
    colorBox.innerText = color;
    colorBox.addEventListener('click', app.handleColorClick);
    app.contentArea.appendChild(colorBox);
    return colorBox;
  },

  handleColorAdd: function(event) {
    event.preventDefault();
    let input = event.target.querySelector('.bg-color-form-input');
    // ou bien :
    // let input = document.querySelector('.bg-color-form-input');
    let color = input.value;
    if (!cssColors.includes(color)) return;
    let box = app.generateColorBox(color);
    input.value = '';
    box.click();
  },

  handleColorClick: function(event) {
    let color = event.target.style.background;
    document.body.style.background = color;
  }
};

document.addEventListener('DOMContentLoaded', app.init);