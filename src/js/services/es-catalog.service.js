export default class esCatalogService {
  // constructor() {
  //   this.getDataPromiseObject = fetch('http://localhost:3003/api/categories')
  //     .then(response => response.json());
  // } TO-DO: WHY THIS IS NOT WORKING ?

  constructor($http) {
    this.getDataPromiseObject = $http.get('http://localhost:3003/api/categories')
      .then((response) => {
        console.log('Catalog-service data:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.warn(error.statusText || error.xhrStatus || 'Network error');
      });
  }

  getData() {
    return this.getDataPromiseObject;
  }
}