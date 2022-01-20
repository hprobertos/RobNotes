import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.page.html',
  styleUrls: ['./backlog.page.scss'],
})
export class BacklogPage implements OnInit {

  backlogList: { name: string; hours: string; minutes: string; }[];
 
  constructor(private route: ActivatedRoute, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.loadBacklogList();
  }

  async deletedToast() {
    const toast = await this.toastController.create({
      message: 'Movie deleted',
      icon: 'trash-outline',
      duration: 2000
    });
    toast.present();
  }

  async movedToast() {
    const toast = await this.toastController.create({
      message: 'Movie moved',
      icon: 'eye-outline',
      duration: 2000
    });
    toast.present();
  }

  async editedToast() {
    const toast = await this.toastController.create({
      message: 'Movie edited',
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
      message: 'Movie added',
      icon: 'create-outline',
      duration: 2000
    });
    toast.present();
  }

  async deleteAlert(movie) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleting movie',
      message: 'Are you sure you want to delete this movie?',
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
            console.log('deleted'+movie);
            this.backlogList.splice(this.backlogList.indexOf(movie), 1);
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
      header: 'Moving movie',
      message: 'Move this movie to In-Progress?',
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

  async editAlert(name, hours, minutes) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Movie',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: name,
          placeholder: 'Name'
        },
        {
          name: 'hours',
          type: 'number',
          value: hours,
          min: '1',
          placeholder: 'hours'
        },
        {
          name: 'minutes',
          type: 'number',
          value: minutes,
          min: '1',
          placeholder: 'minutes'
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
              let index = this.backlogList.findIndex((movie) => movie.name == name);
              this.backlogList[index].name = data.name;
              this.backlogList[index].hours = data.hours;
              this.backlogList[index].minutes = data.minutes;
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
      header: 'Add new Movie',
      inputs: [
        {
          cssClass: 'text-in-alert',
          name: 'name',
          type: 'text',
          placeholder: "Movie's name"
        },
        {
          name: 'hours',
          type: 'number',
          min: '0',
          max: '24',
          placeholder: 'Hours'
        },
        {
          name: 'minutes',
          type: 'number',
          min: '1',
          max: '59',
          placeholder: 'Minutes'
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
              data.name = 'New movie'
            }
            if(!data.hours) { 
              data.hours = '1'
            }
            if(!data.minutes) { 
              data.minutes = '0'
            }
            data.minutes = ("0" + data.minutes).slice(-2);
            console.log('Confirm add');
            console.log(data.name);
            this.addedToast();
            this.backlogList.push({name: data.name, hours: data.hours, minutes: data.minutes});
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
      name: 'Scott Pilgrim',
      hours: '1',
      minutes: '55'
     }];
  }
}
