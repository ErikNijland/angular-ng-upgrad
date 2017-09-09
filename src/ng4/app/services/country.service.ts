/*
Upgrading an Angular 1 service (so it can be used by an Angular 4 component)
*/

import {InjectionToken} from "@angular/core";

export const CountryService = new InjectionToken('CountryService');

export const countryServiceProvider = {
  provide: CountryService,
  useFactory: (injector) => injector.get('countryService'),
  deps: [ '$injector' ]
};
