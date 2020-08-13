const initTipsCount = () => {
  const buttons = document.querySelectorAll('.btn-light')
  if (buttons){
    buttons.forEach((button) => {
      const amountString = document.querySelector('.form-control').placeholder
      const replace = amountString.replace(",", ".");
      const amountInteger = parseFloat(replace);
      const tip = document.querySelector('.tips-count-text')
      const tipPlus = document.querySelector('.plus-tips-count-text')
      const text = document.querySelector('.form-control')
      button.addEventListener('click', () => {
        tip.style.display = "flex";
        tipPlus.style.display = "flex";
        if (button.innerHTML === "5%"){
          tip.innerHTML = (amountInteger*0.05).toFixed(2);
          text.placeholder = (amountInteger*1.05).toFixed(2);
        } else if (button.innerHTML === "10%") {
          tip.innerHTML = (amountInteger*0.1).toFixed(2);
          text.placeholder = (amountInteger*1.1).toFixed(2);
        } else if (button.innerHTML === "15%") {
          tip.innerHTML = (amountInteger*0.15).toFixed(2);
          text.placeholder = (amountInteger*1.15).toFixed(2);
        } else {
          const value = document.querySelector('#expand-btn').value;
          tip.innerHTML = value;
          const valueInteger = parseFloat(value);
          const sum = amountInteger + valueInteger
          text.placeholder = sum
        }
      })
    });
  };
};
export { initTipsCount };
