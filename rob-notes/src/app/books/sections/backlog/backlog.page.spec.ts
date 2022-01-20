import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';

import { BacklogPage } from './backlog.page';

describe('BacklogPage', () => {
  let component: BacklogPage;
  let fixture: ComponentFixture<BacklogPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BacklogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadBacklogList', () => {
      // Given
      spyOn(component, 'loadBacklogList');

      // When
      component.ngOnInit();
      
      // Then
      expect(component.loadBacklogList).toHaveBeenCalled();
    });
  });

  describe('deletedToast', () => {
    it('should call toastController create method with correct parameters', () => {
      // Given
      let mockToast = {
        message: 'Book deleted',
        icon: 'trash-outline',
        duration: 2000
      }
      spyOn(component.toastController, 'create');

      // When
      component.deletedToast();
      
      // Then
      expect(component.toastController.create).toHaveBeenCalledWith(mockToast);
    });
  });

  describe('movedToast', () => {
    it('should call toastController create method with correct parameters', () => {
      // Given
      let mockToast = {
        message: 'Book moved',
        icon: 'eye-outline',
        duration: 2000
      }
      spyOn(component.toastController, 'create');

      // When
      component.movedToast();
      
      // Then
      expect(component.toastController.create).toHaveBeenCalledWith(mockToast);
    });
  });

  describe('editedToast', () => {
    it('should call toastController create method with correct parameters', () => {
      // Given
      let mockToast = {
        message: 'Book edited',
        icon: 'pencil-outline',
        duration: 2000
      }
      spyOn(component.toastController, 'create');

      // When
      component.editedToast();
      
      // Then
      expect(component.toastController.create).toHaveBeenCalledWith(mockToast);
    });
  });

  describe('failedToast', () => {
    it('should call toastController create method with correct parameters', () => {
      // Given
      let mockToast = {
        message: 'Failed to edit',
        icon: 'close-circle-outline',
        duration: 2000
      }
      spyOn(component.toastController, 'create');

      // When
      component.failedToast();
      
      // Then
      expect(component.toastController.create).toHaveBeenCalledWith(mockToast);
    });
  });

  describe('addedToast', () => {
    it('should call toastController create method with correct parameters', () => {
      // Given
      let mockToast = {
        message: 'Book added',
        icon: 'create-outline',
        duration: 2000
      }
      spyOn(component.toastController, 'create');

      // When
      component.addedToast();
      
      // Then
      expect(component.toastController.create).toHaveBeenCalledWith(mockToast);
    });
  });
});
