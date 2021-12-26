import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['tags','all', 'pro', 'web', 'social', 'lifestyle', 'perso', 'award', 'study', 'sport', 'env']

  all(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
  }
  pro(event) {
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.proTarget.classList.toggle("underline");
    const pro = this.proTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === pro) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  web(event) {
    this.proTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.webTarget.classList.toggle("underline");
    const web = this.webTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === web) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  social(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.socialTarget.classList.toggle("underline");
    const social = this.socialTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === social) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  lifestyle(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.lifestyleTarget.classList.toggle("underline");
    const lifestyle = this.lifestyleTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === lifestyle) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  perso(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.persoTarget.classList.toggle("underline");
    const perso = this.persoTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === perso) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  award(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.awardTarget.classList.toggle("underline");
    const award = this.awardTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      console.log(tag);
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === award) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  study(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.studyTarget.classList.toggle("underline");
    const study = this.studyTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === study) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  sport(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.envTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.sportTarget.classList.toggle("underline");
    const sport = this.sportTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === sport) {
        display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }

  env(event) {
    this.proTarget.classList.remove("underline");
    this.webTarget.classList.remove("underline");
    this.socialTarget.classList.remove("underline");
    this.lifestyleTarget.classList.remove("underline");
    this.persoTarget.classList.remove("underline");
    this.awardTarget.classList.remove("underline");
    this.studyTarget.classList.remove("underline");
    this.sportTarget.classList.remove("underline");
    this.tagsTargets.forEach(tag => {
      tag.parentNode.parentNode.parentNode.classList.remove("d-none");
    });
    this.envTarget.classList.toggle("underline");
    const env = this.envTarget.innerText.split("#")[1].toLowerCase();
    const tags = this.tagsTargets.forEach(tag => {
      const arrayTags = tag.innerText.split(" ");
      let display = false;
      arrayTags.forEach(tag => {
        if (tag === env) {
          display = true;
        }
      });
      if (display !== true) {
        tag.parentNode.parentNode.parentNode.classList.toggle("d-none");
      }
    });
  }
}
