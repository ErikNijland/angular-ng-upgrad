angular
  .module('ng1App')
  .component('someForm', {
    template: `
      <label>
        Name:
        <input ng-model="name">
      </label>
      
      {{name}}
    `
  });
