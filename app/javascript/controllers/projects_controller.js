import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['card']

  return(event) {
    if (this.cardTarget.matches('.reset')) {
      this.cardTarget.classList.add("flip-card");
      this.cardTarget.classList.remove("reset");
    }
    else {
      this.cardTarget.classList.add("reset");
      this.cardTarget.classList.remove("flip-card");
    }
  }
}
