import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from '../my-form/my-form.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ViewformComponent } from '../viewform/viewform.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, MyFormComponent, MyHeaderComponent, ViewformComponent]
})
export class HomePageModule {}
