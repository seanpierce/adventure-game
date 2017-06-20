import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin/admin.component';
import { SceneComponent } from './scene/scene.component';
import { EditorComponent } from './editor/editor.component';
import { IntroComponent } from './intro/intro.component';
import { CharactersComponent } from './characters/characters.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'scene/:id',
    component: SceneComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
