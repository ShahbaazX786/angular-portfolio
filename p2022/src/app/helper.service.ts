import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  navigate = new EventEmitter<string>();
}
