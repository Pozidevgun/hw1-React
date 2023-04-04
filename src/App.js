
import './App.css';
import ProductCard from './components/ProductCard';
import dataCard from './data/data-product-card.json'
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
    </div>
  );
}

export default App;
