import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CommonModule } from '@angular/common';
import { BarcodeFormat } from '@zxing/library';
import { BarcodeHistoryService } from '../barcode-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css'],
  imports: [ZXingScannerModule, CommonModule]
})
export class BarcodeScannerComponent {

  public error : string = '';
  public isScanned: boolean = false;
  public scannedResult: string = '';
  public allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX, BarcodeFormat.EAN_8, BarcodeFormat.CODE_93, BarcodeFormat.CODE_39 ];

  constructor(private barcodeHistoryService: BarcodeHistoryService, private router: Router) { }

  handleScan(result: string) {
    this.scannedResult = result;

    if(this.scannedResult == '3017620422003'){
      this.barcodeHistoryService.addScan(result);
      this.error = 'Code scanné: ' + this.scannedResult;
      this.isScanned = true;
      setTimeout(() => {
        this.router.navigate(['/produit1']);
      }, 3000); 
    
    }
    else if(this.scannedResult == '5010477348395'){
      this.barcodeHistoryService.addScan(result);
      this.isScanned = true;
      this.error = 'Code scanné: ' + this.scannedResult;
      setTimeout(() => {
        this.router.navigate(['/produit2']);
      }, 3000);

    }
    else{
      this.error = 'Code inconnu.';
      this.isScanned = false;
    }
  }
}
