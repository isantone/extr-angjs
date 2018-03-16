import angular from 'angular';

// import './footer.scss';
import esCatalogTemplate from './es-catalog.html';

class EsCatalog {
  constructor(esCatalogService) {
    esCatalogService.getData()
      .then((data) => {
        this.data = data;
        console.log('Catalog data:', this.data);
      });
  }
}

export const esCatalog = {
  controller: EsCatalog,
  template: esCatalogTemplate,
};

