//import styles from "./City.module.css";
//
import { useCities } from "../contexts/CitiesContext"
import { useEffect } from "react"
import styles from "./City.module.css"
import Spinner from "./Spinner"
import BackButton from "./BackButton"
import { useParams, useSearchParams } from "react-router-dom"

//import CitiesContext from "../contexts/CitiesContext";
//import { Context, useContext } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date))

function City() {
  const { id } = useParams()

  const { getCity, currentCity, isLoading } = useCities()
  //const { getCity, currentCity, isLoading } = useContext(CitiesContext);
  useEffect(
    function () {
      getCity(id)
    },
    [id, getCity]
  )

  //console.log(id);

  /* eslint-disable no-unused-vars */
  const [searchParams, setSearchParams] = useSearchParams()

  if (isLoading) return <Spinner />
  //  const maplat = searchParams.get("lat");
  //  const maplng = searchParams.get("lng");

  //TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  const { cityName, emoji, date, notes } = currentCity

  // return (
  //   <>
  //     <h1>City {id}</h1>{" "}
  //     <p>
  //       {" "}
  //       Position: {lat}, {lng}
  //     </p>
  //   </>
  // );

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  )
}

export default City