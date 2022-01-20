import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.page.html',
  styleUrls: ['./backlog.page.scss'],
})
export class BacklogPage implements OnInit {

  backlogList: { name: string; totalSeasons: string; totalEpisodes: string;}[];

  constructor(private route: ActivatedRoute, public alertController: AlertController, public toastController: ToastController) {}

  ngOnInit(): void {
    this.loadBacklogList();
  }

  async deletedToast() {
    const toast = await this.toastController.create({
      message: 'Show deleted',
      icon: 'trash-outline',
      duration: 2000
    });
    toast.present();
  }

  async movedToast() {
    const toast = await this.toastController.create({
      message: 'Show moved',
      icon: 'eye-outline',
      duration: 2000
    });
    toast.present();
  }

  async editedToast() {
    const toast = await this.toastController.create({
      message: 'Show edited',
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
      message: 'Show added',
      icon: 'create-outline',
      duration: 2000
    });
    toast.present();
  }

  async deleteAlert(show) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleting show',
      message: 'Are you sure you want to delete this show?',
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
            console.log('deleted'+show);
            this.backlogList.splice(this.backlogList.indexOf(show), 1);
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
      header: 'Moving show',
      message: 'Move this show to In-Progress?',
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

  async editAlert(name, seasons, episodes) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit show',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: name,
          placeholder: 'Name'
        },
        {
          name: 'seasons',
          type: 'number',
          value: seasons,
          min: '1',
          placeholder: 'Seasons'
        },
        {
          name: 'episodes',
          type: 'number',
          value: episodes,
          min: '1',
          placeholder: 'Episodes'
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
              let index = this.backlogList.findIndex((book) => book.name == name);
              this.backlogList[index].name = data.name;
              this.backlogList[index].totalSeasons = data.seasons;
              this.backlogList[index].totalEpisodes = data.episodes;
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
      header: 'Add new show',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: "Show's name"
        },
        {
          name: 'seasons',
          type: 'number',
          min: '1',
          max: '99',
          placeholder: 'Seasons'
        },
        {
          name: 'episodes',
          type: 'number',
          min: '1',
          max: '99999',
          placeholder: 'Episodes'
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
              data.name = 'New show'
            }
            if(!data.seasons) { 
              data.seasons = '1'
            }
            if(!data.episodes) { 
              data.episodes = '1'
            }
            console.log('Confirm add');
            console.log(data.name);
            this.addedToast();
            this.backlogList.push({name: data.name, totalSeasons: data.seasons, totalEpisodes: data.episodes});
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
      name: 'Mr. Robot',
      totalSeasons: '4',
      totalEpisodes: '10'
     }];
  }
}
