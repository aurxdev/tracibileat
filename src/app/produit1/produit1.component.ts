import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-produit1',
  standalone: true,
  imports: [],
  templateUrl: './produit1.component.html',
  styleUrl: './produit1.component.css'
})
export class Produit1Component implements OnInit{
  
    constructor() { }
  
    ngOnInit(): void {
      AOS.init();
    }

}
