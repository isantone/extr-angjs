import angular from 'angular';

// import './header.scss';
import headerTemplate from './header.html';

class Header {
  constructor($http) {
    console.log("appHeader Here!");

    this.submenuContainer = document.getElementById("submenuContainer");

    $http.get('http://localhost:3000/api/categories')
      .then((response) => {
        this.data = response.data;
        console.log('AJAX data:', this.data);
      });
  }

  showMenu() {
    console.log('showMenu Working');

    this.submenuContainer.classList.toggle("hide");

    let navBtn = document.getElementById('navBtn');
    let navBtnTop = document.getElementsByClassName('nav-btn__top')[0];
    let navBtnMid = document.getElementsByClassName('nav-btn__mid')[0];
    let navBtnBot = document.getElementsByClassName('nav-btn__bot')[0];

    //navBtn.addEventListener('click', function(e) {
      navBtn.classList.toggle('nav-btn_opened');
      navBtnTop.classList.toggle('nav-btn__top_opened');
      navBtnMid.classList.toggle('nav-btn__mid_opened');
      navBtnBot.classList.toggle('nav-btn__bot_opened');
    //});
  }
}

export const appHeader = {
  controller: Header,
  controllerAs: 'appHeader',
  template: headerTemplate,
};

