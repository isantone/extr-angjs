export default class esCatalogService {
  constructor($http) {
    this.msg = "Hello from CatalogService";

    this.http = $http;
  }

  getData() {
    return this.http.get('http://localhost:3003/api/categories')
      .then((response) => {
        //this.data = response.data;
        console.log('catalog service AJAX data:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.warn(error.statusText || error.xhrStatus || 'Network error');
      });
  }
}