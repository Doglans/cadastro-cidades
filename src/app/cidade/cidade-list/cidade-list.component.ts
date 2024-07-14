import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputBoolean, PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableField, PoPageDynamicTableOptions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: []
})

export class CidadeListComponent {

  ngOnInit(): void {
    this.getInterceptorAPI();
  }
  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'codCidade', label: 'Cidade'},
    { property: 'codEstado', label: 'Estado' },
    { property: 'nomePais', label: 'Pais'},
    { property: 'nomeSigla', label: 'Sigla'},
    { property: 'nomeAbeReg', label: 'Região'},
    { property: 'nomeMicReg', label: 'Microrregião'},
    { property: 'cdnDomicFisc', label: 'Domicílio Fiscal'},
    { property: 'cdnMunpioIbge', label: 'Município IBGE'},
    { property: 'search', visible: false}
  ]

  readonly actions: PoPageDynamicTableActions = {
    detail: 'cidades/detail/:id',
    edit: 'cidades/edit/:id',
    new: 'cidades/new',
    remove: false
  }

/*
  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Cidades' }]
  };

  onLoad(): PoPageDynamicTableOptions {
    return {
    fields: [
      { property: 'id', key: false, visible: false, filter: false },
      { property: 'codCidade', key: true, visible: true, filter: true },
      { property: 'codEstado', key: true, visible: true, filter: true },
      { property: 'nomePais', key: true, visible: true, filter: true},
      { property: 'search', visible: false}
    ]};
  }*/

  constructor(private _http: HttpClient) { }
  
  getInterceptorAPI() {
    return this._http
    .get('http://191.23.83.141:8080/api/sec/v1/exemplo')
    .subscribe(data => {
    console.log(data);
    });
  }
}