import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { ActivityService } from '../../../shared/Services/Activity/activity.service';
import { sortOptions } from '../../../core/common/constants';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  activity: any[];
  rows = 5;
  showLoader = false;
  isDisabled = false;
  details: any;
  sortOptions: SelectItem[];
  @Output() crearUsuario: EventEmitter<any> = new EventEmitter();
  @Output() detailUser: EventEmitter<any> = new EventEmitter();

  constructor
    (private ActivityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.sortOptions = [...sortOptions];
    this.getAll();
  }

  Crear() {
    this.crearUsuario.emit();
  }
  async getAll() {
    (await this.ActivityService.List()).subscribe({
      next: data => {
        this.activity = data;
      },
      error(e) {
        this.helpers.checkPermission(this.messageService, e);
      }
    })
  }
  // confirmAction(id, name, isDisabled) {
  //   this.active(id, !isDisabled);
  // }

  //  async active(id: number, activation: boolean) {
  //  try {
  //  let alert = this.activity.find(x => x.run_usuario == id)
  //if (alert) {
  //alert.isdelete = 1
  // ; (await this.UserServiceService.UserDisable(alert)).subscribe({
  //  next: () => {
  //   this.ngOnInit()
  // }
  // });
  //  }
  //} catch (error) {
  // }
  // }
  onSortChange(event) {
    this.rows = event.value;
  }

  async seeEditar(id) {
    this.details = this.activity.filter(x => x.run_usuario == id);
    this.detailUser.emit(this.details[0]);
  }
}

