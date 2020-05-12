import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }
  one(): string { return 'I' }
  five(): string { return 'V' }
  ten(): string { return 'X' }
  fifty(): string { return 'L' }
  oneHundred(): string { return 'C' }
  fiveHundred(): string { return 'D' }
  oneThousand(): string { return 'M' }

  romanUnits(number: number) {
    switch (number) {
      case 1:
        return this.one()
      case 4:
          // Concat to get the IV
        return this.one() + this.five()
      case 5:
        return this.five()
      case 9:
          // Concat to get the IX
        return this.one() + this.ten()
      default:
          //Default value for other numbers
        return this.romanUnits(number - 1) + this.one()
    }
  }

  romanDozens(number: number) {
    switch (number) {
      case 10:
        return this.ten()
      case 40:
            // Concat to get the XL
        return this.ten() + this.fifty()
      case 50:
        return this.fifty()
      case 90:
          // Concat to get the XC
        return this.ten() + this.oneHundred()
      default:
          //Default value for other numbers
        return this.romanDozens(number - 10) + this.ten()
    }
  }

  romanHundreds(number: number) {
    switch (number) {
      case 100:
        return this.oneHundred()
      case 400:
            // Concat to get the CD
        return this.oneHundred() + this.fiveHundred()
      case 500:
        return this.fiveHundred()
      case 900:
          // Concat to get the CM
        return this.oneHundred() + this.oneThousand()
      default:
          //Default value for other numbers
        return this.romanHundreds(number - 100) + this.oneHundred()
    }

  }

  transformToRomanNumber(number: number): string {
    if (number > 1000) {
      return "Only values between 1 and 1000"
    }
    if (number === 1000) {
      return this.oneThousand()
    }

    let units = number % 10
    let dozen = (number % 100) - (number % 100) % 10
    let hundred = number - (number % 100);
    let romanUnits = ""
    let romanDozens = ""
    let romanHundreds = ""
    if (units !== 0) {
        romanUnits = this.romanUnits(units)
    }
    if (dozen !== 0) {
        romanDozens = this.romanDozens(dozen)
    }
    if (hundred !== 0) {
        romanHundreds = this.romanHundreds(hundred)
    }
    return romanHundreds + romanDozens + romanUnits

  }
}
