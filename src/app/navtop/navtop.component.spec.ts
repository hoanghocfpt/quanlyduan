import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtopComponent } from './navtop.component';

describe('NavtopComponent', () => {
  let component: NavtopComponent;
  let fixture: ComponentFixture<NavtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
