import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'forms-driver',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public formDriver: FormGroup;

  constructor(private formBuilder: FormBuilder) {
      this.formDriver = this.formBuilder.group({

      });
   }

  ngOnInit(): void {
    this.formDriver = this.formBuilder.group({
      
    });
  }

}
