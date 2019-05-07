import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMangersComponent } from './liste-mangers.component';

describe('ListeMangersComponent', () => {
  let component: ListeMangersComponent;
  let fixture: ComponentFixture<ListeMangersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMangersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
