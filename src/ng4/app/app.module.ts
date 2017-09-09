import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from "@angular/upgrade/static";

import { AppComponent } from './app.component';
import { WorldComponent } from "./components/world.component";
import { countryServiceProvider } from "./services/country.service";
import {CountriesComponent} from "./components/countries.component";

declare const angular: any;

angular
  .module('ng1App')
  .directive('ng4World', downgradeComponent({ component: WorldComponent }));

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    WorldComponent
  ],
  providers: [
    countryServiceProvider
  ]
})
export class AppModule {
  constructor(private upgradeModule: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgradeModule.bootstrap(document.body, ['ng1App'], { strictDi: true })
  }
}
