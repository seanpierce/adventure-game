import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { SceneComponent } from './scene/scene.component';

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
    path: 'scene/:id',
    component: SceneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
