let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let cpy = document.querySelector("#copycode");

const handleclick1 = () => {
  let rgb1 = hexvalues();
  let rgb2 = hexvalues();
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  cpy.innerHTML = `background-Image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleclick1);

const hexvalues = () => {
  let color = "#";
  let value = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color = color + value[Math.floor(Math.random() * 16)];
  }
  return color;
};
