import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { downgradeComponent, UpgradeModule } from "@angular/upgrade/static";
import { WorldComponent } from "./components/world.component";

declare const angular: any;

angular
  .module('ng1App')
  .directive('ng4World', downgradeComponent({ component: WorldComponent }));

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    WorldComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private upgradeModule: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgradeModule.bootstrap(document.body, ['ng1App'], { strictDi: true })
  }
}
