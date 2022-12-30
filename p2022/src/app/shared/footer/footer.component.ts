import { LanguageSelectorDialogComponent } from './../../language-selector-dialog/language-selector-dialog.component';
import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent{
  constructor(public _dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this._dialog.open(LanguageSelectorDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
