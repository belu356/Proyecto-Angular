import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PortadaComponent } from './portada/portada.component';
import { NosotrosComponent } from './nosotros/nosotros.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortadaComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
