import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = ({ beers }) => {
  const [data, setData] = useState(beers);
  const [pageNumber, setPageNumber] = useState(2);

  const fetchBeers = async () => {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=20`
    );
    const fetched = await res.json();

    setPageNumber(pageNumber + 1);
    setData(data.concat(fetched));
  };

  return (
    <Layout title="home" id="layout">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <InfiniteScroll
            dataLength={data.length}
            next={fetchBeers}
            loader={<Spinner />}
            endMessage={
              <h4 className="text-center">
                Good job, you've made it! Welcome at the end 🍺
              </h4>
            }
            hasMore={!(data.length >= 355)}
          >
            <div className="container py-sm-5">
              <div className="row d-flex align-items-center justify-content-center">
                {data.map((beer) => (
                  <Card
                    id={beer.id}
                    src={beer.image_url || "../static/no-picture.png"}
                    name={beer.name}
                    tagline={beer.tagline}
                    key={beer.id}
                  />
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
};

Main.getInitialProps = async () => {
  const res = await fetch(
    "https://api.punkapi.com/v2/beers?page=1&per_page=20"
  );
  const beers = await res.json();
  return { beers };
};

export default Main;
