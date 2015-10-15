/// <reference path="../../../reference.ts" />
'use strict';

class MainController {
  $scope: ng.IScope;
  awesomeThings: string[];

  /* @ngInject */
  constructor($scope: ng.IScope) {
    this.$scope = $scope;

    this.awesomeThings = [
      'Typescript',
      'Bower',
      'Grunt',
      'Haml',
      'Compass',
      'AngularJS',
      'Karma'
    ];
  }

  clickHandler(thing: string) {
    //We are using controllerAs syntax, scope is used only for events and watches
    this.$scope.$emit(`The ${thing} item was clicked!`);
  }
}

angular
  .module('bowerDtsExportTestAppInternal')
  .controller('MainController', MainController);
