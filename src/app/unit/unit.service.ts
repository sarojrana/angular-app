import { Injectable } from '@angular/core';
import { Unit } from './Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private units: Unit[] = [];

  constructor() { }

  /**
   * get all units
   */
  getAllUnit():Unit[] {
    return this.units;
  }

  /**
   * get specific unit
   * @param index 
   */
  getSpecificUnit(index: number):Unit {
    return this.units[index];
  }

  /**
   * add unit
   * @param data
   */
  addUnit(data: Unit):void {
    this.units.push(data);
  }

  /**
   * update unit
   * @param index
   * @param data
   */
  updateUnit(index: number, data: Unit):void {
    this.units[index] = data;
  }

  /**
   * delete unit
   * @param index 
   */
  deleteUnit(index: number):void{
    this.units.splice(index, 1);
  }
}
