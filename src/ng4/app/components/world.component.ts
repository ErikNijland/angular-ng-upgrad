import {Component} from "@angular/core";

@Component({
  selector: 'ng4-world',
  template: `
    <p>Angular 4 says: world</p>
    <hr>
    <ng4-countries></ng4-countries>
    <hr>
    <some-form [myName]="'The some-form component inside an Angular 4 component'"></some-form>
  `
})
export class WorldComponent {

}
