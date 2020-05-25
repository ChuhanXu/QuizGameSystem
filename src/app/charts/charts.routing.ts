import { Routes } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { IdLeaderboardComponent } from './id.leaderboard';
import { TopicLeaderboardComponent } from './topic.leaderboard';

export const ChartsRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ChartsComponent
    }, {
        path: 'id',
        component: IdLeaderboardComponent
    }, {
        path: 'topic',
        component: TopicLeaderboardComponent
    }]
}];
