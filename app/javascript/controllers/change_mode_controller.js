import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['classic', 'dark', 'funky', 'body', 'navigate', 'bg', 'lul', 'card', 'footer'];

  classic(event) {
    this.classicTarget.classList.add("btn-darky");
    this.darkTarget.classList.remove("btn-darky");
    this.funkyTarget.classList.remove("btn-darky");
    this.classicTarget.classList.remove("btn-light");
    this.darkTarget.classList.add("btn-light");
    this.funkyTarget.classList.add("btn-light");
    this.navigateTarget.classList.remove("navigate-funky");
    this.navigateTarget.classList.remove("navigate-dark");
    this.navigateTarget.classList.add("navigate-classic");
    this.bgTarget.classList.remove("d-none");
    this.lulTarget.classList.add("d-none");
    this.bodyTarget.classList.add("body-classic");
    this.bodyTarget.classList.remove("body-dark");
    this.bodyTarget.classList.remove("body-funky");
    this.cardTargets.forEach(card => card.classList.add("card-classic"));
    this.cardTargets.forEach(card => card.classList.remove("card-dark"));
    this.cardTargets.forEach(card => card.classList.remove("card-funky"));
    this.footerTarget.classList.add("footer-classic");
    this.footerTarget.classList.remove("footer-dark");
    this.footerTarget.classList.remove("footer-funky");
  }

  dark(event) {
    this.classicTarget.classList.remove("btn-darky");
    this.darkTarget.classList.add("btn-darky");
    this.funkyTarget.classList.remove("btn-darky");
    this.classicTarget.classList.add("btn-light");
    this.darkTarget.classList.remove("btn-light");
    this.funkyTarget.classList.add("btn-light");
    this.navigateTarget.classList.remove("navigate-funky");
    this.navigateTarget.classList.add("navigate-dark");
    this.navigateTarget.classList.remove("navigate-classic");
    this.bgTarget.classList.remove("d-none");
    this.lulTarget.classList.add("d-none");
    this.bodyTarget.classList.remove("body-classic");
    this.bodyTarget.classList.add("body-dark");
    this.bodyTarget.classList.remove("body-funky");
    this.cardTargets.forEach(card => card.classList.remove("card-classic"));
    this.cardTargets.forEach(card => card.classList.add("card-dark"));
    this.cardTargets.forEach(card => card.classList.remove("card-funky"));
    this.footerTarget.classList.remove("footer-classic");
    this.footerTarget.classList.add("footer-dark");
    this.footerTarget.classList.remove("footer-funky");
  }

  funky(event) {
    this.classicTarget.classList.remove("btn-darky");
    this.darkTarget.classList.remove("btn-darky");
    this.funkyTarget.classList.add("btn-darky");
    this.classicTarget.classList.add("btn-light");
    this.darkTarget.classList.add("btn-light");
    this.funkyTarget.classList.remove("btn-light");
    this.navigateTarget.classList.add("navigate-funky");
    this.navigateTarget.classList.remove("navigate-dark");
    this.navigateTarget.classList.remove("navigate-classic");
    this.bgTarget.classList.add("d-none");
    this.lulTarget.classList.remove("d-none");
    this.bodyTarget.classList.remove("body-classic");
    this.bodyTarget.classList.remove("body-dark");
    this.bodyTarget.classList.add("body-funky");
    this.cardTargets.forEach (card => card.classList.remove("card-classic"));
    this.cardTargets.forEach (card => card.classList.remove("card-dark"));
    this.cardTargets.forEach (card => card.classList.add("card-funky"));
    this.footerTarget.classList.remove("footer-classic");
    this.footerTarget.classList.remove("footer-dark");
    this.footerTarget.classList.add("footer-funky");

  }
}
