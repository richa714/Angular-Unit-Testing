import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ViewCartDetailsComponent } from './view-cart-details.component';

import { CartService } from '../cart.service';
import { compute, greet, getCurrencies } from './view-cart-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Item } from './Item.model';

// describe('ViewCartDetailsComponent', () => {
//   let component: ViewCartDetailsComponent;
//   let fixture: ComponentFixture<ViewCartDetailsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ViewCartDetailsComponent]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewCartDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// ------------------------- Very Basic Testing------------------------------

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-2);
    expect(result).toBe(0);
  });
  it('should increment by 1 if input is positive', () => {
    const result = compute(100);
    expect(result).toBe(101);
  });
});
describe('greet', () => {
  it('should add Welcome to input', () => {
    const result = greet('Richa');
    expect(result).toContain('Richa');
  });
});
describe('getCurrencies', () => {
  it('should check for particular currency', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('INR');
  });
});

// ---- testing component functions by mocking Http Client-------

describe('ViewCartDetailsComponent', () => {

  let httpTestingController: HttpTestingController;
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports: [HttpClientTestingModule]
    });
    // injecting service and test controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CartService);
  });
  afterEach(() => {

    httpTestingController.verify();
  });

  it('returned Observable should match right data', () => {

    const mockItems = [{ 'id': '1', 'name': 'HDD', 'price': 2300, 'model': 'Sony 7643' },
    { 'id': '2', 'name': 'Laptop', 'price': 2300785, 'model': 'Sony 7643' }];
    service.getItems().subscribe(items => {
      expect(items[0].name).toEqual('HDD');
    });
    const req = httpTestingController.expectOne('assets/cartItems.json');
    req.flush(mockItems);
  });
});
