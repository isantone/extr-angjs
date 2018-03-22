export default class esCatalogViewChanger {

  changeView() {
    let allDomElements = document.getElementsByClassName("product");

    [].forEach.call(allDomElements, function(domElement) {
      domElement.classList.toggle("product_grid");
    });

    allDomElements = document.getElementsByClassName("product__wrapper");

    [].forEach.call(allDomElements, function(domElement) {
      domElement.classList.toggle("product__wrapper_grid");
    });

    allDomElements = document.getElementsByClassName("product__description");

    [].forEach.call(allDomElements, function(domElement) {
      domElement.classList.toggle("product__description_grid");
    });
  }
}