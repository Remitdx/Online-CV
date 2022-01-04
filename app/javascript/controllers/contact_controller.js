import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['firm', 'firmBtn', 'po', 'poBtn', 'recruiter', 'recruiterBtn', 'developer', 'developerBtn', 'designer', 'designerBtn', 'curious', 'curiousBtn'];

  firm(event) {
    this.firmBtnTarget.classList.add("btn-darky");
    this.poBtnTarget.classList.remove("btn-darky");
    this.recruiterBtnTarget.classList.remove("btn-darky");
    this.developerBtnTarget.classList.remove("btn-darky");
    this.designerBtnTarget.classList.remove("btn-darky");
    this.curiousBtnTarget.classList.remove("btn-darky");
    this.firmBtnTarget.classList.remove("btn-light");
    this.poBtnTarget.classList.add("btn-light");
    this.recruiterBtnTarget.classList.add("btn-light");
    this.developerBtnTarget.classList.add("btn-light");
    this.designerBtnTarget.classList.add("btn-light");
    this.curiousBtnTarget.classList.add("btn-light");
    this.firmTarget.classList.remove("d-none");
    this.poTarget.classList.add("d-none");
    this.recruiterTarget.classList.add("d-none");
    this.developerTarget.classList.add("d-none");
    this.designerTarget.classList.add("d-none");
    this.curiousTarget.classList.add("d-none");
  }

  po(event) {
    this.poBtnTarget.classList.add("btn-darky");
    this.firmBtnTarget.classList.remove("btn-darky");
    this.recruiterBtnTarget.classList.remove("btn-darky");
    this.developerBtnTarget.classList.remove("btn-darky");
    this.designerBtnTarget.classList.remove("btn-darky");
    this.curiousBtnTarget.classList.remove("btn-darky");
    this.poBtnTarget.classList.remove("btn-light");
    this.firmBtnTarget.classList.add("btn-light");
    this.recruiterBtnTarget.classList.add("btn-light");
    this.developerBtnTarget.classList.add("btn-light");
    this.designerBtnTarget.classList.add("btn-light");
    this.curiousBtnTarget.classList.add("btn-light");
    this.poTarget.classList.remove("d-none");
    this.firmTarget.classList.add("d-none");
    this.recruiterTarget.classList.add("d-none");
    this.developerTarget.classList.add("d-none");
    this.designerTarget.classList.add("d-none");
    this.curiousTarget.classList.add("d-none");
  }


}
