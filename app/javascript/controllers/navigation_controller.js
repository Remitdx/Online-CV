import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['home', 'body', 'projects', 'contact']

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
