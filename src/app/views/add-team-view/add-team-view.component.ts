import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { TeamDataService } from '../../services/team-data.service';
import { Team } from '../../models/team';


@Component({
  selector: 'app-add-team-view',
  templateUrl: './add-team-view.component.html',
  styleUrls: ['./add-team-view.component.css']
})
export class AddTeamViewComponent implements OnInit {

  curTeam: number = 1;

  constructor(private router: Router, private util: UtilService, private teamData: TeamDataService) { }

  ngOnInit() {

  }

  onTeamCreated(team) {
  	if(this.teamData.getNumTeams() === 0) {
  		this.curTeam++;
  		this.teamData.addTeam(team);
  		return;
  	}

  	this.teamData.addTeam(team);
  	this.router.navigate(['/select-video-type']);
  }

}
