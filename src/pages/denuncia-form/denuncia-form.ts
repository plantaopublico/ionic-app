import { Input, Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DenunciaForm page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-denuncia-form',
  templateUrl: 'denuncia-form.html',
})
export class DenunciaForm {

  @Input('localURL') localURL = '';
  @Input('mediaType') mediaType = '';

  constructor(public navCtrl: ModalController, public navParams: NavParams) {
    // console.log(this.navParams.data.mediaType);
    // console.log(this.navParams.data.filename);
    this.localURL = this.navParams.data.localURL;
  }
}
