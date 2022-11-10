import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { routing, appRoutingProviders } from "./app.routes";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { MainComponent } from "./pages/main/main.component";
import { Sha1Component } from "./pages/sha1/sha1.component";
import { CryptComponent } from "./pages/crypt/crypt.component";
import { UrlencodeComponent } from "./pages/urlencode/urlencode.component";
import { WindowSizeComponent } from "./pages/window-size/window-size.component";
import { UserAgentComponent } from "./pages/user-agent/user-agent.component";

import { UaInfoDialog } from "./components/ua-info-dialog/ua-info-dialog.component";

import { Sha1Pipe } from "./pipes/sha1.pipe";
import { UrldecodePipe } from "./pipes/urldecode.pipe";

import { UrlToolsService } from "./services/url-tools.service";
import { ApiService } from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Sha1Component,
    CryptComponent,
    UrlencodeComponent,
    WindowSizeComponent,
    UserAgentComponent,
    UaInfoDialog,
    Sha1Pipe,
    UrldecodePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatSelectModule,
  ],
  providers: [appRoutingProviders, UrlToolsService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
