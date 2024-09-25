import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-upload-decrypt',
  templateUrl: './upload-decrypt.component.html',
  styleUrls: ['./upload-decrypt.component.css']
})
export class UploadDecryptComponent {
  secretKey = 'U2FsdGVkX184CT3NH8y5VkzqN+0EOxL4s1AIfR7eRiM=';
  downloadMessage: string | null = null; // Para feedback de download

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement; // Verificação de tipo
    if (input.files) { // Verifica se files não é null
      const file = input.files[0]; // Acessa o primeiro arquivo
      const reader = new FileReader();

      reader.onload = () => {
        const encryptedContent = reader.result as string;
        try {
          const bytes = CryptoJS.AES.decrypt(encryptedContent, this.secretKey);
          const decryptedContent = bytes.toString(CryptoJS.enc.Utf8);
          this.downloadDecryptedFile(decryptedContent, file.name);
          this.downloadMessage = 'Arquivo decriptado foi gerado e está pronto para download!';
        } catch (e) {
          console.error('Erro ao decriptar o arquivo.');
          this.downloadMessage = 'Erro ao decriptar o arquivo.';
        }
      };

      reader.readAsText(file);
    }
  }

  downloadDecryptedFile(decryptedContent: string, fileName: string) {
    const blob = new Blob([decryptedContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${fileName}-decrypted.txt`;
    link.click();
  }
}
