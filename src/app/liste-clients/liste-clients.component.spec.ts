import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientsComponent } from './liste-clients.component';

describe('ListeClientsComponent', () => {
  let component: ListeClientsComponent;
  let fixture: ComponentFixture<ListeClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
