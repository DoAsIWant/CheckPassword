import { Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'checkPassword';

  passwordForm: FormGroup ;
  passwordIsValid = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: [''],
    });
  }

}
