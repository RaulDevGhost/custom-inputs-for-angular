import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/progress',
  //   pathMatch: 'full',
  //   canActivate: [MsalGuard],
  // },
  {
    path: 'progress',
    component: AppComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'profile',
    component: AppComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'equipment',
    component: AppComponent,
    canActivate: [MsalGuard],
  },
  {
    // Needed for handling redirect after login
    path: 'auth',
    component: MsalRedirectComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [MsalGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Don't perform initial navigation in iframes or popups
      initialNavigation:
        !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
          ? 'enabledNonBlocking'
          : 'disabled', // Set to enabledBlocking to use Angular Universal
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
