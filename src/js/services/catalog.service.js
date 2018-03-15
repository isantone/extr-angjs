export default class CatalogService {
  constructor($http) {
    this.msg = "Hello from CatalogService";

    this.http = $http;
  }

  getData() {
    if (this.data) {
      debugger
      return this.data;
    }

    return this.http.get('http://localhost:3003/api/categories')
      .then((response) => {
        this.data = response.data;
        console.log('catalog service AJAX data:', this.data);
        return response.data;
      })
      .catch((error) => {
        console.warn(error.statusText || error.xhrStatus || 'Network error');
      });
  }
}