import {UpgradeComponent} from "@angular/upgrade/static";
import {Directive, ElementRef, Inject, Injector} from "@angular/core";

@Directive({
  selector: 'some-form'
})
export class SomeFormComponent extends UpgradeComponent {
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Inject(Injector) injector: Injector
  ) {
    super('someForm', elementRef, injector);
  }
}
