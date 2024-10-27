import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Howl } from 'howler';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public folder: string;
  showTemporaryCard = false; 
  music: Howl;
  isPlaying = false;

  constructor(private alertController: AlertController) {
    this.folder = "Kamila's thought";
    this.music = new Howl({
      src: ["assets/audio/APT.mp3"],
      html5: true
    }); 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Nothing Inside',
      message: 'Get a life u nerdy',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.presentSecondAlert(); 
          },
        },
      ],
    });

    await alert.present();
  }

  async presentSecondAlert() {
    const secondAlert = await this.alertController.create({
      header: "JK don't be dramatic",
      message: 'Check this out',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.showTemporaryCard = true; 
          },
        },
        {
          text: 'NO',
          handler: () => {
            this.presentThirtAlert(); 
          },
        },
      ],
    });

    await secondAlert.present();
  }

  async presentThirtAlert() {
    const thirtAlert = await this.alertController.create({
      header: "Seriously bruh",
      message: 'just click',
      buttons: ['OK'],
    });

    await thirtAlert.present();

    thirtAlert.onDidDismiss().then(() => {
      this.showTemporaryCard = true; 
    });
  }

  hideTemporaryCard() {
    this.showTemporaryCard = false;
    this.music.pause(); 
    this.music.seek(0); 
    this.isPlaying = false;  
  }

  playMusic() {
    if (this.isPlaying) {
      this.music.pause(); 
    } else {
      this.music.play(); 
    }
    this.isPlaying = !this.isPlaying; 
  }
}
