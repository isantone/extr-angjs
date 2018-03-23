import angular from 'angular';

import routes from '../../router/routes';

// import './es-category.scss';
import esCategoryTemplate from './es-category.html';

class EsCategory {
  constructor($http, $routeParams, esCatalogViewChanger) {
    console.log('Category here!');

    this.esCatalogViewChanger = esCatalogViewChanger;

    this.categoryId = $routeParams.categoryId;
    let query = routes.category + this.categoryId + '/products';

    $http.get(query)
      .then((response) => {
        this.data = response.data;
        console.log('Category data:', this.data);
      })
      .catch((error) => {
        console.warn(error.statusText || error.xhrStatus || 'Network error');
      });
  }

  changeView() {
    this.esCatalogViewChanger.changeView();
  }
}

export const esCategory = {
  controller: EsCategory,
  template: esCategoryTemplate,
};
