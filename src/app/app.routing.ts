import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'scenarios',
    component: ScenarioComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
