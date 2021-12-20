import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['classic', 'dark', 'funky', 'body', 'navigate', 'bg', 'lul', 'lul2', 'card'];

  classic(event) {
    this.classicTarget.classList.add("btn-darky");
    this.darkTarget.classList.remove("btn-darky");
    this.funkyTarget.classList.remove("btn-banana");
    this.navigateTarget.classList.remove("navigate-funky");
    this.navigateTarget.classList.remove("navigate-dark");
    this.navigateTarget.classList.add("navigate-classic");
    this.bgTarget.classList.remove("d-none");
    this.lulTarget.classList.add("d-none");
    this.lul2Target.classList.add("d-none");
    this.bodyTarget.classList.add("body-classic");
    this.bodyTarget.classList.remove("body-dark");
    this.bodyTarget.classList.remove("body-funky");
    this.cardTarget.classList.add("card-classic");
    this.cardTarget.classList.remove("card-dark");
    this.cardTarget.classList.remove("card-funky");
  }

  dark(event) {
    this.classicTarget.classList.remove("btn-darky");
    this.darkTarget.classList.add("btn-darky");
    this.funkyTarget.classList.remove("btn-banana");
    this.navigateTarget.classList.remove("navigate-funky");
    this.navigateTarget.classList.add("navigate-dark");
    this.navigateTarget.classList.remove("navigate-classic");
    this.bgTarget.classList.remove("d-none");
    this.lulTarget.classList.add("d-none");
    this.lul2Target.classList.add("d-none");
    this.bodyTarget.classList.remove("body-classic");
    this.bodyTarget.classList.add("body-dark");
    this.bodyTarget.classList.remove("body-funky");
    this.cardTarget.classList.remove("card-classic");
    this.cardTarget.classList.add("card-dark");
    this.cardTarget.classList.remove("card-funky");
  }

  funky(event) {
    this.classicTarget.classList.remove("btn-darky");
    this.darkTarget.classList.remove("btn-darky");
    this.funkyTarget.classList.add("btn-banana");
    this.navigateTarget.classList.add("navigate-funky");
    this.navigateTarget.classList.remove("navigate-dark");
    this.navigateTarget.classList.remove("navigate-classic");
    this.bgTarget.classList.add("d-none");
    this.lulTarget.classList.remove("d-none");
    this.lul2Target.classList.remove("d-none");
    this.bodyTarget.classList.remove("body-classic");
    this.bodyTarget.classList.remove("body-dark");
    this.bodyTarget.classList.add("body-funky");
    this.cardTarget.classList.remove("card-classic");
    this.cardTarget.classList.remove("card-dark");
    this.cardTarget.classList.add("card-funky");
  }
}
