import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-backlog',
  templateUrl: 'backlog.page.html',
  styleUrls: ['backlog.page.scss']
})
export class BacklogPage implements OnInit{

  backlogList: { name: string; totalChapters: string; }[];

  constructor(private route: ActivatedRoute, public alertController: AlertController, public toastController: ToastController) {}

  ngOnInit(): void {
    this.loadBacklogList();
  }

  async deletedToast() {
    const toast = await this.toastController.create({
      message: 'Book deleted',
      icon: 'trash-outline',
      duration: 2000
    });
    toast.present();
  }

  async movedToast() {
    const toast = await this.toastController.create({
      message: 'Book moved',
      icon: 'eye-outline',
      duration: 2000
    });
    toast.present();
  }

  async editedToast() {
    const toast = await this.toastController.create({
      message: 'Book edited',
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
      message: 'Book added',
      icon: 'create-outline',
      duration: 2000
    });
    toast.present();
  }

  async deleteAlert(book) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleting book',
      message: 'Are you sure you want to delete this book?',
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
            console.log('deleted'+book);
            this.backlogList.splice(this.backlogList.indexOf(book), 1);
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
      header: 'Moving book',
      message: 'Move this book to In-Progress?',
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

  async editAlert(name, chapters) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Book',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: name,
          placeholder: 'Name'
        },
        {
          name: 'chapters',
          type: 'number',
          value: chapters,
          min: '1',
          placeholder: 'Chapters'
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
              this.backlogList[index].totalChapters = data.chapters;
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
      header: 'Add new Book',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: "Book's name"
        },
        {
          name: 'chapters',
          type: 'number',
          min: '1',
          placeholder: 'Chapters'
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
              data.name = 'New book'
            }
            if(!data.chapters) { 
              data.chapters = '1'
            }
            console.log('Confirm add');
            console.log(data.name);
            this.addedToast();
            this.backlogList.push({name: data.name, totalChapters: data.chapters});
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
      name: 'Bible',
      totalChapters: '5'
     }];
  }
}
