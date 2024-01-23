import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFullscreenComponent } from './notification-fullscreen.component';

describe('NotificationFullscreenComponent', () => {
  let component: NotificationFullscreenComponent;
  let fixture: ComponentFixture<NotificationFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFullscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
