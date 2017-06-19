import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { SceneComponent } from './scene/scene.component';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'scenes',
    component: SceneComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
