

const getcolor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNum.toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomCode;
    document.getElementById("c-code").innerText = " " + randomCode;
  }

  document.getElementById("btn").addEventListener("click", getcolor);

  // Initial color change
  getcolor();