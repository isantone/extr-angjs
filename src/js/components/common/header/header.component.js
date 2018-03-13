import angular from 'angular';

// import './header.scss';
import headerTemplate from './header.html';

class Header {
  constructor() {
    this.name = 'Header';
    console.log("Header Here!");
  }
}

export const appHeader = {
  controller: Header,
  template: headerTemplate,
};

