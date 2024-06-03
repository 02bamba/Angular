import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city">
        <button type="button" class="primry">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location 
    *ngFor="let HousingLocation of housingLocationList"
    [housingLocation]="HousingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  
  housingLocationList: HousingLocation[] = [];

 constructor(){
  this.housingLocationList = this.housingService.getAllHousingLocations();
 }
}
