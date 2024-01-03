import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFullExperienceComponent } from './notification-full-experience.component';

describe('NotificationFullExperienceComponent', () => {
  let component: NotificationFullExperienceComponent;
  let fixture: ComponentFixture<NotificationFullExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFullExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationFullExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
