import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native (default)
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {
  @Input('serverElem') element : {type : string, name : string, content : string}

  constructor() { 
    console.log("Constructor called");
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges called", changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
    
  }

  ngAfterViewInit(): void {
    throw new Error('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    throw new Error('ngAfterViewChecked called');
  }

}
