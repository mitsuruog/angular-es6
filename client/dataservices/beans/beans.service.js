export default class BeanService {

  constructor($resource) {
    return $resource('http://localhost:8000/api/beans/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

  create() {
    return this.$resource('http://localhost:8000/api/beans/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

}
