import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public counter: number = 0
  public writeText: string = ''
  public darkTheme: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  youClicked(){
    this.counter += 1
  }

}
