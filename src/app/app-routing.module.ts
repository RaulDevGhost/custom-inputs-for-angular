import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/progress', pathMatch: 'full' },
  {
    path: 'progress',
    component: AppComponent,
  },
  {
    path: 'profile',
    component: AppComponent,
  },
  {
    path: 'equipment',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
