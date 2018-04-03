import esHttpErrorInterceptor from "./es-http-error-interceptor";

export default function esInterceptorsConfig($httpProvider) {
    $httpProvider.interceptors.push(esHttpErrorInterceptor);
}