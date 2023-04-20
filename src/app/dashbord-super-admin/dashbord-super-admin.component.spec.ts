import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordSuperAdminComponent } from './dashbord-super-admin.component';

describe('DashbordSuperAdminComponent', () => {
  let component: DashbordSuperAdminComponent;
  let fixture: ComponentFixture<DashbordSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
