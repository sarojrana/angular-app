import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UnitService } from '../unit.service';
import { Unit } from '../Unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  units: Unit[];
  filteredUnits: Unit[];
  unitIndex: number;
  searchText: String;

  constructor(
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.getUnitList();
  }

  /**
   * get all units
   */
  getUnitList() {
    this.units = this.filteredUnits = this.unitService.getAllUnit();
  }

  /**
   * opens delete confirm dialog
   * @param index
   */
  requestUnitDeletion(index: number) {  
    this.unitIndex = index;
  }

  /**
   * confirms unit deletion
   */
  confirmUnitDelete() {
    this.unitService.deleteUnit(this.unitIndex);
    this.unitIndex = null;
    this.getUnitList();
  }

  /**
   * search units by unit code
   */
  searchByUnitCode(searchText: String = ''){
    this.filteredUnits = this.units.filter((unit) => unit.unitCode.toLowerCase().includes(searchText.toLowerCase()));
  }

}
