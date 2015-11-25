import angular from 'angular';


import './app-core/index';
import './app-images/index';


angular 
  .module('app', [
    'app.core', 
    'app.images'
  ])
;