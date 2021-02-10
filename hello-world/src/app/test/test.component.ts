import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h1>
              Welcome {{name}}
            </h1>
            <input type="text" value="arafat">
            <input [id]="myId" type="text" value="arafat">
            <input [disabled]="isDisabled" [id]="myId" type="text" value="arafat">
            
            `,
  styles: [`
  div{
    color: red
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Arafat1";
  public myId="testId";
  public isDisabled=false;
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greeetUSer(){
    return "Hello" + this.name;
  }
}
