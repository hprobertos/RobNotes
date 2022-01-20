import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.page.html',
  styleUrls: ['./backlog.page.scss'],
})
export class BacklogPage implements OnInit {
  
  backlogList: { name: string; console: string; }[];
 
  constructor(private route: ActivatedRoute, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.loadBacklogList();
  }

  async deletedToast() {
    const toast = await this.toastController.create({
      message: 'Game deleted',
      icon: 'trash-outline',
      duration: 2000
    });
    toast.present();
  }

  async movedToast() {
    const toast = await this.toastController.create({
      message: 'Game moved',
      icon: 'eye-outline',
      duration: 2000
    });
    toast.present();
  }

  async editedToast() {
    const toast = await this.toastController.create({
      message: 'Game edited',
      icon: 'pencil-outline',
      duration: 2000
    });
    toast.present();
  }

  async failedToast() {
    const toast = await this.toastController.create({
      message: 'Failed to edit',
      icon: 'close-circle-outline',
      duration: 2000
    });
    toast.present();
  }

  async addedToast() {
    const toast = await this.toastController.create({
      message: 'Game added',
      icon: 'create-outline',
      duration: 2000
    });
    toast.present();
  }

  async deleteAlert(game) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleting game',
      message: 'Are you sure you want to delete this game?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          cssClass: 'alert-delete-button',
          id: 'confirm-button',
          handler: () => {
            console.log('deleted'+game);
            this.backlogList.splice(this.backlogList.indexOf(game), 1);
            this.deletedToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async moveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Moving game',
      message: 'Move this game to In-Progress?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Move',
          id: 'confirm-button',
          handler: () => {
            console.log('moved');
            this.movedToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async editAlert(name, console) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit game',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: name,
          placeholder: 'Name'
        },
        {
          name: 'console',
          type: 'text',
          value: console,
          placeholder: 'Console'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (data) => {
            if (!data.name) {
              this.failedToast();
            }
            else {
              console.log('Confirm edit');
              this.editedToast();
              let index = this.backlogList.findIndex((game) => game.name == name);
              this.backlogList[index].name = data.name;
              this.backlogList[index].console = data.console;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async addAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add new Game',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'New Game'
        },
        {
          name: 'console',
          type: 'text',
          placeholder: 'Console'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          role: 'destructive',
          cssClass: 'alert-add-disabled',
          handler: (data) => {
            if(!data.name) { 
              data.name = 'New game'
            }
            if(!data.console) { 
              data.console = 'PC'
            }
            console.log('Confirm add');
            console.log(data.name);
            this.addedToast();
            this.backlogList.push({name: data.name, console: data.console});
          }
        }
      ]
    });

    await alert.present();
  }

  reorderBacklogList(event) {
    this.backlogList = event.detail.complete(this.backlogList);
  }

  loadBacklogList(): void {
    this.backlogList = [{
      name: 'Hollow Knight',
      console: 'PS4'
     }];
  }
}
