import { TestBed } from '@angular/core/testing';

import { RomanNumbersService} from './roman-numbers.service';

describe('RomanNumbersService', () => {
  let service: RomanNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe("RomanNumber's core cases", () => {
  let romanService: RomanNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    romanService = TestBed.inject(RomanNumbersService);
  });

  it('Transform the number 1', () => {
    expect(romanService.one()).toEqual('I');
  });

  it('Transform the number 5', () => {
    expect(romanService.five()).toEqual('V');
  });

  it('Transform the number 10', () => {
    expect(romanService.ten()).toEqual('X');
  });

  it('Transform the number 50', () => {
    expect(romanService.fifty()).toEqual('L');
  });

  it('Transform the number 100', () => {
    expect(romanService.oneHundred()).toEqual('C');
  });

  it('Transform the number 500', () => {
    expect(romanService.fiveHundred()).toEqual('D');
  });

  it('Transform the number 1000', () => {
    expect(romanService.oneThousand()).toEqual('M');
  });
});
describe("RomanNumber's important cases", () => {
  let romanService: RomanNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    romanService = TestBed.inject(RomanNumbersService);
  });
  it('Transform the number 4', () => {
    expect(romanService.transformToRomanNumber(4)).toEqual('IV');
  });
  it('Transform the number 9', () => {
    expect(romanService.transformToRomanNumber(9)).toEqual('IX');
  });
  it('Transform the number 49', () => {
    expect(romanService.transformToRomanNumber(49)).toEqual('XLIX');
  });
  it('Transform the number 99', () => {
    expect(romanService.transformToRomanNumber(99)).toEqual('XCIX');
  });
  it('Transform the number 499', () => {
    expect(romanService.transformToRomanNumber(499)).toEqual('CDXCIX');
  });
  it('Transform the number 999', () => {
    expect(romanService.transformToRomanNumber(999)).toEqual('CMXCIX');
  });
  it('Transform the number 1000', () => {
    expect(romanService.transformToRomanNumber(1000)).toEqual('M');
  });
});
describe("RomanNumber's common cases", () => {
  let romanService: RomanNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    romanService = TestBed.inject(RomanNumbersService);
  });
  it('Convert the number 666', () => {
    expect(romanService.transformToRomanNumber(666)).toEqual('DCLXVI');
  });
  it('Convert the number 69', () => {
    expect(romanService.transformToRomanNumber(69)).toEqual('LXIX');
  });
  it('Convert the number 101', () => {
    expect(romanService.transformToRomanNumber(101)).toEqual('CI');
  });
  it('Convert the number 63', () => {
    expect(romanService.transformToRomanNumber(63)).toEqual('LXIII');
  });
  it('Convert the number 13', () => {
    expect(romanService.transformToRomanNumber(13)).toEqual('XIII');
  });
  it('Convert the number 545', () => {
    expect(romanService.transformToRomanNumber(545)).toEqual('DXLV');
  });
  it('Convert the number 21', () => {
    expect(romanService.transformToRomanNumber(21)).toEqual('XXI');
  });
});
