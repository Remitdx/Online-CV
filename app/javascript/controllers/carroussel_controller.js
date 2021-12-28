import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['card']

  turnLeft(event) {
    console.log("turning left !")
  }

  turnRight(event) {
    console.log("let's turn right !")
  }

}
