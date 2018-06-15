import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConnectionFormComponent } from './edit-connection-form.component';

describe('EditConnectionFormComponent', () => {
  let component: EditConnectionFormComponent;
  let fixture: ComponentFixture<EditConnectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConnectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
