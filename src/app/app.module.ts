import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadEncryptComponent } from './upload-encrypt/upload-encrypt.component';
import { UploadDecryptComponent } from './upload-decrypt/upload-decrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadEncryptComponent,
    UploadDecryptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
