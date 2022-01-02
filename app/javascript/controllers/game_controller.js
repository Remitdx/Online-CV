import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint','mode', 'avatar', 'card', 'tag', 'carrou', 'green', 'red']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }

  progress(event) {
    if (this.modeTarget.matches(".false")) {
      this.modeTarget.classList.add("true");
      this.modeTarget.classList.remove("false");
      this.modeTarget.innerHTML = '<i class="fas fa-check"></i>';
      // this.greenTarget.outerHTML =
    }
  }
}

// puts target over buttons and stuff to count progress !
