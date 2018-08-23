import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollAdminComponent } from './enroll-admin.component';

describe('EnrollAdminComponent', () => {
  let component: EnrollAdminComponent;
  let fixture: ComponentFixture<EnrollAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
