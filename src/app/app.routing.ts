import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { ScenarioComponent } from './scenario/scenario.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'scenarios',
    component: ScenarioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
