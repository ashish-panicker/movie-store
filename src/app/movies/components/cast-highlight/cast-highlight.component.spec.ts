import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastHighlightComponent } from './cast-highlight.component';

describe('CastHighlightComponent', () => {
  let component: CastHighlightComponent;
  let fixture: ComponentFixture<CastHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
