import angular from 'angular';

// import './footer.scss';
import catalogTemplate from './catalog.html';

class Catalog {
  constructor($http, catalogService) {
    this.name = 'Catalog';
    console.log("Catalog Here!");

    catalogService.getData()
      .then((data) => {
        this.data = data;
        console.log(this.data);
      });
  }
}

export const catalog = {
  controller: Catalog,
  controllerAs: 'catalog',
  template: catalogTemplate,
  // bindings: {
  //   data: '=',
  // }
};

