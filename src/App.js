
import './App.css';
import ProductCard from './components/ProductCard';
import dataCard from './data/data-product-card.json'
import Statistics from './components/Statistics'
import dataStatistics from './data/data-statiscs.json'
import FriendsList from './components/FriendsList';
import dataFriends from './data/data-friendlist.json'
import TransactionHistory from './components/TransactionHistory';
import transitions from './data/transition.json'
function App() {
  const { avatar, username, tag, location, stats } = dataCard
  return (
    <div className="App">
      <ProductCard avatar={avatar} 
        username={username}
        tag={tag}
        location={location}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics dataStat={dataStatistics} title="MY card"/>
      <FriendsList friend={dataFriends}/>
      <TransactionHistory transitions={transitions}/>
    </div>
  );
}

export default App;
