import angular from 'angular';
import angularTouch from 'angular-touch';
import angularRoute from 'angular-route';

import '../scss/main.scss';

/// COMPONENTS ///
import {esFooter} from './components/common/footer/es-footer.component.js';
import {esHeader} from './components/common/header/es-header.component.js';

import {esCatalog} from './components/catalog/es-catalog.component.js';
/////////////////

/// SERVICES ///
import esCatalogService from './services/es-catalog.service.js';
////////////////

import {esRouterConfig} from './route-config';

angular.module("ExtremeShop", ['ngTouch', 'ngRoute'])
  .component("esHeader", esHeader)
  .component("esFooter", esFooter)

  .component("esCatalog", esCatalog)

  .service("esCatalogService", esCatalogService)

  .config(esRouterConfig)

  //.controller("Header", a)
;