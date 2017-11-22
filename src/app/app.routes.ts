import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Sha1Component } from './components/sha1/sha1.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sha-1', component: Sha1Component }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);