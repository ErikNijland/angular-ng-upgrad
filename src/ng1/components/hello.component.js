angular
  .module('ng1App')
  .component('hello', {
    template: `
      <p>Angular 1 says: hello</p>
      <hr>
      <ng4-world></ng4-world>
      <hr>
      <some-form my-name="'The some-form component inside an Angular 1 component'"></some-form>
    `
  });
