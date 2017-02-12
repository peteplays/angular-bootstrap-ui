describe('Component: addField', function () {
  beforeEach(module('AddField'));
  var element;
  var scope;
  var controller;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<add-field-component></add-field-component>');
    element = $compile(element)(scope);
    controller = element.controller('addFieldComponent');
    scope.$apply();
  }));

    describe('addSpacesToCamelCase', function () {
      it('should capitalize each word and add spaces', function () {
        expect(controller.addSpacesToCamelCase('helloJohn')).toBe('Hello John');
        expect(controller.addSpacesToCamelCase('heyJames')).toBe('Hey James');
        expect(controller.addSpacesToCamelCase('HiJimi')).toBe('Hi Jimi');
      });
    });

});
