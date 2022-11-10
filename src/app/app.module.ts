import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "src/app/app-routing.module";

import { AppComponent } from "./app.component";
import { COMPONENTS, MATERIAL, PAGES, PIPES, SERVICES } from "./app.common";

@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS, ...PIPES],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ...MATERIAL,
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {}
