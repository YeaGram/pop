const target = document.querySelector("h1");
const Image = document.querySelector("#imageContainer");
const mainContainer = document.querySelector(".mainContainer");
const countContainer = document.querySelector("#count");
const reset = document.querySelector("#reset");
const changeBG = document.querySelector("#changeBG");

let counter = 0;
reset.addEventListener("click", (e) => {
  counter = 0;
  countContainer.innerHTML = counter;
  console.log(counter);
});

function Pop() {
  mainContainer.addEventListener("touchstart", function (e) {
    target.innerHTML = "😉✨";
    Image.setAttribute("src", "img/pict1.jpg");
    counter++;
    countContainer.innerHTML = counter;
  });

  mainContainer.addEventListener("touchend", function (e) {
    target.innerHTML = "Hello";
    counter == 100 && alert("ngapain anda?");
    counter == 1000 && alert("udah woi?");
    Image.setAttribute("src", "img/pict2.jpg");
  });
}
Pop();
// window.addEventListener("click", function (e) {
//   console.log("Clicked");
// });

function RandomPosCol() {
  //rand pos
  const one = Math.round(Math.random() * 360);
  const two = Math.round(Math.random() * 360);
  const three = Math.round(Math.random() * 360);

  //genretae random color
  const GenerateColor = () => {
    const GenerateRGB = () => {
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);
      return [r, g, b];
    };
    const [r, g, b] = GenerateRGB();
    return `rgb(${r},${g},${b})`;
  };

  return {
    pos: {
      one,
      two,
      three,
    },
    color: {
      colorOne: GenerateColor(),
      colorTwo: GenerateColor(),
      colorThree: GenerateColor(),
    },
  };
}

function BackgroundAnimation({ pos, color }) {
  const background = document.documentElement;
  console.log(pos);
  console.log(color);
  background.style.setProperty("--color-one", color.colorOne);
  background.style.setProperty("--color-two", color.colorTwo);
  background.style.setProperty("--color-three", color.colorThree);
  background.style.setProperty("--posOne", `${pos.one}deg`);
  background.style.setProperty("--posOne", `${pos.two}deg`);
  background.style.setProperty("--posOne", `${pos.three}deg`);
}

changeBG.addEventListener("click", () => {
  BackgroundAnimation(RandomPosCol());
});

// const refreshRate = 1000 / 1;
// window.setInterval(() => {
//   BackgroundAnimation(RandomPosCol());
// }, refreshRate);
