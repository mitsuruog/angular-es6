export default class ListController {

  constructor(BeanService, RegionsService) {
    this.beans = [];
    this.regions = [];
    this.BeanService = BeanService;

    BeanService.query().$promise.then((data) => this.beans = data);
    RegionsService.query().$promise.then((data) => this.regions = data);
  }

  delete(id) {
    this.BeanService.delete({
        id: id
      }).$promise
      .then(() => {
        this.BeanService.query().$promise.then((data) => this.beans = data)
      });
  }

}
