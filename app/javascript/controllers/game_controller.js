import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint','mode', 'avatar', 'card', 'tag', 'carrou', 'green', 'red', 'percent']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }

  progress(event) {
    if (this.modeTarget.matches(".false")) {
      this.modeTarget.classList.add("true");
      this.modeTarget.classList.remove("false");
      this.modeTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/ ;
      const percent = this.greenTarget.outerHTML.match(regexp)[0];
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${parseInt(percent, 10) + 25}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100-(parseInt(percent, 10) + 25)}%;"></div>`
      this.percentTarget.innerHTML = `${parseInt(percent, 10)+25}%`;
    }
  }
}

// puts target over buttons and stuff to count progress !
