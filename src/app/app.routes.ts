import { Routes } from '@angular/router';
import { DesktopComponent } from './components/layout/desktop/desktop.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    { path: '', component:  LayoutComponent },
    { path: '**',   redirectTo: '', pathMatch: 'full' }
  ];
