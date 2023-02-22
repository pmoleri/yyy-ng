import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemsLandingComponent } from './design-systems-landing/design-systems-landing.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemsLandingComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxAvatarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
