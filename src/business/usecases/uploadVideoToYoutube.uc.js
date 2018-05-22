import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

export const upload = (filename, injection={}) => {
  const fileTransfer: TransferObject = new Transfer();

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
     const size = data.bytesSent / (1024 * 1024);
     alert('finish')
    //  alert(`${data.response} | ${size}MB`);
   }, (error) => {
    //  console.log(JSON.stringify(error));
   })
}
