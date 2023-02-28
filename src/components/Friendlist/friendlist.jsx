import PropTypes from 'prop-types';
import css from './friendlist.module.css';

export const Friendslist = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendlist}>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <li className="item" key={id}>
              <span className={`${css.status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
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
