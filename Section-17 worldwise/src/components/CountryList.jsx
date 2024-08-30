import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
import CityList from "./CityList"
import Message from "./Message"
import CountryItem from "./CountryItem"
import { useCities } from "../contexts/CitiesContext"
import { Context, useContext } from "react"
//import PropTypes from "prop-types";
//import CitiesContext from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities()
  //const { cities, isLoading } = useContext(CitiesContext);

  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    )

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }]
    else return arr
  }, [])

  console.log("the value of countries is:", countries)
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  )
}
export default CountryList
