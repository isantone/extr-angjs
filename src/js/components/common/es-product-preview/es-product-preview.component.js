// import './es-product.scss';
import esProductPreviewTemplate from './es-product-preview.html';

class EsProductPreview {
  constructor($scope) {
    //$scope.esproduct = this.product;
  }
}

export const esProductPreview = {
  controller: EsProductPreview,
  template: esProductPreviewTemplate,
  bindings: {
    product: '<',
  }
};