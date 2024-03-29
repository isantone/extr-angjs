import angular from 'angular';
import angularTouch from 'angular-touch';
import uiRouter from '@uirouter/angularjs';

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

import {esUiRouteConfig} from './router/es-ui-route-config';

angular.module("ExtremeShop", [
  'ngTouch',
  "ui.router"
])
  .component("esHeader", esHeader)
  .component("esFooter", esFooter)

  .component("esCatalog", esCatalog)

  .component("esCategory", esCategory)
  .component("esProduct", esProduct)

  .service("esCatalogService", esCatalogService)
  .service("esCatalogViewChanger", esCatalogViewChanger)

  .config(esUiRouteConfig)

  .run(esRunConfig)
;

function esRunConfig($rootScope) {
  $rootScope.$on("$stateChangeStart", (evt) => {
    console.log("Route change started"); // Show spinner
  });

  $rootScope.$on("$stateChangeSuccess", (evt) => {
    console.log("Route change successed"); // Remove spinner
  });
}