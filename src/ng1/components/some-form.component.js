angular
  .module('ng1App')
  .component('someForm', {
    bindings: {
      myName: '='
    },
    template: `
      <label>
        Name:
        <input ng-model="$ctrl.myName" size="60">
      </label>
      
      {{$ctrl.myName}}
    `
  });
