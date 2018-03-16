import angular from 'angular';

export function esRouteConfig($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<es-catalog></es-catalog>',
    })

    .when("/categories/:id/products", {
      template: '<es-category></es-category>',
    })

    .otherwise("/");
}