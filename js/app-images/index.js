import angular from 'angular';
import '../app-core/index';

import HomeController from './controllers/home.controller';
import AddController from './controllers/Add.controller';

import ImageService from './services/image.service';

import singleImage from './directives/image.directive';

angular
  .module('app.images', ['app.core'])
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ImageService', ImageService)
  .directive('singleImage', singleImage)
;