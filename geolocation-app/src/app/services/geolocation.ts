import { Injectable } from '@angular/core';
import { Geolocation as geolocation} from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class Geolocation {
  constructor (){}

  async getCurrentPosition(){
    const posicion = await geolocation.getCurrentPosition();
    console.log(posicion.coords.latitude, posicion.coords.longitude);
    return (posicion);
  }
}