import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['pic']

  return(event) {
    if (event.x < (window.innerWidth / 2) ) {
      this.picTargets.forEach(pic=>pic.classList.add("turn-left"));
      this.picTargets.forEach(pic=>pic.classList.remove("reset"));
    }
    else {
      this.picTargets.forEach(pic=>pic.classList.add("reset"));
      this.picTargets.forEach(pic=>pic.classList.remove("turn-left"));
    }
  }
}
