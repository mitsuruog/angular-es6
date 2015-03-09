import angular from 'angular';
import 'angular-resource';

import BeanService from './beans/beans.service';
import RegionsService from './regions/regions.service';

export var app = angular.module('Es6AppDataServices', ['ngResource']);

app.factory('BeanService', BeanService.activate);
app.factory('RegionsService', RegionsService.activate);
