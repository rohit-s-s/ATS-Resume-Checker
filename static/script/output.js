/**
 * Updates the text content of an HTML element with a percentage value,
 * incrementing the value until it reaches a target value.
 *
 * @param {HTMLElement} textElement The HTML element to update.
 * @param {number} targetValue The target percentage value.
 * @example
 * const textElement = document.querySelector('.value');
 * const targetValue = 75;
 * updateText(textElement, targetValue);
 */
const updateText = (textElement, targetValue) => {
  let currentValue = 0;

  const update = () => {
    if (currentValue <= targetValue) {
      textElement.textContent = `${currentValue}%`;
      currentValue++;
      requestAnimationFrame(update);
    }
  };

  update();
};

/**
 * Calculates the stroke-dashoffset value for a progress animation based on a target value.
 *
 * @param {number} targetValue The target percentage value.
 * @returns {number} The calculated stroke-dashoffset value.
 * @example
 * const targetValue = 75;
 * const strokeDashOffset = calculateStrokeDashOffset(targetValue);
 */
const calculateStrokeDashOffset = (targetValue) => {
  const maxValue = 560;
  return maxValue - (maxValue * targetValue) / 100;
};

/**
 * Inserts a CSS keyframe animation rule into a stylesheet.
 *
 * @param {CSSStyleSheet} stylesheet The stylesheet to insert the rule into.
 * @param {string} animationName The name of the animation.
 * @param {number} strokeDashOffset The stroke-dashoffset value for the animation.
 * @example
 * const stylesheet = document.styleSheets[0];
 * const animationName = 'progress-animation';
 * const strokeDashOffset = calculateStrokeDashOffset(75);
 * insertAnimationRule(stylesheet, animationName, strokeDashOffset);
 */
const insertAnimationRule = (stylesheet, animationName, strokeDashOffset) => {
  const rule = `
    @keyframes ${animationName} {
      from {
        stroke-dashoffset: 560;
      }
      to {
        stroke-dashoffset: ${strokeDashOffset};
      }
    }
  `;
  stylesheet.insertRule(rule, stylesheet.cssRules.length);
};

/**
 * Starts a progress animation on an HTML element.
 *
 * @param {HTMLElement} element The HTML element to animate.
 * @param {string} animationName The name of the animation.
 * @example
 * const element = document.querySelector('.meter');
 * const animationName = 'progress-animation';
 * startAnimation(element, animationName);
 */
const startAnimation = (element, animationName) => {
  element.style.animation = `${animationName} 2s ease-out forwards`;
};

/**
 * Updates the text content of an HTML element based on a target value.
 *
 * @param {HTMLElement} resultElement The HTML element to update.
 * @param {number} targetValue The target percentage value.
 * @example
 * const resultElement = document.getElementById("result");
 * const targetValue = 75;
 * updateResult(resultElement, targetValue);
 */
const updateResult = (resultElement, targetValue) => {
  if (targetValue <= 33) {
    resultElement.textContent = "Below expectation";
  } else if (34 < targetValue && targetValue <= 66) {
    resultElement.textContent = "Need Improvement";
  } else if (targetValue > 67) {
    resultElement.textContent = "Great Job";
  }
};

// Example usage:
const textElement = document.querySelector('.value');
updateText(textElement, targetValue);

const strokeDashOffset = calculateStrokeDashOffset(targetValue);
insertAnimationRule(document.styleSheets[0], 'progress-animation', strokeDashOffset);

startAnimation(document.querySelector('.meter'), 'progress-animation');

const resultElement = document.getElementById("result");
updateResult(resultElement, targetValue);