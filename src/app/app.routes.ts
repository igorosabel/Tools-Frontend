import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Sha1Component } from './components/sha1/sha1.component';
import { CryptComponent } from './components/crypt/crypt.component';
import { UrlencodeComponent } from './components/urlencode/urlencode.component';
import { WindowSizeComponent } from './components/window-size/window-size.component';
import { UserAgentComponent } from './components/user-agent/user-agent.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sha-1', component: Sha1Component },
  { path: 'crypt', component: CryptComponent },
  { path: 'urlencode', component: UrlencodeComponent },
  { path: 'window-size', component: WindowSizeComponent },
  { path: 'user-agent', component: UserAgentComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);