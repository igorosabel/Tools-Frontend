import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "ua-info-dialog",
  templateUrl: "./ua-info-dialog.html",
})
export class UaInfoDialog {
  constructor(
    public uaInfoRef: MatDialogRef<UaInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.uaInfoRef.close();
  }
}
