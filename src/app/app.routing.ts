import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { SitchComponent } from './sitch/sitch.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'scenarios',
    component: ScenariosComponent
  },
  {
    path: 'sitch/:id',
    component: SitchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
