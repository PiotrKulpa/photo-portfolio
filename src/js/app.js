import 'jquery';
import Swiper from 'swiper';
import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = $('#randomInt');
const buttonRndRange = $('#randomRange');

buttonRndInt.on('click', outputRandomInt);
buttonRndRange.on('click', outputRandomRange);

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
