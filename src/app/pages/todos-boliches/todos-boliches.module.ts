import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosBolichesPageRoutingModule } from './todos-boliches-routing.module';

import { TodosBolichesPage } from './todos-boliches.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosBolichesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TodosBolichesPage]
})
export class TodosBolichesPageModule {}
