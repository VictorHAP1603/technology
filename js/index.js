const buttonOpen = document.querySelector(".set");
const colors = document.querySelectorAll("[data-color]");
const modalColor = document.querySelector(".change-color");

const head = document.querySelector("head");

function open() {
  modalColor.classList.toggle("active");
}

function changeColor({ currentTarget }) {
  const color = currentTarget.dataset.color;

  const style = head.querySelector("style");
  const textColor = writeStyle(color);

  style.innerHTML = textColor;

  setColor(color);
}

function writeStyle(color) {
  const textColor = `
    html {
        --color: #${color};
    }
  `;

  return textColor;
}

function setColor(color) {
  localStorage.setItem("color", color);
}

function getColor() {
  if (localStorage.getItem("color")) {
    const color = localStorage.getItem("color");

    head.querySelector("style").innerHTML = `
    html {
        --color: #${color};
    }
    `;
  }
}

getColor();

buttonOpen.addEventListener("click", open);
colors.forEach((c) => c.addEventListener("click", changeColor));
