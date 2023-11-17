import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { UserServiceService } from '../../../shared/Services/Usuarios/user-service.service';
import { Dropdown } from 'primeng/dropdown';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  @Output() backTable: EventEmitter<any> = new EventEmitter();
  @Output() modificar: EventEmitter<any> = new EventEmitter();
  @Input() isEdit: boolean;
  @Input() idUser: any;
  details:any;
  form: FormGroup;

  constructor(private formbuilder: FormBuilder,private UserServiceService: UserServiceService) {
    this.form = this.formbuilder.group({
      nom_empresa: [null, [Validators.required]],
      rut: [0, [Validators.required]],
      fechaCreacion: [null, [Validators.required]],
      fechaFinContrato: [null, [Validators.required]],
      //compania:[null,],
      //funcion: [null, [Validators.required]],
      //nacionalidad: [null, [Validators.required]],
      //correo: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.details = this.idUser;
  }

}
