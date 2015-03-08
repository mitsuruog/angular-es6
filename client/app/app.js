import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './app.config';
import AppRouter from './app.route';

import AddController from './add/add.controller';
import ListController from './list/list.controller';
import EditController from './edit/edit.controller';

import '../filters/index';
import '../dataservices/index';
import '../components/index';

export var app = angular.module('Es6App', [
  'ui.router',
  'Es6AppFilters',
  'Es6AppDataServices',
  'Es6AppComponents'
]);

AppConfig.$inject = ['$locationProvider'];
app.config(($locationProvider) => new AppConfig($locationProvider));

AppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
app.config(($stateProvider, $urlRouterProvider) => new AppRouter($stateProvider, $urlRouterProvider));

AddController.$inject = ['$state', 'BeanService', 'RegionsService'];
app.controller(AddController.name, AddController);

ListController.$inject = ['BeanService', 'RegionsService'];
app.controller(ListController.name, ListController);

EditController.$inject = ['$state', '$stateParams', 'BeanService', 'RegionsService'];
app.controller(EditController.name, EditController);
