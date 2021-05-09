import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShoeselectorComponent } from './components/shoeselector/shoeselector.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
  apiKey: "AIzaSyALavRPl7_qsB8P5YGhuoU3WQKX4ppNFwo",
  authDomain: "clothing-447ee.firebaseapp.com",
  projectId: "clothing-447ee",
  storageBucket: "clothing-447ee.appspot.com",
  messagingSenderId: "389395209541",
  appId: "1:389395209541:web:c9d5cd5bca31f60262322c",
  measurementId: "G-SZWV1DT25S"
};

@NgModule({
  declarations: [
    AppComponent,
    ShoeselectorComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     // 3. Initialize
     AngularFireModule.initializeApp(config),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
