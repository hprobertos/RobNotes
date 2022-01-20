import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { SectionsPage } from './sections.page';

describe('SectionsPage', () => {
  let component: SectionsPage;
  let fixture: ComponentFixture<SectionsPage>;

  const root_path='/tabs/books/sections/';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadSections', () => {
      // Given
      spyOn(component, 'loadSections');

      // When
      component.ngOnInit();
      
      // Then
      expect(component.loadSections).toHaveBeenCalled();
    });
  });

  describe('loadSections', () => {
    it('should include an in-progress section with the correct properties to the sections list', () => {
      // Given
      const name = 'In-Progress';
      const icon = 'eye-outline';
      const path = root_path+'in-progress';

      // When
      component.loadSections();
      
      // Then
      expect(sectionsContainsSectionName(component.sections, name)).toBeTrue();
      expect(sectionsContainsSectionIcon(component.sections, icon)).toBeTrue();
      expect(sectionsContainsSectionPath(component.sections, path)).toBeTrue();
    });

    it('should include an stand-by section with the correct properties to the sections list', () => {
      // Given
      const name = 'Stand-By';
      const icon = 'pause-circle-outline';
      const path = root_path+'stand-by';

      // When
      component.loadSections();
      
      // Then
      expect(sectionsContainsSectionName(component.sections, name)).toBeTrue();
      expect(sectionsContainsSectionIcon(component.sections, icon)).toBeTrue();
      expect(sectionsContainsSectionPath(component.sections, path)).toBeTrue();
    });

    it('should include a backlog section with the correct properties to the sections list', () => {
      // Given
      const name = 'Backlog';
      const icon = 'library-outline';
      const path = root_path+'backlog';

      // When
      component.loadSections();
      
      // Then
      expect(sectionsContainsSectionName(component.sections, name)).toBeTrue();
      expect(sectionsContainsSectionIcon(component.sections, icon)).toBeTrue();
      expect(sectionsContainsSectionPath(component.sections, path)).toBeTrue();
    });

    it('should include a waiting section with the correct properties to the sections list', () => {
      // Given
      const name = 'Waiting';
      const icon = 'calendar-outline';
      const path = root_path+'waiting';

      // When
      component.loadSections();
      
      // Then
      expect(sectionsContainsSectionName(component.sections, name)).toBeTrue();
      expect(sectionsContainsSectionIcon(component.sections, icon)).toBeTrue();
      expect(sectionsContainsSectionPath(component.sections, path)).toBeTrue();
    });

    it('should include a finished section with the correct properties to the sections list', () => {
      // Given
      const name = 'Finished';
      const icon = 'star-outline';
      const path = root_path+'finished';

      // When
      component.loadSections();
      
      // Then
      expect(sectionsContainsSectionName(component.sections, name)).toBeTrue();
      expect(sectionsContainsSectionIcon(component.sections, icon)).toBeTrue();
      expect(sectionsContainsSectionPath(component.sections, path)).toBeTrue();
    });
  });
});

function sectionsContainsSectionName(sections, name): boolean {
  return sections.filter(section => section.name === name).length > 0;
}

function sectionsContainsSectionIcon(sections, icon): Boolean {
  return sections.filter(section => section.icon === icon).length > 0;
}

function sectionsContainsSectionPath(sections, path): Boolean {
  return sections.filter(section => section.path === path).length > 0;
}
