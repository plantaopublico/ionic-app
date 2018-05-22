import { Component } from '@angular/core';

import { DenunciasPage } from '../denuncias/denuncias';
import { ArquivosPage } from '../arquivos/arquivos';
import { SobrePage } from '../sobre/sobre';

import { DenunciaForm } from '../denuncia-form/denuncia-form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = DenunciasPage;
  tab1Root = DenunciasPage;
  tab2Root = ArquivosPage;
  tab3Root = SobrePage;
  tab4Root = DenunciaForm;

  constructor() {

  }
}
