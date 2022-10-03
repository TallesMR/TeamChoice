import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarCarreiraComponent } from './selecionar-carreira.component';

describe('SelecionarCarreiraComponent', () => {
  let component: SelecionarCarreiraComponent;
  let fixture: ComponentFixture<SelecionarCarreiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarCarreiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarCarreiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
