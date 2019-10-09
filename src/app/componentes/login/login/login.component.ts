import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgProfile: string;
  imgBody: string;
  login: FormGroup;
  regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
  createFormGroup() {
    return new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
      password: new FormControl('', Validators.required)
    });
  }

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: LoginService) {
    this.imgProfile = './../../../assets/imgs/studentLogin.jpg';
    this.imgBody = './../../../assets/imgs/wallpaperSchool.jpg';
    this.login = this.createFormGroup();
  }

  onLogin(): void {

    if (this.login.valid) {
      this.authService.loginUser(this.login.value.mail, this.login.value.password)
        .then((res) => {
          this.onLoginRedirect();
        }).catch(err =>
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'El datos ingresados son incorrectos',
            showConfirmButton: false,
            timer: 10000
          })
        );    
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Pro favor valide bien los campos o ingrese un correo valido',
        showConfirmButton: false,
        timer: 3500
      })
    }

  }

  onLoginRedirect(): void {
    this.router.navigate(['eventos']);
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}