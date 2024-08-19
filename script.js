let amountSlider = document.querySelector(".amount-slider input");
let billText = document.querySelector(".bill h1");
let billType = document.querySelector(".bill span");
let toggle = document.querySelector(".toggle input");
billText.textContent = `$${(parseFloat(amountSlider.value) * 20).toFixed(2)}`;

function amountCalculator() {
  let amount;
  if (toggle.checked) {
    billType.textContent = "/ year";
    amount = parseFloat(amountSlider.value) * 20 * 0.75;
    billText.innerText = `$${amount.toFixed(2)}`;
  } else {
    billType.textContent = "/ month";
    amount = parseFloat(amountSlider.value) * 20;
    billText.innerText = `$${amount.toFixed(2)}`;
  }
}
amountSlider.addEventListener("input", amountCalculator);

toggle.addEventListener("change", amountCalculator);
