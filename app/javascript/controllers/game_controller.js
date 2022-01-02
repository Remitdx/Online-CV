import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['hint','mode']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }

  mode(event) {
    console.log(event);
    this.modeTarget.classList.add("true");
    this.modeTarget.classList.remove("false");
    this.modeTarget.innerText = "True";
    console.log("coucou tu veux voir ?")
  }
}

// puts target over buttons and stuff to count progress !
