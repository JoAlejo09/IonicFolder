import { Component } from '@angular/core';
import {PhotoService} from '../services/photo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public photoService:PhotoService) {}
  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
  async savePicture(){
   const capturedPhoto = await this.photoService.addNewToGallery();
await this.photoService.savePicture(capturedPhoto);

  }

}

