import angular from 'angular';

import './footer.scss';
import footerTemplate from './footer.html';

class Footer {
  constructor() {
    this.name = 'Footer';
    console.log("Footer Here!");
  }
}

export const appFooter = {
  controller: Footer,
  template: footerTemplate
};

