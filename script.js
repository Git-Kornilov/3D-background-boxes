'use strict';

const btn = document.querySelector('#btn');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = function () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');

      box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`;

      boxesContainer.appendChild(box);
    }
  }
};

createBoxes();

btn.addEventListener('click', () => boxes.classList.toggle('big'));
