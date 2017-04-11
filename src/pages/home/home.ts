import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: string;
  options:CameraOptions = {
    quality:100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(public navCtrl: NavController, public camera: Camera) {

  }

async takePicture():Promise<any>{
  try{
  this.image = await this.camera.getPicture(this.options);
  }catch (e){
    console.log(e);
  }
}
}
