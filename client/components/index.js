import angular from 'angular';

import amountLabel from './amountLabel/amountLabel.directive';

export var app = angular.module('Es6AppComponents', []);

amountLabel.$inject = [];
app.directive(amountLabel.name, () => new amountLabel());
