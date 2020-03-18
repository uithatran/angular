import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipmentListComponent } from './components/equipments/equipment-list/equipment-list.component';
import { EquipmentCreateComponent } from './components/equipments/equipment-create/equipment-create.component';
import { EquipmentEditComponent } from './components/equipments/equipment-edit/equipment-edit.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EquipmentListComponent,
    EquipmentCreateComponent,
    EquipmentEditComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
