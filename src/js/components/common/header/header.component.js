import angular from 'angular';

// import './header.scss';
import headerTemplate from './header.html';

class Header {
  constructor() {
    this.name = 'Header';
    this.submenuContainer = document.getElementById("submenuContainer");

    console.log("Header Here!");
  }

  showMenu(event) {
    event.preventDefault();

    console.log('showMenu Working');

		//this.submenuContainer.classList.remove("hide");
  }
}

export const appHeader = {
  controller: Header,
  controllerAs: 'HeaderCtrl',
  template: headerTemplate,
};

