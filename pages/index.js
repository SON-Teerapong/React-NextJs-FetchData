import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";

const Index = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("batman");
  const [url, setUrl] = useState(`https://api.tvmaze.com/search/shows?q=batman`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(url).then(res => {
      console.log(res.data);
      setNews(res.data);
      setLoading(false)
    });
  }, [url]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
  };
  const searchInput =()=>(
        <form>
          <input type="text" value={searchQuery} onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
          
        </form>
  )
  const showLoading =()=>(    
     loading ? <h3>Loading</h3>: ''  
  )
  const showData =()=>(    
    news.map((value, index) => {
      return (
        <div key={index}>
          <Link href="/p/[id]/" as={`/p/${value.show.id}`}>
            <a>{value.show.name}</a>
          </Link>
        </div>
      );
    })
  )

  return (
    <Layout>
      <h1>TV Shows</h1>
      <div>
        <br />
        {searchInput()}
        {showLoading()}
        <br />
        {showData()}
        <br />
      </div>
    </Layout>
  );
};

// Index.getInitialProps = async (props) => {

//   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${props.searchQuery}`);
//   return { res: res.data };
// };

export default Index;
