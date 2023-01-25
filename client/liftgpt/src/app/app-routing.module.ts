import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ServicesComponent } from './services/services.component';
import { WorkoutBuilderComponent } from './workout-builder/workout-builder.component';  
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'workout-builder', component: WorkoutBuilderComponent},
  { path: 'calorie-tracker', component: CalorieTrackerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
