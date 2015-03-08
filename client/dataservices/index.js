import angular from 'angular';
import 'angular-resource';

import BeanService from './beans/beans.service';
import RegionsService from './regions/regions.service';

export var app = angular.module('Es6AppDataServices', ['ngResource']);

BeanService.$inject = ['$resource'];
app.factory('BeanService', ($resource) => new BeanService($resource));

RegionsService.$inject = ['$resource'];
app.factory('RegionsService', ($resource) => new RegionsService($resource).create());
