import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint','mode', 'avatar', 'card', 'tag', 'carrou', 'contact', 'green', 'red', 'percent']

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
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 15}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100-(parseInt(percent, 10) + 15)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10)+15}%`;
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
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 15}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 15)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 15}%`;
    }
  }

  carrou(event) {
    if (this.carrouTarget.matches(".false")) {
      this.carrouTarget.classList.add("true");
      this.carrouTarget.classList.remove("false");
      this.carrouTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 15}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (parseInt(percent, 10) + 15)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10) + 15}%`;
    }
  }

}

// puts target over buttons and stuff to count progress !
