import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCDesktopComponent } from './rcdesktop.component';

describe('RCDesktopComponent', () => {
  let component: RCDesktopComponent;
  let fixture: ComponentFixture<RCDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RCDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RCDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
