import { useEffect, useState } from "react";
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";

const BASEURL = process.env.REACT_APP_BASE_URL;

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem('user'); 
  const userId = JSON.parse(user)._id;
  console.log(userId);
  const getFeedListings = async () => {
    try {
        

        const response = await fetch(`${BASEURL}/properties/recommendations/${userId}`, {
          method: 'GET',
        });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      setListings(data);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, []);

  return (
    <>
      <div>
        <h1>Recommendations</h1>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              province,
              country,
              category,
              type,
              price,
              booking = false
            }) => (
              <ListingCard
                key={_id}
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Listings;