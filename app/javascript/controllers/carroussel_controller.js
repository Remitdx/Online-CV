import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['card']

  turnLeft(event) {
    this.cardTargets.forEach( card => {
      if (card.classList.contains("card-left-out")) {
        card.classList.remove("card-left-out");
        card.classList.add("d-none");
        card.parentNode.insertAdjacentHTML("beforeend", card.outerHTML);
        // rebalancer la card à la droite
        card.remove();
      }
      else if (card.classList.contains("card-left")) {
        card.classList.remove("card-left");
        card.classList.add("card-left-out");
      }
      else if (card.classList.contains("main")) {
        card.classList.remove("main");
        card.classList.add("card-left");
      }
      else if (card.classList.contains("card-right")) {
        card.classList.add("main");
        card.classList.remove("card-right");
      }
      else if (card.classList.contains("card-right-out")) {
        card.classList.remove("card-right-out");
        card.classList.add("card-right");
      }

    });
    this.cardTargets[4].classList.remove("d-none");
    this.cardTargets[4].classList.add("card-right-out");
  }

  turnRight(event) {
    this.cardTargets.forEach( card => {
      if (card.classList.contains("card-right-out")) {
        card.classList.remove("card-right-out");
        card.classList.add("d-none");
      }
      else if (card.classList.contains("card-right")) {
        card.classList.remove("card-right");
        card.classList.add("card-right-out");
      }
      else if (card.classList.contains("main")) {
        card.classList.remove("main");
        card.classList.add("card-right");
      }
      else if (card.classList.contains("card-left")) {
        card.classList.add("main");
        card.classList.remove("card-left");
      }
      else if (card.classList.contains("card-left-out")) {
        card.classList.remove("card-left-out");
        card.classList.add("card-left");
      }
    });
    this.cardTargets[6].classList.remove("d-none");
    this.cardTargets[6].classList.add("card-left-out");
    this.cardTargets[6].parentNode.insertAdjacentHTML("afterbegin", this.cardTargets[6].outerHTML);
    // rebalancer la card à la droite
    this.cardTargets[7].remove();
  }
}
