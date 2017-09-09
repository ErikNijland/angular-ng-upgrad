import {UpgradeComponent} from "@angular/upgrade/static";
import {Directive, ElementRef, Inject, Injector, Input} from "@angular/core";

@Directive({
  selector: 'some-form'
})
export class SomeFormComponent extends UpgradeComponent {
  @Input() myName: string;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Inject(Injector) injector: Injector
  ) {
    super('someForm', elementRef, injector);
  }
}
