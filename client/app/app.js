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

app.config(AppConfig.activate);
app.config(AppRouter.activate);

// controllers
app.controller(AddController.name, AddController);
app.controller(ListController.name, ListController);
app.controller(EditController.name, EditController);
