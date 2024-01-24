import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSettingsComponent } from './background-settings.component';

describe('BackgroundSettingsComponent', () => {
  let component: BackgroundSettingsComponent;
  let fixture: ComponentFixture<BackgroundSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
