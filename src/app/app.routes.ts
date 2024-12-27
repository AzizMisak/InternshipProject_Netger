import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboveComponent } from './above/above.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


export const routes: Routes = [
    { path: 'first', component: FirstComponent }, // Ana Sayfa
    { path: 'navbar', component: NavbarComponent },
    { path: 'above', component: AboveComponent }, // Hakkında Sayfası
    { path: 'second', component: SecondComponent}, // Ana Sayfa
    { path: 'third', component: ThirdComponent },
    { path: 'fourth', component: FourthComponent }, // Hakkında Sayfası
    { path: '**', redirectTo: '' } // Hatalı URL'leri Ana Sayfaya Yönlendir
];
