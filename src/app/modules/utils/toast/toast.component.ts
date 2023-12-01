import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  successMessage(title: string, message: string){
    this.messageService.add({severity:'success', summary: title, detail: message});
  }

  infoMessage(title: string, message: string){
    this.messageService.add({severity:'info', summary: title, detail: message});
  }

  warningMessage(title: string, message: string) {
    this.messageService.add({severity:'warn', summary: title, detail: message});
  }

  errorMessage(title: string, message: string) {
    this.messageService.add({severity:'error', summary: title, detail: message});
  }

}
