export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {items.map(item => {
          return (
            <tbody>
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
