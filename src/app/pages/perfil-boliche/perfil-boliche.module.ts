import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilBolichePageRoutingModule } from './perfil-boliche-routing.module';

import { PerfilBolichePage } from './perfil-boliche.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilBolichePageRoutingModule
  ],
  declarations: [PerfilBolichePage]
})
export class PerfilBolichePageModule {}
