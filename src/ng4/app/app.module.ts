import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: []
})
export class AppModule {
  constructor(private upgradeModule: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgradeModule.bootstrap(document.body, ['ng1App'], { strictDi: true })
  }
}
