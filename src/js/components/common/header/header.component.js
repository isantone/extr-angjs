import angular from 'angular';

// import './header.scss';
import headerTemplate from './header.html';

class Header {
  constructor($http, catalogService) {
    console.log("appHeader Here!");

    this.http = $http;

    this.mobileOverlay = document.getElementById('mobileOverlay');
    this.submenuContainer = document.getElementById("submenuContainer");
    this.searchResultsVisibility = false;

    this.navBtn = document.getElementById('navBtn');
    this.navBtnTop = document.getElementsByClassName('nav-btn__top')[0];
    this.navBtnMid = document.getElementsByClassName('nav-btn__mid')[0];
    this.navBtnBot = document.getElementsByClassName('nav-btn__bot')[0];

    catalogService.getData()
    .then((data) => {
      this.data = data;
      console.log(this.data);
    });

    // $http.get('http://localhost:3003/api/categories')
    //   .then((response) => {
    //     this.data = response.data;
    //     console.log('appHeader AJAX data:', this.data);
    //   })
    //   .catch((error) => {
    //     console.warn(error.statusText || error.xhrStatus || 'Network error');
    //   });
  }

  hideSearchResults() {
    this.searchResultsVisibility = false;
  }

  showSearchResults() {
    this.searchResultsVisibility = true;
  }

  searchProducts() {
    let query = 'http://localhost:3003/api/search?q=' + this.searchQuery;

    if (this.searchQuery) {
      console.log("Search query: ", query);
      this.http.get(query)
        .then((response) => {
          this.searchResults = response.data;
          this.searchResultsVisibility = true;
          console.log('Search AJAX data:', this.searchResults);
        })
        .catch((error) => {
          console.warn(error.statusText || error.xhrStatus || 'Network error');
        });
    }
  }

  showMenu() {
    //this.submenuContainer.classList.toggle("hide");
    this.mobileOverlay.classList.toggle("hide");
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

