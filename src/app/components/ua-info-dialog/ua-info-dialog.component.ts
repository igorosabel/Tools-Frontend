import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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