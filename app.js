const emoji = document.querySelector(".emoji");
const love_btns = document.querySelectorAll(".love");
const star_btns = document.querySelectorAll(".star");
const totalEmoji = 10;
let currentMemoji = 1;

const getMemojiUrl = nr => `images/img${nr}.png`;

setInterval(changeEmoji, 400);

function changeEmoji() {
  currentMemoji++;

  if (currentMemoji > totalEmoji) {
    currentMemoji = 1;
  }

  emoji.src = getMemojiUrl(currentMemoji);
}

star_btns.forEach(love_btn => {
  love_btn.addEventListener("mousedown", e => {
    createStar(love_btn.querySelector(".icon-container"));
  });
});

love_btns.forEach(love_btn => {
  love_btn.addEventListener("mousedown", e => {
    createHearts(love_btn.querySelector(".icon-container"));
  });
});
function createStar(container) {
  const array = Array.from(Array(10).keys());

  array.map(index => {
    setTimeout(() => {
      const star = document.createElement("span");
      star.classList.add("heart");
      star.innerHTML = '<index class="fas fa-star"></index>';
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.color = "#cfab32";
      star.style.fontSize = Math.random() * 20 + 5 + "px";
      star.style.animationDuration = Math.random() * 2 + 3 + "s";

      container.appendChild(star);
      setTimeout(() => {
        star.remove();
      }, 3000);
    }, index * 100);
  });
}

function createHearts(container) {
  const array = Array.from(Array(10).keys());

  array.map(index => {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = '<index class="fas fa-heart"></index>';
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.color = "#e7273f";
      heart.style.fontSize = Math.random() * 20 + 5 + "px";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";

      container.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, index * 100);
  });
}
