import angular from 'angular';

import {esCatalogService} from './services/es-catalog.service';

export function esRouterConfig($routeProvider) {
  $routeProvider
    .when("/", {
        template: '<es-catalog></es-catalog>',
      }
    )

    .otherwise("/")
    ;
}