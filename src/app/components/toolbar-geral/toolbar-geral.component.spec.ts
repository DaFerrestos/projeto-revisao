import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarGeralComponent } from './toolbar-geral.component';

describe('ToolbarGeralComponent', () => {
  let component: ToolbarGeralComponent;
  let fixture: ComponentFixture<ToolbarGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
