import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  public brews: any

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getBeer().subscribe(data => {
      this.brews = data
    })
  }

}
