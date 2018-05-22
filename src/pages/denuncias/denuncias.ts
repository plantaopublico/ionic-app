
import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { MediaPlugin } from '@ionic-native/media';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture';
import { DenunciaForm } from '../denuncia-form/denuncia-form';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';

@Component({
  selector: 'page-denuncias',
  templateUrl: 'denuncias.html',
})

export class DenunciasPage {

  denunciaForm = DenunciaForm;

  @Input('denuncias') denuncias = [];

  constructor(
    private file: File,
    private camera: Camera,
    public navCtrl: NavController,
    private media: MediaPlugin,
    public modalCtrl: ModalController,
    public af: AngularFire,
    private fb: Facebook,
    private mediaCapture: MediaCapture) {
    setTimeout(() => {
      this.denuncias = [
        {},
        {},
      ];
    }, 1000)
    // this.fb.logout()
    //   .then((data) => {
    //     console.log('logout')
    //   }).catch((err) => {
    //     console.log('err');
    //   })

    // this.fb.login(['email'])
    //   .then(() => {
    //
    //   })
    //   .catch(() => console.log('login error '))

    // this.fb.login(['email'])
    //   .then((_response) => {
    //     /// THIS IS THE MAGIC ....
    //     // - See Documentation
    //     // https://firebase.google.com/docs/reference/js/firebase.auth.FacebookAuthProvider#credential
    //     //
    //     let creds = firebase.auth.FacebookAuthProvider.credential(_response.authResponse.accessToken)
    //     /////////////////////////
    //
    //     let providerConfig = {
    //       provider: AuthProviders.Facebook,
    //       method: AuthMethods.OAuthToken,
    //       remember: 'default',
    //       scope: ['email'],
    //     };
    //     this.af.auth.login(creds, providerConfig)
    //       .then((success) => {
    //         // console.log("Firebase success: " + JSON.stringify(success));
    //         console.log(JSON.stringify(success))
    //       })
    //       .catch((error) => {
    //         // console.log("Firebase failure: " + JSON.stringify(error));
    //         console.log(JSON.stringify(error))
    //       });
    //   });
    // this.items = this.firebase.database.list('/list');
    // console.log(this.firebase.auth.FacebookAuthProvider)
  }

  makeVideo = () => {
    this.mediaCapture.captureVideo()
      .then((data: MediaFile[]) => {
        const file = data[0];
        this.openDenunciaFormModal({
          mediaType: 'video',
          filename: file.fullPath
        });
      })
      .catch((err) => console.log(err));
  }

  makePicture = () => {
    this.mediaCapture.captureImage()
      .then((data: MediaFile[]) => {
        const file = data[0];
        const path = file.fullPath.replace(file.name, '');
        this.file.readAsDataURL(path, file.name)
          .then((localURL) => {
            this.openDenunciaFormModal({
              mediaType: 'photo',
              localURL: localURL,
              filename: file.fullPath
            });
          })
          .catch((err) => {
            console.log('err:', err);
          });
      })
      .catch((err) => console.log(err));
  }

  makeAudio = () => {
    this.mediaCapture.captureAudio()
      .then((data: MediaFile[]) => {
        const file = data[0];
        console.log(file.fullPath)
      })
      .catch((err) => console.log(err));
  }

  openMediaLibrary = () => {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.ALLMEDIA
    };

    this.camera.getPicture(options).then((mediaUrl) => {
     this.openDenunciaFormModal({
        mediaType: 'library',
        localURL: mediaUrl
      });
    }, (err) => {
      console.log(err);
    });
  }

  openDenunciaFormModal = (options={}) => {
    const modal = this.modalCtrl.create(DenunciaForm, options);
    modal.present();
  }
}
