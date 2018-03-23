import angular from 'angular';

export function esRouteConfig($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<es-catalog></es-catalog>',
    })

    .when("/categories/:categoryId/products", {
      template: '<es-category id="pageContent" class="page-main"></es-category>',
    })

    .otherwise("/");
}