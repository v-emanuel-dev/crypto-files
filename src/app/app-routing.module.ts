import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadEncryptComponent } from './upload-encrypt/upload-encrypt.component';
import { UploadDecryptComponent } from './upload-decrypt/upload-decrypt.component';

const routes: Routes = [
  { path: 'encrypt', component: UploadEncryptComponent },
  { path: 'decrypt', component: UploadDecryptComponent },
  { path: '', redirectTo: '/encrypt', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
