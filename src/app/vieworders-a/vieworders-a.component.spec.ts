import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewordersAComponent } from './vieworders-a.component';

describe('ViewordersAComponent', () => {
  let component: ViewordersAComponent;
  let fixture: ComponentFixture<ViewordersAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewordersAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewordersAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
