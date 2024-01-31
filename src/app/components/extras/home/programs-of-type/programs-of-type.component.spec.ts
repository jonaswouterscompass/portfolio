import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsOfTypeComponent } from './programs-of-type.component';

describe('ProgramsOfTypeComponent', () => {
  let component: ProgramsOfTypeComponent;
  let fixture: ComponentFixture<ProgramsOfTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsOfTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramsOfTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
