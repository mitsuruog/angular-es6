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

  static activate($resource){
    BeanService.instance = new BeanService($resource);
    return BeanService.instance;
  }

}

BeanService.activate.$inject = ['$resource'];
