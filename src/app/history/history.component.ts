import { Component } from '@angular/core';
import { BarcodeListComponent } from '../barcode-list/barcode-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [BarcodeListComponent, RouterOutlet],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}
