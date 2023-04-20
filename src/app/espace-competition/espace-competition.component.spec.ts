import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCompetitionComponent } from './espace-competition.component';

describe('EspaceCompetitionComponent', () => {
  let component: EspaceCompetitionComponent;
  let fixture: ComponentFixture<EspaceCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
