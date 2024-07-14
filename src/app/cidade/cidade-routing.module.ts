import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CidadeListComponent } from './cidade-list/cidade-list.component';

const routes: Routes = [
  { path: '', component: CidadeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
