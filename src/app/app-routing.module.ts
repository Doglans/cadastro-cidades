import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'cidades',
    loadChildren: () => import('../app/cidade/cidade.module').then(m => m.CidadeModule)
  },
  { path: '', redirectTo: '/cidades', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

/*import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';

//const routes = Routes = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, 
            FormsModule,    
            PoModule,
            PoTemplatesModule],
  exports: [CommonModule, 
            FormsModule,    
            PoModule,
            PoTemplatesModule],
})
export class AppRoutingModule { }*/
