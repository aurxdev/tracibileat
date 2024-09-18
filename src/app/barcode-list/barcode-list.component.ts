import { Component, OnInit } from '@angular/core';
import { BarcodeHistoryService } from '../barcode-history.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barcode-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './barcode-list.component.html',
  styleUrl: './barcode-list.component.css'
})
export class BarcodeListComponent {

  public history: string[] = [];

  constructor(private barcodeHistoryService: BarcodeHistoryService) {}

  ngOnInit(): void {
    this.history = this.barcodeHistoryService.getHistory();
  }

}
