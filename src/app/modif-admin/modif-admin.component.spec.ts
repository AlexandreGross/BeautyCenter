import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdminComponent } from './modif-admin.component';

describe('ModifAdminComponent', () => {
  let component: ModifAdminComponent;
  let fixture: ComponentFixture<ModifAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
