import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasActivasPageRoutingModule } from './reservas-activas-routing.module';

import { ReservasActivasPage } from './reservas-activas.page';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponentComponent } from '../../header-component/header-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasActivasPageRoutingModule
  ],
  declarations: [ReservasActivasPage, CardComponent, HeaderComponentComponent]
})
export class ReservasActivasPageModule {}
