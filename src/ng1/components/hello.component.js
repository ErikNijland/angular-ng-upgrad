angular
  .module('ng1App')
  .component('hello', {
    template: `
      <p>Angular 1 says: hello</p>
      <hr>
      <ng4-world></ng4-world>
      <hr>
      <some-form my-name="'The some-form component inside an Angular 1 component'"></some-form>
      <hr>
      <h2>Currencies retrieved from an Angular 4 service</h2>
      <ul>
        <li ng-repeat="currency in $ctrl.currencies">{{currency}}</li>
      </ul>
    `,
    controller: HelloController
  });

HelloController.$inject = ['currencyService'];

function HelloController (currencyService) {
  this.currencies = currencyService.getCurrencies();
}
