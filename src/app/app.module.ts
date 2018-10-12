import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component'
import { UploadVideoViewComponent } from './views/upload-video-view/upload-video-view.component';
import { StreamVideoViewComponent } from './views/stream-video-view/stream-video-view.component';
import { SelectVideoTypeViewComponent } from './views/select-video-type-view/select-video-type-view.component';
import { TeamInputComponent } from './components/team-input/team-input.component';
import { AddTeamViewComponent } from './views/add-team-view/add-team-view.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-team-view', component: AddTeamViewComponent },
  { path: 'upload-video', component: UploadVideoViewComponent },
  { path: 'stream-video', component: StreamVideoViewComponent },
  { path: 'select-video-type', component: SelectVideoTypeViewComponent },
  { path: '**', component: HomeComponent } // default traffic to homepage
];

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadVideoViewComponent, 
    StreamVideoViewComponent, 
    SelectVideoTypeViewComponent,
    AddTeamViewComponent,
    TeamInputComponent
  ],
  imports: [
  	RouterModule.forRoot(
  		appRoutes
  	),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
