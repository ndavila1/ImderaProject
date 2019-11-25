import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error403-forbidden',
  templateUrl: './error403-forbidden.component.html',
  styleUrls: ['./error403-forbidden.component.css']
})
export class Error403ForbiddenComponent implements OnInit {

  constructor() { }

  url = 'http://localhost:4200/forbidden';

  ngOnInit() {
  }

}
