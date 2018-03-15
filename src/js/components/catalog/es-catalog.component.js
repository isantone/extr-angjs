import angular from 'angular';

// import './footer.scss';
import esCatalogTemplate from './es-catalog.html';

class EsCatalog {
  constructor($http, esCatalogService) {
    console.log("Catalog Here!");

    esCatalogService.getData()
      .then((data) => {
        this.data = data;
        console.log(this.data);
      });
  }
}

export const esCatalog = {
  controller: EsCatalog,
  //controllerAs: 'EsCatalog',
  template: esCatalogTemplate,
  // bindings: {
  //   data: '=',
  // }
};

