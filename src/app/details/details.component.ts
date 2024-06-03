import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" >
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About This housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have Wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-appply">
        <h2 class="section-heading">Apply now to leave here</h2>

        <form [formGroup]="applyForm" (Submit)="submitApplication()">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" formControlName="firstName">
        
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" formControlName="lastName">

        <label for="email">email</label>
        <input type="text" id="email" formControlName="email">

        <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
route: ActivatedRoute = inject(ActivatedRoute);
housingService = inject(HousingService);
housingLocation : HousingLocation | undefined;

applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
});

submitApplication(){
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
  );
}

constructor(){
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
}
}
