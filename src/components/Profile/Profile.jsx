import PropTypes, { shape } from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.userinfo}>{tag}</p>
        <p className={css.userinfo}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsitem}>
          <span className={css.statslabel}>Followers</span>
          <span className={css.statsquantity}>{stats.followers}</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.statslabel}>Views</span>
          <span className={css.statsquantity}>{stats.views}</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.statslabel}>Likes</span>
          <span className={css.statsquantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
