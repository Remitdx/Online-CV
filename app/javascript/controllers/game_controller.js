import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint','mode', 'avatar', 'card', 'tag', 'carrou', 'contact', 'green', 'red', 'percent', 'end']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }

  mode(event) {
    if (this.modeTarget.matches(".false")) {
      this.modeTarget.classList.add("true");
      this.modeTarget.classList.remove("false");
      this.modeTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/ ;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 18}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100-(parseInt(percent, 10) + 18)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10)+ 18}%`;
    }
  }

  tag(event) {
    if (this.tagTarget.matches(".false")) {
      this.tagTarget.classList.add("true");
      this.tagTarget.classList.remove("false");
      this.tagTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 15}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 15)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 15}%`;
    }
  }

  card(event) {
    if (this.cardTarget.matches(".false")) {
      this.cardTarget.classList.add("true");
      this.cardTarget.classList.remove("false");
      this.cardTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 17}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 17)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 17}%`;
    }
  }

  carrou(event) {
    if (this.carrouTarget.matches(".false")) {
      this.carrouTarget.classList.add("true");
      this.carrouTarget.classList.remove("false");
      this.carrouTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 17}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 17)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 17}%`;
    }
  }

  avatar(event) {
    if (this.avatarTarget.matches(".false") && event.x < (window.innerWidth / 2)) {
      this.avatarTarget.classList.add("true");
      this.avatarTarget.classList.remove("false");
      this.avatarTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 10}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 10)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 10}%`;
    }
  }
  contact(event) {
    if (this.contactTarget.matches(".false") && (window.scrollY+100) > this.endTarget.offsetTop) {
      this.contactTarget.classList.add("true");
      this.contactTarget.classList.remove("false");
      this.contactTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 14}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 14)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 14}%`;
    }
  }

}

// puts target over buttons and stuff to count progress !
