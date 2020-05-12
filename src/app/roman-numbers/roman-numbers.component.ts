import { Component, OnInit } from '@angular/core';
import {RomanNumbersService} from '../services/roman-numbers.service'

@Component({
  selector: 'app-roman-numbers',
  templateUrl: './roman-numbers.component.html',
  styleUrls: ['./roman-numbers.component.scss']
})
export class RomanNumbersComponent implements OnInit {

  number: any ={}
  constructor(private romanNumbersService: RomanNumbersService) { }


  ngOnInit(): void {
  }

  transformNumber() {
    if(parseInt(this.number.arabic)){
      this.number.roman = this.romanNumbersService.transformToRomanNumber(parseInt(this.number.arabic))
    } else {
      this.number.roman = ""
    }
  }

}
