export default class EditController {

  constructor($state, $stateParams, BeanService, RegionsService) {
    this.regions = [];
    this.bean = {};
    this.$state = $state;
    this.beanService = BeanService;
    this.regionsService = RegionsService;
    this.id = $stateParams.id;

    this.regionsService.query().$promise.then((data) => this.regions = data);
    this.beanService.get({
      id: this.id
    })
      .$promise
      .then((data) => {
        data.importDate = data.importDate && new Date(data.importDate);
        this.bean = data;
      });
  }

  update() {
    this.beanService.update({
      id: this.id
    }, {
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    })
      .$promise
      .then(() => this.$state.go('app.root.list'));
  }

}

EditController.$inject = ['$state', '$stateParams', 'BeanService', 'RegionsService'];
