import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MakeupComponent } from './makeup/makeup.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { MyspaceComponent } from './myspace/myspace.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    MakeupComponent,
    SkincareComponent,
    HaircareComponent,
    MyspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
