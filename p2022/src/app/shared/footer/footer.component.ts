import { LanguageSelectorDialogComponent } from './../../language-selector-dialog/language-selector-dialog.component';
import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(public _dialog: MatDialog) {}
  instagram = 'https://www.instagram.com/animeboikhan2/';
  twitter = 'https://twitter.com/Animeboi92';
  github = 'https://github.com/ShahbaazX786';
  linkedin = 'https://linkedin.com/in/shaik-shahbaaz-alam';
  mail = 'mailto:trav62031@gmail.com';

  openDialog() {
    const dialogRef = this._dialog.open(LanguageSelectorDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
