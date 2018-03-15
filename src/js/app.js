import angular from 'angular';
import angularTouch from 'angular-touch';

import '../scss/main.scss';

/// COMPONENTS ///
import {esFooter} from './components/common/footer/es-footer.component.js';
import {esHeader} from './components/common/header/es-header.component.js';

import {esCatalog} from './components/catalog/es-catalog.component.js';
/////////////////

/// SERVICES ///
import esCatalogService from './services/es-catalog.service.js';
////////////////

angular.module("ExtremeShop", ['ngTouch'/*"router"*/])
  .component("esHeader", esHeader)
  .component("esFooter", esFooter)

  .component("esCatalog", esCatalog)

  .service("esCatalogService", esCatalogService)

  //.controller("Header", a)
;