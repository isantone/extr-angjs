import angular from 'angular';

// import './footer.scss';
import esFooterTemplate from './es-footer.html';

class EsFooter {
  constructor() {
    this.name = 'Footer';
    console.log("Footer Here!");
  }
}

export const esFooter = {
  controller: EsFooter,
  template: esFooterTemplate,
};

