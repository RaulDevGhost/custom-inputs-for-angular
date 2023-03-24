import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { InputComponent } from './components/input/input.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { HelpComponent } from './pages/help/help.component';

import {
  IPublicClientApplication,
  PublicClientApplication,
  InteractionType,
} from '@azure/msal-browser';
import {
  MsalGuard,
  MsalInterceptor,
  MsalBroadcastService,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalGuardConfiguration,
  MsalRedirectComponent,
  ProtectedResourceScopes,
} from '@azure/msal-angular';

import { msalConfig, loginRequest, protectedResources } from './auth-config';
import { HomeComponent } from './pages/home/home.component';

/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * MSAL Angular will automatically retrieve tokens for resources
 * added to protectedResourceMap. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
 */
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<
    string,
    Array<string | ProtectedResourceScopes> | null
  >();

  protectedResourceMap.set(protectedResources.apiTodoList.endpoint, [
    {
      httpMethod: 'GET',
      scopes: [...protectedResources.apiTodoList.scopes.read],
    },
    {
      httpMethod: 'POST',
      scopes: [...protectedResources.apiTodoList.scopes.write],
    },
    {
      httpMethod: 'PUT',
      scopes: [...protectedResources.apiTodoList.scopes.write],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...protectedResources.apiTodoList.scopes.write],
    },
  ]);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap,
  };
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    CheckboxComponent,
    ButtonComponent,
    SidenavComponent,
    ProfileComponent,
    EquipmentComponent,
    AvatarComponent,
    TopnavComponent,
    InputComponent,
    ProgressComponent,
    AcademyComponent,
    HelpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MsalModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
