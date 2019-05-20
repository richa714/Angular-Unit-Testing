import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have About Us as content', () => {

    debugElement=fixture.debugElement.query(By.css('div'));
    console.log(debugElement.nativeElement);
    //console.log(debugElement.childNodes);
    //console.log(debugElement.children);
    
   htmlElement= debugElement.nativeElement;
   //console.log(htmlElement.textContent);
   
       expect(htmlElement.textContent).toContain("Contact Us");
  });


});
