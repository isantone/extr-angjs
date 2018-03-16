// import './es-product.scss';
import esProductTemplate from './es-product.html';

class EsProduct {
  constructor($scope) {
    //$scope.esproduct = this.product;
  }
}

export const esProduct = {
  controller: EsProduct,
  template: esProductTemplate,
  bindings: {
    product: '<',
  }
};