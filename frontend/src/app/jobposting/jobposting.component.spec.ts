import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostingComponent } from './jobposting.component';

describe('JobpostingComponent', () => {
  let component: JobpostingComponent;
  let fixture: ComponentFixture<JobpostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
