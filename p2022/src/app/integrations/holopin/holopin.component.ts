import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-holopin',
  templateUrl: './holopin.component.html',
  styleUrls: ['./holopin.component.css'],
})
export class HolopinComponent {
  enabled = new FormControl(true);
}
