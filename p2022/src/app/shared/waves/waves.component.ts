import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent {

  @Input() topwave: number = 0;
  @Input() bottomwave: number = 0;

}
