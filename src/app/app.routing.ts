import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { ScenariosComponent } from './scenarios/scenarios.component';
import { SceneComponent } from './scene/scene.component';
=======
import { SceneComponent } from './scene/scene.component';
import { EditorComponent } from './editor/editor.component';
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
<<<<<<< HEAD
    path: 'scenarios',
    component: ScenariosComponent
  },
  {
    path: 'scene/:id',
    component: SceneComponent
=======
    path: 'scenes',
    component: SceneComponent
  },
  {
    path: 'editor',
    component: EditorComponent
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
