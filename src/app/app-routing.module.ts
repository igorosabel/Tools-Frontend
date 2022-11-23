import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptComponent } from "./pages/crypt/crypt.component";
import { MainComponent } from "./pages/main/main.component";
import { Sha1Component } from "./pages/sha1/sha1.component";
import { UrlencodeComponent } from "./pages/urlencode/urlencode.component";
import { UserAgentComponent } from "./pages/user-agent/user-agent.component";
import { WindowSizeComponent } from "./pages/window-size/window-size.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "sha-1", component: Sha1Component },
  { path: "crypt", component: CryptComponent },
  { path: "urlencode", component: UrlencodeComponent },
  { path: "window-size", component: WindowSizeComponent },
  { path: "user-agent", component: UserAgentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
