import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatssapComponent } from './whatssap.component';

describe('WhatssapComponent', () => {
  let component: WhatssapComponent;
  let fixture: ComponentFixture<WhatssapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatssapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatssapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
