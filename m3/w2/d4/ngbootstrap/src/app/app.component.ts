import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngbootstrap';

  constructor(private modalService:NgbModal) { }


  open(){
    const riferimentoModal = this.modalService.open(LoginModalComponent)

    riferimentoModal.title = 'Accedi'
 }
}
