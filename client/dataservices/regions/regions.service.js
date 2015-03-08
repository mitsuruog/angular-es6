export default class RegionsService {

  constructor($resource) {
    this.$resource = $resource;
  }

  create() {
    return this.$resource('http://localhost:8000/api/regions');
  }

}
