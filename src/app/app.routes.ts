import { Routes } from '@angular/router';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { OptionsComponent } from './options/options.component';
import { Produit1Component } from './produit1/produit1.component';
import { Produit2Component } from './produit2/produit2.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path:'history',
        component: HistoryComponent,
        title: 'History',
    },
    {
        path:'scan',
        component: BarcodeScannerComponent,
        title: 'Scan',
    },
    {
        path:'options',
        component: OptionsComponent,
        title: 'Options',
    },
    {
        path:'produit1',
        component: Produit1Component,
        title: 'Nutella',
    },
    {
        path:'produit2',
        component: Produit2Component,
        title: 'Jordan',
    }
];
