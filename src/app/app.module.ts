import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// added imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreweryComponent } from './brewery/brewery.component';
import { ExtraComponent } from './extra/extra.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// imports for angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './materials/brewery-material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreweryComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
