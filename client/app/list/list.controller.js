export default class ListController {

  constructor(BeanService, RegionsService) {
    this.beans = [];
    this.regions = [];
    this.beanService = BeanService;
    this.regionsService = RegionsService;

    this.beanService.query().$promise.then((data) => this.beans = data);
    this.regionsService.query().$promise.then((data) => this.regions = data);
  }

  delete(id) {
    this.beanService.delete({
        id: id
      }).$promise
      .then(() => {
        this.beanService.query()
          .$promise
          .then((data) => this.beans = data)
      });
  }

}

ListController.$inject = ['BeanService', 'RegionsService'];
