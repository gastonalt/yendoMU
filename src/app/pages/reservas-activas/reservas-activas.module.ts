import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasActivasPageRoutingModule } from './reservas-activas-routing.module';

import { ReservasActivasPage } from './reservas-activas.page';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponentComponent } from '../../header-component/header-component.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasActivasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReservasActivasPage]
})
export class ReservasActivasPageModule {}
