import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMsgComponent } from './start-msg.component';

describe('StartMsgComponent', () => {
  let component: StartMsgComponent;
  let fixture: ComponentFixture<StartMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
