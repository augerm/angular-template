import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { DataService } from '../../services/data-service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private util: UtilService, private data: DataService) { }
  sideOptions: Array<string> = ["Left", "Right"];
  chosenSide: string;
  gameId: string;
  locationId: string;

  ngOnInit() {

  }

  continue() {
  	this.data.setGameData(this.locationId, this.gameId, this.chosenSide);
  	this.router.navigate(['add-team-view']);
  }
}
