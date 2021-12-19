import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['btn-left', 'btn-middle', 'btn-right'];

  connect() {
    console.log(this.element);
    console.log(this.itemsTarget);
    console.log(this.formTarget);
  }
}
