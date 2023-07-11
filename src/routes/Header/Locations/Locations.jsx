import { useEffect, useState } from "react"
import { roomList } from "../../../mocks/reservations";
import styles from "./Locations.module.scss";


export default function Locations() {
    const [locationInfo, setLocationInfo] = useState([]);
  
    useEffect(() => {
      setLocationInfo(roomList);
    }, []);
  
    
  return (
    <div className={styles.container}>
      {locationInfo.map((location) => (
        <div key={location.id} className={styles.card}>
          <img
            src={location.imageLocation}
            alt={location.name}
            className={styles.image}
          />
          <div className={styles.details}>
            <h2 className={styles.name}>{location.name}</h2>
            <p className={styles.description}>{location.description}</p>
            <div className={styles.info}>
              <p>
                Location: <span>{location.location}</span>
              </p>
              <p>
                Price: <span>{location.price}$</span>
              </p>
              <p>
                Availability:{" "}
                <span className={location.availability ? styles.available : styles.unavailable}>
                  {location.availability ? "Available" : "Not Available"}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}