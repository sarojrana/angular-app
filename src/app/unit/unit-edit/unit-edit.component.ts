import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitService } from '../unit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  index: number;
  unitForm: FormGroup;
  isSubmitted: boolean = false;
  message: String = '';
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private unitService: UnitService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeUnitForm();
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id'];
      this.setValueToForm();
    });
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
   * sets value to form fields 
   * @param index 
   */
  setValueToForm() {
    const unit = this.unitService.getSpecificUnit(this.index);
    if(unit) {
      this.form['unitCode'].setValue(unit.unitCode);
      this.form['unitName'].setValue(unit.unitName);
      this.form['session'].setValue(unit.session);
      this.form['level'].setValue(unit.level);
      this.form['enrolment'].setValue(unit.enrolment);
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * add unit to db
   */
  updateUnit() {
    this.isSubmitted = true;
    if(this.unitForm.invalid) {
      return;
    }
    this.unitService.updateUnit(this.index, this.unitForm.value);
    this.message = 'unit updated successfully';
    this.isSubmitted = false;
  }
}
