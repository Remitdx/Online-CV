// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"

Rails.start()
Turbolinks.start()

import "controllers"

import { DynamicJobTitle } from '../components/jobtitle';
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  DynamicJobTitle();
});
