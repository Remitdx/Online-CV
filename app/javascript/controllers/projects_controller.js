import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['card']

  return(event) {
    console.log(event);
  }
}
