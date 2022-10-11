import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatistaComponent } from './estatista.component';

describe('EstatistaComponent', () => {
  let component: EstatistaComponent;
  let fixture: ComponentFixture<EstatistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
