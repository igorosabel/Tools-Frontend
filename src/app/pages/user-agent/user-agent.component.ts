import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UaInfoDialog } from "src/app/components/ua-info-dialog/ua-info-dialog.component";
import { UserAgent } from "src/app/model/user-agent.model";
import { ApiService } from "src/app/services/api.service";
import { ClassMapperService } from "src/app/services/class-mapper.service";

function _navigator(): any {
  return navigator;
}

@Component({
  selector: "app-user-agent",
  templateUrl: "./user-agent.component.html",
  styleUrls: ["./user-agent.component.scss"],
})
export class UserAgentComponent implements OnInit {
  ua: string = "";
  list: UserAgent[] = [];

  constructor(
    private as: ApiService,
    private cms: ClassMapperService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const nav = _navigator();
    this.ua = nav.userAgent;

    this.as.getUserAgents().subscribe((result) => {
      this.list = this.cms.getUserAgents(result.list);
    });
  }

  uaInfo(): void {
    let uaInfoRef = this.dialog.open(UaInfoDialog, {
      width: "250px",
      data: { ua: this.ua },
    });

    uaInfoRef.afterClosed().subscribe((result) => {});
  }
}
