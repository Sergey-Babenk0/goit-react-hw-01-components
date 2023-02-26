import { Friendslist } from './Friendlist/friendlist';
import friends from '../data/friends.json';
import { Profile } from './Profile/profile';
import user from '../data/user.json';
import { Statistic } from './Statistic/statistic';
import data from '../data/data.json';
import { TransactionHistory } from './TransactionHistory/transactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
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
