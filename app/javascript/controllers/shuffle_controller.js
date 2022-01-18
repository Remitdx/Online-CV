import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['logo']

  shuffle(event) {
    this.logoTargets.forEach(logo => {
      logo.classList.toggle("fadeinout");
      logo.children[0].classList.toggle("fadeinout");
      setTimeout(() => {
        logo.classList.remove("order-1");
        logo.classList.remove("order-2");
        logo.classList.remove("order-3");
        logo.classList.remove("order-4");
        logo.classList.remove("order-5");
        logo.classList.remove("order-6");
        logo.classList.remove("order-7");
        logo.classList.remove("order-8");
        logo.classList.remove("order-9");
        logo.classList.remove("order-10");
        logo.classList.remove("order-11");
        logo.classList.remove("order-12");
        logo.classList.add(`order-${Math.ceil(Math.random() * 12)}`);
      },1000);
    });
  }
}
