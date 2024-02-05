import { MaterialsModule } from '../shared/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolopinComponent } from './holopin/holopin.component';
import { MediumComponent } from './medium/medium.component';
import { IntegrationRoutingModule } from './integration-routing.module';
import { IntegrationComponent } from './integration.component';


@NgModule({
  declarations: [ IntegrationComponent, HolopinComponent,MediumComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    IntegrationRoutingModule
  ],
  providers:[]
})
export class IntegrationModule { }
