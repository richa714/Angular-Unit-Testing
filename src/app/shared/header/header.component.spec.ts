import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// -------------------------------Testing Component methods---------------------------

describe('HeaderComponent', () => {
  // Arrange
  let component: HeaderComponent;
  //  --- create new instance of component every time before each test run
  beforeEach(() => {
    // set up
    component = new HeaderComponent();
  });

  // --- only once before running a test suite
  beforeAll(() => {
  });

  // --- Similarly after for clean up activities

  afterAll(() => {
  });

  afterEach(() => {
    // tear down
  });

  it('should return proper header message', () => {
    // Act
    const result = component.getHeaderMessage('Richa');
    // Assert
    expect(result).toBe('Welcome Richa');
  });
  it('should return proper header message for id', () => {
    // Act
    const result = component.getHeaderUserId();
    // Assert
    expect(result).toBe(21211);
  });

});
