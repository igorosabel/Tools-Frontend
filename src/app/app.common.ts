/*
 * Páginas
 */
import { CryptComponent } from "src/app/pages/crypt/crypt.component";
import { MainComponent } from "src/app/pages/main/main.component";
import { Sha1Component } from "src/app/pages/sha1/sha1.component";
import { UrlencodeComponent } from "src/app/pages/urlencode/urlencode.component";
import { UserAgentComponent } from "src/app/pages/user-agent/user-agent.component";
import { WindowSizeComponent } from "src/app/pages/window-size/window-size.component";

export const PAGES: any[] = [
  CryptComponent,
  MainComponent,
  Sha1Component,
  UrlencodeComponent,
  UserAgentComponent,
  WindowSizeComponent,
];

/*
 * Componentes
 */
import { UaInfoDialog } from "src/app/components/ua-info-dialog/ua-info-dialog.component";

export const COMPONENTS: any[] = [UaInfoDialog];

/*
 * Pipes
 */
import { Sha1Pipe } from "src/app/pipes/sha1.pipe";

export const PIPES: any[] = [Sha1Pipe];

/*
 * Servicios
 */
import { ApiService } from "src/app/services/api.service";
import { ClassMapperService } from "src/app/services/class-mapper.service";

export const SERVICES: any[] = [ApiService, ClassMapperService];

/*
 * Componentes Angular Material
 */
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

export const MATERIAL: any[] = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
];
