import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryLookupComponent } from './accessory-lookup.component';

describe('AccessoryLookupComponent', () => {
  let component: AccessoryLookupComponent;
  let fixture: ComponentFixture<AccessoryLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoryLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
