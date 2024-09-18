import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeHistoryService {
  private history: string[] = [];

  addScan(result: string) {
    if(!this.history.includes(result)){
      this.history.push(result);
    }
  }

  getHistory(): string[] {
    
    return this.history;
  }
}