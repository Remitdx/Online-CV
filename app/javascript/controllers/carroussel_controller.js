import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['card']

  turnLeft(event) {
    this.cardTargets.forEach( card => {
      if (card.classList.contains("card-left")) {
        card.classList.remove("card-left");
        card.classList.add("d-none");
        console.log(card.outerHTML)
        // rebalancer la card à la droite
        card.remove();
    } else if (card.classList.contains("main-testimonial")) {
        card.classList.remove("main-testimonial");
        card.classList.add("testimonial");
        card.classList.add("card-left");
      }
    else if (card.classList.contains("card-right")) {
        card.classList.add("main-testimonial");
        card.classList.remove("testimonial");
        card.classList.remove("card-right");
      }
    });
    this.cardTargets[2].classList.remove("d-none");
    this.cardTargets[2].classList.add("card-right");
  }

  turnRight(event) {
    console.log("let's turn right !")
  }

}
