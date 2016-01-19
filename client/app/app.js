import 'bootstrap-css-only';
import 'normalize.css';
import '../assets/css/animations.css';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/common';

angular.module('app', [
  uiRouter,
  angularAnimate,
  Components.name,
  Common.name
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
  //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
    .state('eggly', {
    url: '',
    abstract: true
  });

  $urlRouterProvider.otherwise('/');
})

.component('app', AppComponent);
