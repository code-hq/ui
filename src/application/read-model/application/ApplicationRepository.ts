import ApplicationLeaderboardItem from './ApplicationLeaderboardItem';

export default class ApplicationRepository
{
   getLeaderboardList(): ApplicationLeaderboardItem[]
   {
       return [
           new ApplicationLeaderboardItem('code-hq', 'CodeHQ', '46%', 8427, 85.63, 2),
           new ApplicationLeaderboardItem('note-maker', 'Note Maker', '98%', 100, 82.6, 0),
           new ApplicationLeaderboardItem('awesome-app', 'Awesome App', '10%', 90000, 10.2, -2),
       ]
   }
}
