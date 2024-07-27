// const targetValue = 75; // Target percentage
const textElement = document.querySelector('.value');
let currentValue = 0;

const updateText = () => {
  if (currentValue <= targetValue) {
    textElement.textContent = `${currentValue}%`;
    currentValue++;
    requestAnimationFrame(updateText);
  }
};

// Adjust stroke-dashoffset based on target value
const strokeDashOffset = 560 - (560 * targetValue) / 100;
document.styleSheets[0].insertRule(`
  @keyframes progress-animation {
    from {
      stroke-dashoffset: 560;
    }
    to {
      stroke-dashoffset: ${strokeDashOffset};
    }
  }
`, document.styleSheets[0].cssRules.length);

// Start the progress animation
document.querySelector('.meter').style.animation = 'progress-animation 3s ease-out forwards';

updateText();


const result = document.getElementById("result")
if(targetValue<=33){
  result.textContent = "Below expectation"
}
else if(34<targetValue<=66){
  result.textContent = "Need Improvement"
}
else if(targetValue>67){
  result.textContent = "Great Job"
}