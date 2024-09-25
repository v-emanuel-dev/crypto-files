import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-upload-encrypt',
  templateUrl: './upload-encrypt.component.html',
  styleUrls: ['./upload-encrypt.component.css']
})
export class UploadEncryptComponent {
  secretKey = 'U2FsdGVkX184CT3NH8y5VkzqN+0EOxL4s1AIfR7eRiM=';
  downloadMessage: string | null = null; // Para feedback de download

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement; // Verificação de tipo
    if (input.files && input.files.length > 0) { // Verifica se files não é null e se contém arquivos
      const file = input.files[0]; // Acessa o primeiro arquivo
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result as string; // Lê o conteúdo do arquivo
        const encryptedContent = this.encryptContent(fileContent);
        this.downloadEncryptedFile(encryptedContent, file.name);
        this.downloadMessage = 'Arquivo encriptado foi gerado e está pronto para download!';
      };

      reader.readAsText(file);
    }
  }

  encryptContent(content: string): string {
    // Utiliza CryptoJS para encriptar o conteúdo
    return CryptoJS.AES.encrypt(content, this.secretKey).toString();
  }

  downloadEncryptedFile(encryptedContent: string, fileName: string) {
    const blob = new Blob([encryptedContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${fileName}-encrypted.txt`; // O arquivo encriptado
    link.click();
  }
}
