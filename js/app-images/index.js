import angular from 'angular';
import '../app-core/index';

import AddController from './controllers/add.controller';
import HomeController from './controllers/home.controller';

import ImageService from './services/image.service';

import singleImage from './directives/image.directive';

angular
  .module('app.images', ['app.core'])
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ImageService', ImageService)
  .directive('singleImage', singleImage)
;