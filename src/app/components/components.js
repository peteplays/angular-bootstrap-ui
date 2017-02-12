require('./main/main.component.js');
require('./navBar/navBar.component.js');
require('./navBottom/navBottom.component.js');
require('./footer/footer.component.js');
require('./list/list.component.js');
require('./form/form.component.js');
require('./patientBlock/patientBlock.component.js');
require('./patientDrugs/patientDrugs.component.js');
require('./patientReactions/patientReactions.component.js');
require('./formNestedArr/formNestedArr.component.js');
require('./addField/addField.component.js');

module.exports = angular.module('Components', [
  'Main',
  'NavBar',
  'NavBottom',
  'Footer',
  'List',
  'Form',
  'PatientBlock',
  'PatientDrugs',
  'PatientReactions',
  'FormNestedArr',
  'AddField'
  ]).name;
