import angular from 'angular';

import '../scss/main.scss';

/// COMPONENTS ///
import {appFooter} from './components/common/footer/footer.component.js';
import {appHeader} from './components/common/header/header.component.js';
/////////////////



angular.module("ExtremeShop", [/*"router"*/])
  .component("appHeader", appHeader)
  .component("appFooter", appFooter)

  //.controller("Header", a)
;