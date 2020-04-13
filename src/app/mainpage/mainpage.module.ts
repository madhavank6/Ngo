import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainpagePageRoutingModule } from './mainpage-routing.module';

import { MainpagePage } from './mainpage.page';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import {SidebarModule} from 'ng-sidebar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SidebarModule .forRoot(),
    MatSidenavModule,
    MatListModule,
    IonicModule,
    MainpagePageRoutingModule
  ],
  declarations: [MainpagePage]
})
export class MainpagePageModule {}
