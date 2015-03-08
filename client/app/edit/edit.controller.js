export default class EditController {

  constructor($state, $stateParams, BeanService, RegionsService) {
    this.regions = [];
    this.bean = {};
    this.$state = $state;
    this.id = $stateParams.id;
    this.BeanService = BeanService;

    RegionsService.query().$promise.then((data) => this.regions = data);
    BeanService.get({
      id: this.id
    }).$promise.then((data) => {
      data.importDate = data.importDate && new Date(data.importDate);
      this.bean = data;
    });
  }

  update() {
    this.BeanService.update({
      id: this.id
    }, {
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    }).$promise.then(() => this.$state.go('app.root.list'));
  }

}
