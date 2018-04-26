import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameWizardComponent } from './new-game-wizard.component';

describe('NewGameWizardComponent', () => {
  let component: NewGameWizardComponent;
  let fixture: ComponentFixture<NewGameWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGameWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
