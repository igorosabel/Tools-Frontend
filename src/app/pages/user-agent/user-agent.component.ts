import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../services/api.service';
import { UserAgentResult, UserAgent } from '../../interfaces/interfaces';
import { UaInfoDialog } from '../../components/ua-info-dialog/ua-info-dialog.component';

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