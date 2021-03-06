import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PortadaComponent } from './portada/portada.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PostComponent } from './post/post.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { FooterComponent } from './footer/footer.component';
import { PersonajePostComponent } from './personaje-post/personaje-post.component'; 
import {PostService} from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortadaComponent,
    NosotrosComponent,
    PostComponent,
    ContactoComponent,
    PersonajeComponent,
    FooterComponent,
    PersonajePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
