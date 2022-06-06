import { Component, Input, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: '.app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } //metodo che viene lanciato in fase di inizializzazione del componente. E' possibile utilizzarlo dal momento che è stato implementato OnInit

   @Input() user!:User

}
