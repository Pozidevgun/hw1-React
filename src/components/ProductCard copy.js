import React from "react";
import styles from './ProductCard.module.scss';
import PropTypes from 'prop-types';


const ProductCard = ({ avatar, username, tag, location, followers, views, likes })=>{
  return (
    
    <div className={styles.productCard}>
      <div className={styles.productCard__info}>
        <img src={avatar} alt="card_image" className={styles.productCard__img} />
        <h2 className={styles.productCard__username}> {username}</h2>
        <p className={styles.productCard__link} >@{tag}</p>
        <p className={styles.productCard__location}>{location}</p>
      </div>
      <div className={styles.productCard__stats}>
        <ul className={styles.productCard__list}>
          <li className={styles.productCard__item}>
            <p className={styles.productCard__statName}>Followers</p>
            <p className={styles.productCard__number}>{followers}</p>
          </li>
          <li className={styles.productCard__item}>
            <p className={styles.productCard__statName}>Views</p>
            <p className={styles.productCard__number}>{views}</p>
          </li>
          <li className={styles.productCard__item}>
            <p className={styles.productCard__statName}>Likes</p>
            <p className={styles.productCard__number}>{likes}</p>
          </li>
        </ul>
      </div>
      

    </div>
  )
}
ProductCard.propTypes= {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}
export default ProductCard