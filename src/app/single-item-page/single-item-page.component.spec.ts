import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemPageComponent } from './single-item-page.component';

describe('SingleItemPageComponent', () => {
  let component: SingleItemPageComponent;
  let fixture: ComponentFixture<SingleItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
