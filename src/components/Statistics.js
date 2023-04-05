import React from "react";
import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ dataStat, title })=>{
  return(
    <div className={styles.statistics}>
        <div className={styles.statistics__title}>
        {title}
        </div>
      <ul className={styles.statistics__list}>
        {dataStat.map(item=>{
        const { id, label, percentage} = item
          return <li className={styles.statistics__item} key={id} id={id} >
              <p className={styles.statistics__label}>{label}</p>
            <p className={styles.statistics__percentage}>{percentage}</p>
          </li>
      })}
        
      </ul>
     
    </div>
  )
}
Statistics.defaultProps = {
  dataStat: [{ "id": "id-1", "label": ".mp3", "percentage": 100 }],
  title:
    'Statistics Title',

};
Statistics.propTypes = {
  dataStat: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
export default Statistics