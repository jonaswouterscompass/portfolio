import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCFooterComponent } from './rcfooter.component';

describe('RCFooterComponent', () => {
  let component: RCFooterComponent;
  let fixture: ComponentFixture<RCFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RCFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RCFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
