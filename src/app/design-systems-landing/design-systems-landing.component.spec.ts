import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { DesignSystemsLandingComponent } from './design-systems-landing.component';

describe('DesignSystemsLandingComponent', () => {
  let component: DesignSystemsLandingComponent;
  let fixture: ComponentFixture<DesignSystemsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSystemsLandingComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSystemsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
