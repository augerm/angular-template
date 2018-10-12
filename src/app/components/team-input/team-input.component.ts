import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '../../models/player';
import { Team } from '../../models/team';

const PLAYERS: Player[] = [
  new Player('Michael Auger', 8, "Red", "Blue")
];

@Component({
  selector: 'app-team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.css']
})
export class TeamInputComponent implements OnInit {
  @Input()
  curTeam: number;
  
  @Output() 
  teamCreated: EventEmitter<Team> = new EventEmitter<Team>();

  displayedColumns: string[] = ['name', 'number', 'shirtColor', 'shortsColor'];
	dataSource = new MatTableDataSource<Player>();

  constructor(private util: UtilService) { }

  ngOnInit() {
		this.dataSource.data = [
			new Player()
		];
  }

  addPlayer() {
  	this.dataSource.data = this.dataSource.data.concat(new Player());
  }

  submitTeam() {
    const team = new Team(this.dataSource.data);
    this.teamCreated.emit(team);
    this.dataSource = new MatTableDataSource<Player>();
    this.dataSource.data = [new Player()];
  }

}
