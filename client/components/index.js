import angular from 'angular';

import amountLabel from './amountLabel/amountLabel.directive';

export var app = angular.module('Es6AppComponents', []);

app.directive(amountLabel.name, amountLabel.activate);
