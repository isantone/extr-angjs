export default function httpErrorInterceptor($q) {
  const interceptor = {
    "requestError": (rejection) => {
      let errorMessage = `Request error. Http status: ${rejection.status} ${rejection.statusText}`;

      return $q.reject(errorMessage);
    },
    "responseError": (rejection) => {
      let errorMessage = `Response error. Http status: ${rejection.status} ${rejection.statusText}`;

      if (rejection.status < 0) {
        errorMessage = `Response error. Couldn't connect to the database. Http status: ${rejection.status}`;
      }

      return $q.reject(errorMessage);
    }
  }

  return interceptor;
}