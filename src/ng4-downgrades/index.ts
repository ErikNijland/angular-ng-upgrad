import {WorldComponent} from "../ng4/app/components/world.component";
import {downgradeComponent, downgradeInjectable} from "@angular/upgrade/static";
import {CurrencyService} from "../ng4/app/services/currency.service";

declare const angular: any;

angular
  .module('ng1App')
  .directive('ng4World', downgradeComponent({ component: WorldComponent }))
  .factory('currencyService', downgradeInjectable(CurrencyService));
