import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Output() crear: EventEmitter<any> = new EventEmitter();
  @Output() detail: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('en user');
  }
  crearUsuario() {
    this.crear.emit();
  }

}
