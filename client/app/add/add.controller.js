export default class AddController {

  constructor($state, BeanService, RegionsService) {
    this.regions = [];
    this.bean = {};
    this.$state = $state;
    this.BeanService = BeanService;

    RegionsService.query().$promise.then((data) => this.regions = data);
  }

  register() {
    this.BeanService.save({
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    }).$promise.then(() => this.$state.go('app.root.list'));
  }

}
