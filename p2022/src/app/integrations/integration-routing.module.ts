import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolopinComponent } from './holopin/holopin.component';
import { MediumComponent } from './medium/medium.component';
import { IntegrationComponent } from './integration.component';
import { PnfComponent } from '../pnf/pnf.component';

const routes: Routes = [
  {
    path: 'others',
    children: [
      { path: '', component: IntegrationComponent },
      { path: 'holopin', component: HolopinComponent },
      { path: 'medium', component: MediumComponent },
    ],
  },
  { path: '**', component: PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class IntegrationRoutingModule {}
