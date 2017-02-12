describe('Component: PatientBlock', function () {
  beforeEach(module('PatientBlock'));
  var element;
  var scope;
  var controller;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    scope.record = {'name': 'helo'};
    element = angular.element('<patient-block-component record="record"></patient-block-component>');
    element = $compile(element)(scope);
    controller = element.controller('patientBlockComponent');
    scope.$apply();
  }));

  describe('createName', function () {
    it('should take last number assign a name', function() {
      var names = ['Ashley', 'Bella', 'Charles', 'Dave', 'Elle', 'Frank', 'Gerold', 'Hank', 'Ivan', 'Jimi'];
      expect(controller.createName('123412341234-1')).toBe(names[1]);
      expect(controller.createName('123412341234-4')).toBe(names[4]);
      expect(controller.createName('123412341234-7')).toBe(names[7]);
      expect(controller.createName('123412341234-0')).toBe(names[0]);
    });
    it('if last character is NaN should return `Zena`', function() {
      expect(controller.createName('123412341234-')).toBe('Zena');
      expect(controller.createName('Dogs')).toBe('Zena');
      expect(controller.createName('')).toBe('Zena');
    });
    it('if nothing is passed will catch error and return `Zelda`', function() {
      expect(controller.createName()).toBe('Zelda');
      expect(controller.createName(null)).toBe('Zelda');
      expect(controller.createName(undefined)).toBe('Zelda');
    });
  });

  describe('convertSexDisplay', function () {
    it('should convert 1 to `Female`', function() {
      expect(controller.convertSexDisplay(1)).toBe('Female');
    });
    it('should convert 2 to `Memale`', function() {
      expect(controller.convertSexDisplay(2)).toBe('Male');
    });
    it('should keep `NA` as `NA`', function() {
      expect(controller.convertSexDisplay('NA')).toBe('NA');
    });
  });

  describe('changeDateFormat', function () {
    it('should convert `YYYYMMDD` to `YYYY MMM D`', function() {
      expect(controller.changeDateFormat('20170101')).toBe('2017 Jan 1');
      expect(controller.changeDateFormat('20150610')).toBe('2015 Jun 10');
      expect(controller.changeDateFormat('20101027')).toBe('2010 Oct 27');
    });
    it('should original formated date if not in `YYYYMMDD` format', function() {
      expect(controller.changeDateFormat('2017 01 01')).toBe('2017 01 01');
      expect(controller.changeDateFormat('3/12/14')).toBe('3/12/14');
      expect(controller.changeDateFormat('2012-2-15')).toBe('2012-2-15');
    });
  });

  describe('ageAndNameCheck', function () {
    it('should return `NA` when data is `null`, `undefined`, or `unknown`', function() {
      expect(controller.ageAndNameCheck(null)).toBe('NA');
      expect(controller.ageAndNameCheck(undefined)).toBe('NA');
      expect(controller.ageAndNameCheck('unknown')).toBe('NA');
      expect(controller.ageAndNameCheck('Unknown')).toBe('NA');
    });
    it('should return string unchanged', function() {
      expect(controller.ageAndNameCheck('hello')).toBe('hello');
    });
  });


  describe('collapseToggle', function () {
    it('should return `true` because val is `undefined`', function() {
      expect(controller.collapseToggle(undefined)).toBeTruthy();
    });
    it('should return `false` because passed `true`', function() {
      expect(controller.collapseToggle(false)).toBeTruthy();
    });
    it('should return `true` because passed `false`', function() {
      expect(controller.collapseToggle(true)).toBeFalsy();
    });
  });

});
