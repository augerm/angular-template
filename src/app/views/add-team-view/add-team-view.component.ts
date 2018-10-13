import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { DataService } from '../../services/data-service';
import { Team } from '../../models/team';


@Component({
  selector: 'app-add-team-view',
  templateUrl: './add-team-view.component.html',
  styleUrls: ['./add-team-view.component.css']
})
export class AddTeamViewComponent implements OnInit {

  curTeam: number = 1;

  constructor(private router: Router, private util: UtilService, private data: DataService) { }

  ngOnInit() {

  }

  onTeamCreated(team) {
  	if(this.data.getNumTeams() === 0) {
  		this.curTeam++;
  		this.data.addTeam(team);
  		return;
  	}

  	this.data.addTeam(team);
  	this.router.navigate(['/select-video-type']);
  }

}
