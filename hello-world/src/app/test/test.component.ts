import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h1>
              Welcome {{name}}
            </h1>
           <input [(ngModel)]="name" type="text">
           {{name}}
            `,
  styles: [`
  div{
    color: red
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "";
  
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greeetUSer(){
    return "Hello" + this.name;
  }
  onClick(event)
  {
    console.log(event)
  }
}
