import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routes';
import {
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatListModule,
	MatSidenavModule,
	MatCheckboxModule,
  MatRadioModule,
	MatDialogModule,
	MatInputModule,
	MatTabsModule,
	MatSelectModule
} from '@angular/material';

import { AppComponent }        from './app.component';
import { MainComponent }       from './pages/main/main.component';
import { Sha1Component }       from './pages/sha1/sha1.component';
import { CryptComponent }      from './pages/crypt/crypt.component';
import { UrlencodeComponent }  from './pages/urlencode/urlencode.component';
import { WindowSizeComponent } from './pages/window-size/window-size.component';
import { UserAgentComponent }  from './pages/user-agent/user-agent.component';

import { Sha1Pipe }      from './pipes/sha1.pipe';
import { UrldecodePipe } from './pipes/urldecode.pipe';

import { UrlToolsService } from './services/url-tools.service';
import { ApiService }      from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Sha1Component,
    CryptComponent,
    UrlencodeComponent,
    WindowSizeComponent,
    UserAgentComponent,
    Sha1Pipe,
    UrldecodePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    routing,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [
    appRoutingProviders,
    UrlToolsService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
