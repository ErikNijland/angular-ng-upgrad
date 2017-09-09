import {Component, Inject, OnInit} from "@angular/core";
import {CountryService} from "../services/country.service";

@Component({
  selector: 'ng4-countries',
  template: `
    <h2>Countries</h2>
    <ul>
      <li *ngFor="let country of countries;">{{country.label}}</li>
    </ul>
  `
})
export class CountriesComponent implements OnInit {
  countries;

  constructor(
    @Inject(CountryService) private countryService: any
  ){}

  ngOnInit() {
    this.countries = this.countryService.getAll();
  }
}
