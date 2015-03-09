import angular from 'angular';

import regionName from './regionName/regionName.filter';
import regionImage from './regionImage/regionImage.filter';

export var  app = angular.module('Es6AppFilters', []);

app.filter(regionName.name, regionName.activate);
app.filter(regionImage.name, regionImage.activate);
