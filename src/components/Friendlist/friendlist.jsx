import PropTypes from 'prop-types';

export const Friendslist = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(({ id, name, isOnline, avatar }) => {
          return (
            <li class="item" key={id}>
              <span class="status">{isOnline}</span>
              <img class="avatar" src={avatar} alt="User avatar" width="48" />
              <p class="name">{name}</p>
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
