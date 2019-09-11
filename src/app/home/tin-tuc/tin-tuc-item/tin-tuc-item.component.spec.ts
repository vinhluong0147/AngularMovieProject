import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucItemComponent } from './tin-tuc-item.component';

describe('TinTucItemComponent', () => {
  let component: TinTucItemComponent;
  let fixture: ComponentFixture<TinTucItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
