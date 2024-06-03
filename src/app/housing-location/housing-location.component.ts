import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, CommonModule],
  template: `
    <section class="listing">
      <img [src]="housingLocation.photo" alt="photo of {{housingLocation.photo}}" class="listing-photo"
      
      >
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a [routerLink]="['/details', housingLocation.id]">More details</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
