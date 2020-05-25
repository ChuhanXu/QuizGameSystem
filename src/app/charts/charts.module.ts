import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from './charts.routing';
import { IdLeaderboardComponent } from './id.leaderboard';
import { TopicLeaderboardComponent } from './topic.leaderboard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ChartsRoutes),
        FormsModule
    ],
    declarations: [
        ChartsComponent,
        IdLeaderboardComponent,
        TopicLeaderboardComponent
    ]
})

export class ChartsModule {}
