import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  unitForm: FormGroup;
  isSubmitted: boolean = false;
  message: String = '';
  
  constructor(
    private fb: FormBuilder,
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.initializeUnitForm();
  }

  /**
   * initializes form
   */
  initializeUnitForm() {
    this.unitForm = this.fb.group({
      unitCode: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3}[0-9]{5}$')]],
      unitName: ['', Validators.required],
      session: ['', Validators.required],
      level: ['', Validators.required],
      enrolment: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]]
    });
  }

  get form() { return this.unitForm.controls; }

  /**
   * add unit to db
   */
  addUnit() {
    this.isSubmitted = true;
    if(this.unitForm.invalid) {
      return;
    }
    this.unitService.addUnit(this.unitForm.value);
    this.message = 'unit added successfully';
    this.unitForm.reset();
    this.isSubmitted = false;
  }

}
