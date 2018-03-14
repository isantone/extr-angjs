import angular from 'angular';

// import './header.scss';
import headerTemplate from './header.html';

class Header {
  constructor($http) {
    console.log("appHeader Here!");

    this.submenuContainer = document.getElementById("submenuContainer");

    this.navBtn = document.getElementById('navBtn');
    this.navBtnTop = document.getElementsByClassName('nav-btn__top')[0];
    this.navBtnMid = document.getElementsByClassName('nav-btn__mid')[0];
    this.navBtnBot = document.getElementsByClassName('nav-btn__bot')[0];

    $http.get('http://localhost:3003/api/categories')
      .then((response) => {
        this.data = response.data;
        console.log('appHeader AJAX data:', this.data);
      })
      .catch((error) => {
        console.warn(error.statusText || error.xhrStatus || 'Network error');
      })
  }

  showMenu() {
    //this.submenuContainer.classList.toggle("hide");
    this.submenuContainer.classList.toggle("menu_opened");

    this.navBtn.classList.toggle('nav-btn_opened');
    this.navBtnTop.classList.toggle('nav-btn__top_opened');
    this.navBtnMid.classList.toggle('nav-btn__mid_opened');
    this.navBtnBot.classList.toggle('nav-btn__bot_opened');
  }
}

export const appHeader = {
  controller: Header,
  controllerAs: 'appHeader',
  template: headerTemplate,
};

