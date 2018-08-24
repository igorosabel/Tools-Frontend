import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiService } from '../../services/api.service';
import { UserAgentResult, UserAgent } from '../../interfaces/interfaces';

function _navigator() : any {
   return navigator;
}

@Component({
  selector: 'app-user-agent',
  templateUrl: './html/user-agent.component.html',
  styleUrls: ['./css/user-agent.component.css']
})
export class UserAgentComponent implements OnInit {
  ua: string = '';
  list: UserAgent[] = [];

  constructor(private as: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    const nav = _navigator();
    this.ua = nav.userAgent;
    
    this.as.getUserAgents().subscribe(result => {
      this.list = result.list;
    });
  }
  
  uaInfo() {
    let uaInfoRef = this.dialog.open(UaInfoDialog, {
      width: '250px',
      data: { ua: this.ua }
    });

    uaInfoRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'ua-info-dialog',
  templateUrl: './html/ua-info-dialog.html',
})
export class UaInfoDialog {

  constructor(
    public uaInfoRef: MatDialogRef<UaInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.uaInfoRef.close();
  }

}