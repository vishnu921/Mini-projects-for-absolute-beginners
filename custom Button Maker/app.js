let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let customButtonEl = document.getElementById("customButton");

function onApplyProperties() {
  let bgColorValue = bgColorInputEl.value;
  let fontColorValue = fontColorInputEl.value;
  let fontSizeValue = fontSizeInputEl.value;
  let fontWeightValue = fontWeightInputEl.value;
  let paddingValue = paddingInputEl.value;
  let borderRadiusValue = borderRadiusInputEl.value;

  customButtonEl.style.backgroundColor = bgColorValue;
  customButtonEl.style.color = fontColorValue;
  customButtonEl.style.fontSize = fontSizeValue;
  customButtonEl.style.fontWeight = fontWeightValue;
  customButtonEl.style.padding = paddingValue;
  customButtonEl.style.borderRadius = borderRadiusValue;
}
