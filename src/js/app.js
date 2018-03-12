import angular from 'angular';

/// COMPONENTS ///
import {appFooter} from './components/common/footer/footer.component.js';
/////////////////



angular.module("ExtremeShop", [/*"router"*/])
  .component("appFooter", appFooter)
;