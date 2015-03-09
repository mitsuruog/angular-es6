export default class RegionsService {

  constructor($resource) {
    return $resource('http://localhost:8000/api/regions');
  }

  static activate($resource){
    RegionsService.instance = new RegionsService($resource);
    return RegionsService.instance;
  }

}

RegionsService.activate.$inject = ['$resource'];
