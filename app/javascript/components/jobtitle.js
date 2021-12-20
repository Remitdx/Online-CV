import Typed from 'typed.js';

const DynamicJobTitle = () => {

  const jobTitle = document.querySelector('#job-title');
  if (jobTitle) {
    new Typed('#job-title', {
      strings: ["Developer Fullstack ^2000", "Ruby/Rails/JavaScript/HTML/CSS ^2000"],
      typeSpeed: 60,
      showCursor: false,
      loop: true
    });
  }
}

export { DynamicJobTitle };
