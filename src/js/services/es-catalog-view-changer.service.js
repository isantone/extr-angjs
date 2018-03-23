export default class esCatalogViewChanger {
  constructor() {
    this.products = document.getElementsByClassName("product");
    this.productWrappers = document.getElementsByClassName("product__wrapper");
    this.productDescriptions = document.getElementsByClassName("product__description");
  }

  changeView() {
    [].forEach.call(this.products, (domElement) => domElement.classList.toggle("product_grid"));
    [].forEach.call(this.productWrappers, (domElement) => domElement.classList.toggle("product__wrapper_grid"));
    [].forEach.call(this.productDescriptions, (domElement) => domElement.classList.toggle("product__description_grid"));
  }
}