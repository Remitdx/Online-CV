import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['home', 'body', 'projects', 'contact', 'homeBtn', 'aboutBtn', 'projectBtn', 'contactBtn']

  underline(event) {
    if (window.scrollY < this.bodyTarget.offsetTop * 0.5) {
      this.homeBtnTarget.classList.add("underline");
      this.aboutBtnTarget.classList.remove("underline");
      this.projectBtnTarget.classList.remove("underline");
      this.contactBtnTarget.classList.remove("underline");
    }
    else if ((window.scrollY > this.bodyTarget.offsetTop * 0.5) && (window.scrollY < this.bodyTarget.offsetTop + (this.projectsTarget.offsetTop - this.bodyTarget.offsetTop) * 0.5)) {
      this.homeBtnTarget.classList.remove("underline");
      this.aboutBtnTarget.classList.add("underline");
      this.projectBtnTarget.classList.remove("underline");
      this.contactBtnTarget.classList.remove("underline");
    }
    else if ((window.scrollY > this.bodyTarget.offsetTop + (this.projectsTarget.offsetTop - this.bodyTarget.offsetTop) * 0.5) && (window.scrollY < this.projectsTarget.offsetTop + (this.contactTarget.offsetTop - this.projectsTarget.offsetTop) * 0.5)) {
      this.homeBtnTarget.classList.remove("underline");
      this.aboutBtnTarget.classList.remove("underline");
      this.projectBtnTarget.classList.add("underline");
      this.contactBtnTarget.classList.remove("underline");
    }
    else {
      this.homeBtnTarget.classList.remove("underline");
      this.aboutBtnTarget.classList.remove("underline");
      this.projectBtnTarget.classList.remove("underline");
      this.contactBtnTarget.classList.add("underline");
    }
  }

  home(event) {
    this.homeTarget.scrollIntoView({ behavior: "smooth" });
  }

  about(event) {
    this.bodyTarget.scrollIntoView({ behavior: "smooth" });
  }

  projects(event) {
    this.projectsTarget.scrollIntoView({ behavior: "smooth" });
  }

  contact(event) {
    this.contactTarget.scrollIntoView({ behavior: "smooth" });
  }
}
