import React, { useState, useEffect } from 'react'
import PokeCard from './/Components/PokeCard'
import './/Components/style.css'
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [pokeData, setPokeData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2)

  // to load on start
  useEffect(() => {

    const getData = async () => {
      const resp = await fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=20');
      const resd = await resp.json();
      setPokeData(resd.data)
    }
    getData();

  }, []);


  const fetchComments = async () => {
    const resp = await fetch(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=20`);
    const resd = await resp.json();
    return resd.data;
  }


  // After 20 cards loading new
  const fetchData = async () => {
    const dataFromServer = await fetchComments();

    setPokeData([...pokeData, ...dataFromServer]);

    if (dataFromServer.length === 0 || dataFromServer.length < 20) {
      setHasMore(false)
    }

    setPage(page + 1)
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={pokeData.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}>

        <PokeCard pokeData={pokeData} />
      </InfiniteScroll>
    </div>
  );
}

export default App;