import angular from 'angular';
import angularTouch from 'angular-touch';
import angularRoute from 'angular-route';

import '../scss/main.scss';

/// COMPONENTS ///
import {esHeader} from './components/common/header/es-header.component';
import {esFooter} from './components/common/footer/es-footer.component';

import {esProduct} from './components/common/es-product/es-product.component';

import {esCatalog} from './components/catalog/es-catalog.component';

import {esCategory} from './components/es-category/es-category.component';

/////////////////

/// SERVICES ///
import esCatalogService from './services/es-catalog.service';
import esCatalogViewChanger from './services/es-catalog-view-changer.service';
////////////////

import {esRouteConfig} from './router/es-route-config';

angular.module("ExtremeShop", ['ngTouch', 'ngRoute'])
  .component("esHeader", esHeader)
  .component("esFooter", esFooter)

  .component("esCatalog", esCatalog)

  .component("esCategory", esCategory)
  .component("esProduct", esProduct)

  .service("esCatalogService", esCatalogService)
  .service("esCatalogViewChanger", esCatalogViewChanger)

  .config(esRouteConfig)

  .run(esRunConfig)
;

function esRunConfig($rootScope) {
  $rootScope.$on("$routeChangeStart",(event, next, current) => {
    console.log("Route change started"); // Show spinner
  });

  $rootScope.$on("$routeChangeSuccess",(event, next, current) => {
    console.log("Route change successed"); // Remove spinner
  });
}