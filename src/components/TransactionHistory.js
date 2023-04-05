import React from "react";
import styles from './Transaction.module.scss';
import PropTypes from 'prop-types';


const TransactionHistory = ({ transitions })=>{
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionHistory__header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transactionHistory__body}>
        {transitions.map(item=>{
          const {id, type, amount, currency} = item
          return(
            <tr key={id} className={styles.transactionHistory__row}>
              <td>
                {type}
              </td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
TransactionHistory.defaultProps = {
  friend:[{
    id: "0000-0000-0000-0000",
    type: "-",
    amount: "-",
    currency: "-"
  }]
};
TransactionHistory.propTypes= {
  transitions: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
}
export default TransactionHistory