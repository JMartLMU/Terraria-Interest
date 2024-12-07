const principle = document.querySelector("#principle");
const period = document.querySelector("#period");
const aprSlider = document.querySelector("#apr");
const aprOuput = document.querySelector("#aprText");
const years = document.querySelector("#years");
const itterations = 1;
const interestOutput = document.querySelector("#interest");
const totalOutput = document.querySelector("#total");

aprSlider.addEventListener("input", () => {
  aprOuput.textContent = aprSlider.value;
  report();
});
principle.addEventListener("input", report);
years.addEventListener("input", report);
period.addEventListener("input", report);

function report() {
  const p = Number(principle.value);
  const r = Number(aprSlider.value);
  const n = Number(period.value);
  const t = Number(years.value);
  const interestOut = p * (1 + r / 100 / n) ** (n * t);
  const accumulatedOut = interestOut - p;

  if (isNaN(interestOut)) {
    totalOutput.textContent = "Nan";
  } else {
    totalOutput.textContent = interestOut.toFixed(2);
  }
  if (isNaN(accumulatedOut)) {
    interestOutput.textContent = "Nan";
  } else {
    interestOutput.textContent = accumulatedOut.toFixed(2);
  }
}
