import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoFieldModule, PoModule, PoTableModule, PoDynamicModule, PoListViewModule   } from '@po-ui/ng-components';
import { InterceptorsModule } from '../interceptors/interceptors.module';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [],
  imports: [
    PoModule,
    CommonModule,
    HttpClientModule,
    InterceptorsModule,
    PoTableModule,
    PoFieldModule,
    FormsModule,
    PoTableModule,
    PoPageDynamicTableModule,
    PoDynamicModule,
    PoListViewModule
  ],
  exports:[
    PoModule,
    CommonModule,
    HttpClientModule,
    InterceptorsModule,
    PoTableModule,
    PoFieldModule,
    FormsModule,
    PoTableModule,
    PoPageDynamicTableModule,
    PoDynamicModule,
    PoListViewModule
  ]
})
export class SharedModule { }
