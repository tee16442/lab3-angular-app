import { Component, OnInit,
  Input, Output, EventEmitter, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy { 

  @Input() parentData: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData: number;

  constructor() { }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit Work!');
  }
  ngOnChanges() {
    console.log('ngOnChanges Work!');
  }
  ngDoCheck() {
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Work!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Work!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Work!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Work!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Work!');
  }

  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData)
  }
}
