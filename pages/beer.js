import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { Prev, Next } from "../components/Controls";

const Beer = ({ data }) => {
  const [currentBeer, setCurrentBeer] = useState(data[0]);
  const [similarBeers, setSimilarBeers] = useState([]);

  const fetchData = async (query) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers${query}`);
    const result = await res.json();
    return result;
  };

  useEffect(() => {
    const { ibu, abv, ebc } = currentBeer;
    const query = `?per_page=3&ibu_gt=${ibu}&abv_gt${abv}&ebc_gt=${ebc}`;
    fetchData(query).then((result) => setSimilarBeers(result));
  }, [currentBeer]);

  return (
    <Layout title={currentBeer.name} id="layout">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <Modal
            name={currentBeer.name}
            src={currentBeer.image_url || "../static/no-picture.png"}
            tagline={currentBeer.tagline}
            ibu={currentBeer.ibu}
            abv={currentBeer.abv}
            description={currentBeer.description}
            brewersTips={currentBeer.brewers_tips}
            id="modal"
          />
        </div>
      </div>

      <div className="container py-3">
        <hr className="py-3" />
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12">
            <p className="lead text-mute text-center py-2">
              Already know this one? Try{" "}
              <span style={{ color: "#008080", fontWeight: 400 }}>these:</span>
            </p>
          </div>

          <Prev id={currentBeer.id} />
          <Next id={currentBeer.id} />

          {similarBeers.length > 0 ? (
            similarBeers.map((beer) => (
              <Card
                key={beer.id}
                id={beer.id}
                src={beer.image_url || "../static/no-picture.png"}
                name={beer.name}
                tagline={beer.tagline}
                onClick={() => setCurrentBeer(beer)}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Layout>
  );
};

Beer.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await res.json();
  return { data };
};

export default Beer;
