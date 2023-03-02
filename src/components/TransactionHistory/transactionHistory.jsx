import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transaction_history}>
        <thead>
          <tr className={css.transaction_history__row}>
            <th className={css.transaction_history__cell}>Type</th>
            <th className={css.transaction_history__cell}>Amount</th>
            <th className={css.transaction_history__cell}>Currency</th>
          </tr>
        </thead>

        {items.map(({ id, type, amount, currency }) => {
          return (
            <tbody key={id}>
              <tr className={css.transaction_history__row}>
                <td className={css.transaction_history__cell}>{type}</td>
                <td className={css.transaction_history__cell}>{amount}</td>
                <td className={css.transaction_history__cell}>{currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
