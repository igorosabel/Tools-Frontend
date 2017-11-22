import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Sha1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
