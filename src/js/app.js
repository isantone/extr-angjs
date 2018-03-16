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
////////////////

import {esRouteConfig} from './router/es-route-config';

angular.module("ExtremeShop", ['ngTouch', 'ngRoute'])
  .component("esHeader", esHeader)
  .component("esFooter", esFooter)

  .component("esCatalog", esCatalog)

  .component("esCategory", esCategory)
  .component("esProduct", esProduct)

  .service("esCatalogService", esCatalogService)

  .config(esRouteConfig)

  //.controller("Header", a)
;