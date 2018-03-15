import angular from 'angular';
import angularTouch from 'angular-touch';

import '../scss/main.scss';

/// COMPONENTS ///
import {appFooter} from './components/common/footer/footer.component.js';
import {appHeader} from './components/common/header/header.component.js';

import {catalog} from './components/catalog/catalog.component.js';
/////////////////

/// SERVICES ///
import CatalogService from './services/catalog.service.js'
////////////////

angular.module("ExtremeShop", ['ngTouch'/*"router"*/])
  .component("appHeader", appHeader)
  .component("appFooter", appFooter)

  .component("catalog", catalog)

  .service("catalogService", CatalogService)

  //.controller("Header", a)
;