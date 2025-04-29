import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwvehiclesComponent } from './veiwvehicles.component';

describe('VeiwvehiclesComponent', () => {
  let component: VeiwvehiclesComponent;
  let fixture: ComponentFixture<VeiwvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeiwvehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
