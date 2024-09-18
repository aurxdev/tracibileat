import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BarcodeScannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tracabilitair';
}
