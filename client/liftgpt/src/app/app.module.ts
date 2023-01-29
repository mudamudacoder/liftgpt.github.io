import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { ServicesComponent } from './services/services.component';
import { WorkoutBuilderComponent } from './workout-builder/workout-builder.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { AccessoryLookupComponent } from './accessory-lookup/accessory-lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccountComponent,
    ServicesComponent,
    WorkoutBuilderComponent,
    CalorieTrackerComponent,
    AccessoryLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
