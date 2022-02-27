import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
  pollForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.pollForm = fb.group({
      questions: this.fb.control('',[Validators.required]),
      image: this.fb.control(''),
      op1: this.fb.control(''),
      op2: this.fb.control(''),
      op3: this.fb.control(''),
    })
  }

  submitForm(){
    console.log(this.pollForm.value)
  }

  ngOnInit(): void {
  }

}
