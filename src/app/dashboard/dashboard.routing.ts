import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RateComponent } from './rate';

export const DashboardRoutes: Routes = [{

  path: '',
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'rate',
    component: RateComponent
  }]
}];
