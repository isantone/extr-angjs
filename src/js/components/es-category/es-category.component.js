import angular from 'angular';

import routes from '../../router/routes';

// import './es-category.scss';
import esCategoryTemplate from './es-category.html';

class EsCategory {
  constructor($http, $routeParams, esCatalogViewChanger) {
    console.log('Category here!');

    this.changeView = esCatalogViewChanger.changeView;

    this.categoryId = $routeParams.id;
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
}

export const esCategory = {
  controller: EsCategory,
  template: esCategoryTemplate,
};
