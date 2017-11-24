import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
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
	MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { Sha1Component } from './components/sha1/sha1.component';
import { CryptComponent } from './components/crypt/crypt.component';
import { UrlencodeComponent } from './components/urlencode/urlencode.component';
import { WindowSizeComponent } from './components/window-size/window-size.component';
import { UserAgentComponent } from './components/user-agent/user-agent.component';
import { Sha1Pipe } from './pipes/sha1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Sha1Component,
    Sha1Pipe,
    CryptComponent,
    UrlencodeComponent,
    WindowSizeComponent,
    UserAgentComponent
  ],
  imports: [
    BrowserModule,
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
    MatInputModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
