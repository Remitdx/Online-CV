import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }
}

// puts target over buttons and stuff to count progress !
