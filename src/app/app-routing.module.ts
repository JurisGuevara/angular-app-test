import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// added routes
import { HomeComponent } from './home/home.component';
import { BreweryComponent } from './brewery/brewery.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brewery', component: BreweryComponent },
  { path: 'extra', component: ExtraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
