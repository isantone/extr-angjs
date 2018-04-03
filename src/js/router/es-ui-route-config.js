import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

export function esUiRouteConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("index", {
      url: "/",
      template: '<es-catalog></es-catalog>',
    })

    .state("productList", {
      url: "/categories/:categoryId/products",
      template: '<es-category id="pageContent" class="page-main"></es-category>',
    })

    .state("product", {
      url: "/categories/:categoryId/products/:productId",
      template: '<es-product id="pageContent" class="page-main"></es-product>',
    })

    ;

    $urlRouterProvider.otherwise("/");
}