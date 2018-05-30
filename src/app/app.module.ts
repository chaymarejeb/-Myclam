import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategorieService } from './categorie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HowworksComponent } from './howworks/howworks.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'material.module';
import { ListComponent } from './list/list.component';
import { CapitalComponent } from './capital/capital.component';
import { ServiceComponent } from './service/service.component';
import { HttpModule } from '@angular/http';
import { FootrComponent } from './footr/footr.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HowworksComponent,
    BeautyComponent,
    FooterComponent,
    ListComponent,
    CapitalComponent,
    ServiceComponent,
    FootrComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule
  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
