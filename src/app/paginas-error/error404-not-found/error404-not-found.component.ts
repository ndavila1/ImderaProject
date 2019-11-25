import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404-not-found',
  templateUrl: './error404-not-found.component.html',
  styleUrls: ['./error404-not-found.component.css']
})
export class Error404NotFoundComponent implements OnInit {

  constructor() { }

  url = 'http://localhost:4200/not_found';

  ngOnInit() {
  }

}
