import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { ArquivosPage } from '../pages/arquivos/arquivos';
import { DenunciasPage } from '../pages/denuncias/denuncias';
import { DenunciaForm } from '../pages/denuncia-form/denuncia-form';
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Camera } from '@ionic-native/camera';

import { Camera } from '@ionic-native/camera';
import { MediaPlugin } from '@ionic-native/media';
import { MediaCapture } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { VideoEditor } from '@ionic-native/video-editor';
import { Transfer } from '@ionic-native/transfer';
import { Facebook } from '@ionic-native/facebook';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { HeaderComponent } from '../components/header/header';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDeNfdC1tILMpvfZ8vWxLJySwK5lYErAMg",
  authDomain: "plantao-publico-org.firebaseapp.com",
  databaseURL: "https://plantao-publico-org.firebaseio.com",
  projectId: "plantao-publico-org",
  storageBucket: "plantao-publico-org.appspot.com",
  messagingSenderId: "525578270135"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,

    LoginPage,
    SobrePage,
    ArquivosPage,
    DenunciasPage,
    ApresentacaoPage,
    DenunciaForm,

    TabsPage,
    ProgressBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,

    LoginPage,
    SobrePage,
    ArquivosPage,
    DenunciasPage,
    DenunciaForm,
    ApresentacaoPage,

    TabsPage
  ],
  providers: [
    File,
    HTTP,
    Camera,
    Facebook,
    Transfer,
    StatusBar,
    VideoEditor,
    SplashScreen,
    MediaCapture,
    MediaPlugin,
    // Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
