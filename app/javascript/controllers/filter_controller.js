import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['cards', 'tags','all', 'pro', 'web', 'social', 'lifestyle', 'perso', 'award', 'study', 'sport', 'env']

  all(event) {
    console.log(this.allTarget.innerText);
  }
  pro(event) {
    console.log(this.proTarget.innerText);
  }

  web(event) {
    let hide = false;
    const web = this.webTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTarget.innerText.split(" ");
    tags.forEach(tag => { if (tag === web) {
      hide = true;
      }
    });
    console.log(hide);
  }

  social(event) {
    console.log(this.socialTarget.innerText);
  }

  lifestyle(event) {
    let hide = false;
    const lifestyle = this.lifestyleTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTarget.innerText.split(" ");
    tags.forEach(tag => {
      if (tag === lifestyle) {
        hide = true;
      }
    });
    console.log(hide);
  }

  perso(event) {
    console.log(this.persoTarget.innerText);
  }

  award(event) {
    console.log(this.awardTarget.innerText);
  }

  study(event) {
    console.log(this.studyTarget.innerText);
  }

  sport(event) {
    let hide = false;
    const sport = this.sportTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTarget.innerText.split(" ");
    tags.forEach(tag => {
      if (tag === sport) {
        hide = true;
      }
    });
    console.log(hide);
  }

  env(event) {
    console.log(this.envTarget.innerText);
  }
}
