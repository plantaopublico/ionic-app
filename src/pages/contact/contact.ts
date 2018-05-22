import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { VideoEditor } from '@ionic-native/video-editor';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

declare var cordova;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private file: File,
    private http: HTTP,
    public platform: Platform,
    private transfer: Transfer,
    private videoEditor: VideoEditor,
    private mediaCapture: MediaCapture) {

    // this.file.checkDir(this.file.dataDirectory, 'videos')
    //   .then()
    //   .catch(err => {
    //     this.file.createDir(this.file.dataDirectory, 'video', true)
    //       .then(this.captureVideo);
    //   });
    this.captureVideo();
  }

  captureVideo = () => {
    this.mediaCapture.captureVideo()
      .then((data: MediaFile[]) => {
        const file = data[0];
        this.uploadVideo(file.fullPath);
      }).catch((err) => {
        alert(err.message);
      });
  }


  uploadVideo = (filename) => {
    const fileTransfer: TransferObject = this.transfer.create();
    let options: FileUploadOptions = {
       fileKey: "file",
       httpMethod: 'POST',
       chunkedMode: false,
       fileName: filename.substr(filename.lastIndexOf('/') + 1),
       mimeType: "application/octet-stream",
       params: {
         teste: 2,
         value1: 3
       }
    };
    fileTransfer.onProgress((res) => {
      console.log(res.loaded)
    });
    fileTransfer.upload(filename, encodeURI('https://plantao-publico.herokuapp.com/upload'), options)
     .then((data) => {
       // success
      //  const size = data.bytesSent / (1024 * 1024);
       alert('finish')
      //  alert(`${data.response} | ${size}MB`);
     }, (error) => {
      //  console.log(JSON.stringify(error));
     })
  }
}
