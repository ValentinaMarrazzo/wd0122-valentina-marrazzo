import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInactiveComponent } from './page-inactive.component';

describe('PageInactiveComponent', () => {
  let component: PageInactiveComponent;
  let fixture: ComponentFixture<PageInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
