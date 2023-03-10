import { Friendslist } from './Friendlist/Friendlist';
import friends from '../data/friends.json';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistic } from './Statistic/Statistic';
import data from '../data/data.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    // finall;)
    //   color: '#010101',}}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Friendslist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
