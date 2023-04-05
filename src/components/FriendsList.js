import React from "react";
import styles from './FriendsList.module.scss';
import PropTypes from 'prop-types';


const FriendsList = ({ friend })=>{
  return (
    <ul className={styles.friendList}>
      {friend.map(item=>{
        const {avatar, name, isOnline, id} = item
        return <li key={id} className={styles.friendList__item}>
          {isOnline ?(
            <span className={`${styles.friendList__indicator} ${styles.friendList__isOnline}`} ></span>
          ):(
              <span className={`${styles.friendList__indicator} ${styles.friendList__isOffline}`} ></span>
          )}
          
          <img className={styles.friendList__avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.friendList__name}>{name}</p>
        </li>
      })}
    </ul>
  )
}
FriendsList.defaultProps = {
  friend:[{
    avatar:"https://loremflickr.com/g/320/240/girl/all",
    name: "Username",
    isOnline: false,
    id: 2340423
  }]
};
FriendsList.propTypes= {
  friend: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
}
export default FriendsList