// HTML ELEMENTS ARE CALLED HERE 
var elSelect = document.querySelector(".choose-select");
var elPizzaSizeWrapper = document.querySelector(".pizza-size-wrapper");
var elSelectResult = document.querySelector(".choose-select-result");
var elPizzaSizeResult = document.querySelector(".pizza-size-result");
var elAddVegetablesWrapper = document.querySelector(".add-vegetables-wrapper");
var elAddVegetablesList = document.querySelector(".add-vegetables-list");
var elAddVegetablesResulList = document.querySelector(".add-vegetables-list-wrapper");
var elAdditionalsWrapper = document.querySelector('.additioanl');
var elAdditionalsList = document.querySelector('.additioanl-list');
var elAdditionalsListResult = document.querySelector(".additioanl-list-result");

// ===============================

var selectOptionsValue = ['Yupqa', 'Qalin', 'O\'rta qalin'];

for (var i = 0; i < selectOptionsValue.length; i++) {
  // ELEMENTS ARE CREATED HERE
  var newElOption = document.createElement("option");
  newElOption.textContent = selectOptionsValue[i];

  elSelect.addEventListener('change', function (evt) {
    evt.preventDefault();
    elSelectResult.textContent = elSelect.value;
  });
  // THE ELEMENTS ADDED HERE
  elSelect.appendChild(newElOption);
}



// ===============================

var pizzaSize = ['25 cm ', '30 cm', '35 cm'];

for (var i = 0; i < pizzaSize.length; i++) {

  var elInputRadio = document.createElement('input');
  var elLabel = document.createElement('label');

  elInputRadio.classList.add('form-check-input');
  elInputRadio.classList.add('pizzaSize-radio');
  elLabel.classList.add('radio-label');

  elInputRadio.value = pizzaSize[i];
  elInputRadio.type = 'radio';
  elInputRadio.name = 'radio';

  elInputRadio.id = pizzaSize[i];
  elLabel.setAttribute('for', pizzaSize[i]);
  elLabel.textContent = pizzaSize[i];

  elInputRadio.addEventListener('change', function (evt) {
    evt.preventDefault();
    elPizzaSizeResult.textContent = this.value;
  });

  elPizzaSizeWrapper.appendChild(elInputRadio);
  elPizzaSizeWrapper.appendChild(elLabel);
}

// ======================

var addVegetables = ['Pomidor', 'Kurka go\'shti', 'Zaytun', 'Tuzlangan bodring', 'Qo\'ziqorin', 'Qazi'];

var boxodir = [];

for (var i = 0; i < addVegetables.length; i++) {
  var elAddVegetablesItem = document.createElement('li');
  var elAddVegetablesCheckbox = document.createElement('input');
  var elAddVegetablesLabel = document.createElement('label');

  elAddVegetablesCheckbox.classList.add('form-check-input');
  elAddVegetablesLabel.classList.add('addVegetables-label');
  elAddVegetablesItem.classList.add('addVegetables-item');

  elAddVegetablesCheckbox.id = addVegetables[i];
  elAddVegetablesLabel.setAttribute('for', addVegetables[i]);
  elAddVegetablesLabel.textContent = addVegetables[i];
  elAddVegetablesCheckbox.value = addVegetables[i];
  elAddVegetablesCheckbox.type = 'checkbox';

  // FUNCTION
  elAddVegetablesCheckbox.addEventListener('change', function (evt) {
    evt.preventDefault();
    if (boxodir.includes(this.value)) {
      var index = boxodir.indexOf(this.value);
      boxodir.splice(index, 1);
    } else {
      boxodir.push(this.value);
    }
    
    elAddVegetablesResulList.innerHTML = null;
    
    for (var i = 0; i < boxodir.length; i++){
      var elAddVegetablesResult = document.createElement('li');
      elAddVegetablesResult.classList.add('add-vegetables-item');
      elAddVegetablesResult.textContent = boxodir[i];
      elAddVegetablesResulList.appendChild(elAddVegetablesResult);
    }
    
  });

  elAddVegetablesList.appendChild(elAddVegetablesItem);
  elAddVegetablesItem.appendChild(elAddVegetablesCheckbox);
  elAddVegetablesItem.appendChild(elAddVegetablesLabel);
}

// =============================================

var addtionalsArrey = ['Achchiq', 'Sosiskali'];

var jasur = [];

for (var i = 0; i < addtionalsArrey.length; i++) {
  var addtionalsInputCheckbox = document.createElement('input');
  var addtionalsLabel = document.createElement("label");
  var addtionalsItem = document.createElement('li');

  addtionalsInputCheckbox.id = addtionalsArrey[i];
  addtionalsLabel.setAttribute('for', addtionalsArrey[i]);
  addtionalsInputCheckbox.value = addtionalsArrey[i];
  addtionalsLabel.textContent = addtionalsArrey[i];
  addtionalsItem.classList.add('addtionals-item');
  addtionalsInputCheckbox.type = 'checkbox';

  addtionalsLabel.classList.add('addVegetables-label');
  addtionalsInputCheckbox.classList.add('form-check-input');
  

  // FUNCTION
  addtionalsInputCheckbox.addEventListener('change', function(evt) {
    evt.preventDefault();

    if (jasur.includes(this.value)) {
      var index = jasur.indexOf(this.value);
      jasur.splice(index, 1);
    } else {
      jasur.push(this.value);
    }
    
    elAdditionalsListResult.innerHTML = null;
    
    for (var i = 0; i < jasur.length; i++){
      var elAdditionasResult = document.createElement('li');
      elAdditionasResult.classList.add('add-vegetables-item');
      elAdditionasResult.textContent = jasur[i];
      elAdditionalsListResult.appendChild(elAdditionasResult);
    }

  });

  addtionalsItem.appendChild(addtionalsInputCheckbox);
  addtionalsItem.appendChild(addtionalsLabel);
  elAdditionalsList.appendChild(addtionalsItem);
}