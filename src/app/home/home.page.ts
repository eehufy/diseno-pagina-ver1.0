import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController ) {}
  
  async asistencia() {
    const alert = await this.alertController.create({
      header: 'Atencion',
      subHeader: ' Mensaje importante ',
      message: 'Se abrira la camara para leer el QR ',
      buttons: ['entendido'],
    });

    await alert.present();
  }


}
