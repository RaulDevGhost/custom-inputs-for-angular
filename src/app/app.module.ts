import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
