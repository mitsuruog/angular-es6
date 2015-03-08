import angular from 'angular';

import regionName from './regionName/regionName.filter';
import regionImage from './regionImage/regionImage.filter';

export var  app = angular.module('Es6AppFilters', []);

regionName.$inject = [];
app.filter(regionName.name, () => new regionName().activate());

regionImage.$inject = [];
app.filter(regionImage.name, () => new regionImage().activate());
