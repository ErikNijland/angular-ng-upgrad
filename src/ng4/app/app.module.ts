import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent, UpgradeModule } from "@angular/upgrade/static";

import { AppComponent } from './app.component';
import { WorldComponent } from "./components/world.component";
import {CountriesComponent} from "./components/countries.component";

import { countryServiceProvider } from "./ng1-upgrades/services/country.service";
import {SomeFormComponent} from "./ng1-upgrades/components/some-form.directive";

declare const angular: any;

angular
  .module('ng1App')
  .directive('ng4World', downgradeComponent({ component: WorldComponent }));

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    SomeFormComponent,
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
