import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export const Friendslist = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendlist}>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <li className={css.item} key={id}>
              <span className={`${css.status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="64"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Friendslist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
