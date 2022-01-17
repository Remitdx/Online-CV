import { Controller } from "stimulus";
import Swal from "sweetalert2"

export default class extends Controller {
  static targets = ['hint','mode', 'avatar', 'card', 'tag', 'carrou', 'contact', 'home', 'curious', 'green', 'red', 'percent', 'end']

  hint(event) {
    this.hintTarget.classList.toggle("d-none");
  }

  home(event) {
    if (this.homeTarget.matches(".false") && window.scrollY === 0) {
      this.homeTarget.classList.add("true");
      this.homeTarget.classList.remove("false");
      this.homeTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 9}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 9)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 9}%`;
      percent += 9;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }

  mode(event) {
    if (this.modeTarget.matches(".false")) {
      this.modeTarget.classList.add("true");
      this.modeTarget.classList.remove("false");
      this.modeTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/ ;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 18}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100-(percent + 18)}%;"></div>`
      this.percentTarget.innerHTML = `${percent+ 18}%`;
      percent += 18;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }

  tag(event) {
    if (this.tagTarget.matches(".false")) {
      this.tagTarget.classList.add("true");
      this.tagTarget.classList.remove("false");
      this.tagTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 15}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 15)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 15}%`;
      percent += 15;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }

  card(event) {
    if (this.cardTarget.matches(".false")) {
      this.cardTarget.classList.add("true");
      this.cardTarget.classList.remove("false");
      this.cardTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 17}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 17)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 17}%`;
      percent += 17;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }

  carrou(event) {
    if (this.carrouTarget.matches(".false")) {
      this.carrouTarget.classList.add("true");
      this.carrouTarget.classList.remove("false");
      this.carrouTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 17}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 17)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 17}%`;
      percent += 17;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }

  avatar(event) {
    if (this.avatarTarget.matches(".false") && event.x < (window.innerWidth / 2)) {
      this.avatarTarget.classList.add("true");
      this.avatarTarget.classList.remove("false");
      this.avatarTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 10}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 10)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 10}%`;
      percent += 10;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }
  contact(event) {
    if (this.contactTarget.matches(".false") && (window.scrollY+100) > this.endTarget.offsetTop) {
      this.contactTarget.classList.add("true");
      this.contactTarget.classList.remove("false");
      this.contactTarget.innerHTML = '<i class="fas fa-check"></i>';
      const regexp = /\d+/;
      let percent = parseInt(this.greenTarget.outerHTML.match(regexp)[0], 10);
      this.greenTarget.outerHTML = `<div class="green" data-game-target="green" style="width: ${percent + 14}%;"></div>`
      this.redTarget.outerHTML = `<div class="red" data-game-target="red" style="width: ${100 - (percent + 14)}%;"></div>`
      this.percentTarget.innerHTML = `${percent + 14}%`;
      percent += 14;
      if (percent == 100) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Well done, you reach 100% in our little game',
          showConfirmButton: true,
        });
      }
    }
  }
}
