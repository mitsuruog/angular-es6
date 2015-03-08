export default class amountLabel {

  constructor() {
    this.templateUrl = 'components/amountLabel/amountLabel.html';
    this.restrict = 'EA';
    this.scope = {
      amount: '='
    };
  }

  link(scope, element, attrs) {
    if (scope.amount > 1000) {
      scope.styleClass = 'text-info';
    } else if (scope.amount <= 1000 && scope.amount > 500) {
      scope.styleClass = 'text-success';
    } else if (scope.amount <= 500) {
      scope.styleClass = 'text-danger';
    }
  }

}
