import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { barComponent } from './shared/menubar/bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebaritemComponent } from './shared/sidebar/sidebaritems/sidebaritem.component';
import { TestComponent } from './shared/test/test.component';
import { ScrollerModule } from 'primeng/scroller';

import {ScrollTopModule} from 'primeng/scrolltop';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
    declarations: [
        AppComponent,
        barComponent,
        SidebarComponent,
        SidebaritemComponent,
        TestComponent
    ],
    imports: [
      CommonModule,
      ToolbarModule,
      ScrollerModule,
      ScrollTopModule,
      MegaMenuModule,
      ScrollPanelModule,
      SidebarModule,
      AppRoutingModule,
      ButtonModule,
      StyleClassModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MenuModule,
      SharedModule,
      RouterModule,
      BrowserModule,
      HttpClientModule,
      MenubarModule,
      BadgeModule,
      AvatarModule,
      InputTextModule,
      RippleModule
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }