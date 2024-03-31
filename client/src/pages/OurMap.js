import React, { useEffect, useRef, useState } from "react";
import "../styles/ourMap.css";
import Navbar from "../components/Navbar";
import MapPageTopBanner from "../components/OurMapPage/MapPageTopBanner";
import RentItem from "../components/OurMapPage/RentItem";
import Map from "../components/OurMapPage/Map";
import axios from "axios";
import ButtonSmallRound from "../components/ButtonSmallRound";
import { staticRentItems } from "../helpers/staticRentItems";

const cityCoordinates = {
  Toronto: { lat: 43.65107, lng: -79.347015 },
  Montreal: { lat: 45.508888, lng: -73.561668 },
  Vancouver: { lat: 49.28273, lng: -123.120735 },
  Calgary: { lat: 51.048615, lng: -114.070847 },
  Edmonton: { lat: 53.546121, lng: -113.49382 },
  Ottawa: { lat: 45.42153, lng: -75.697193 },
  Winnipeg: { lat: 49.895138, lng: -97.138374 },
  Quebec_City: { lat: 46.813878, lng: -71.207981 },
  Hamilton: { lat: 43.255716, lng: -79.871101 },
  London: { lat: 42.984923, lng: -81.245276 },
  Victoria: { lat: 48.428421, lng: -123.365644 },
  Halifax: { lat: 44.648764, lng: -63.575239 },
  Saskatoon: { lat: 52.131802, lng: -106.660804 },
  Regina: { lat: 50.448094, lng: -104.617805 },
  St_Johns: { lat: 47.5615, lng: -52.7126 },
};

const provinceCoordinates = {
  Alberta: { lat: 53.9333, lng: -116.5765 },
  British_Columbia: { lat: 53.7267, lng: -127.6476 },
  Manitoba: { lat: 49.8951, lng: -97.1384 },
  New_Brunswick: { lat: 46.5653, lng: -66.4619 },
  Newfoundland_and_Labrador: { lat: 53.1355, lng: -57.6604 },
  Nova_Scotia: { lat: 44.6488, lng: -63.5752 },
  Ontario: { lat: 51.2538, lng: -85.3232 },
  Prince_Edward_Island: { lat: 46.5107, lng: -63.4168 },
  Quebec: { lat: 52.9399, lng: -73.5491 },
  Saskatchewan: { lat: 52.9399, lng: -106.4509 },
  Northwest_Territories: { lat: 64.8255, lng: -124.8457 },
  Nunavut: { lat: 70.2998, lng: -83.1076 },
  Yukon: { lat: 64.2823, lng: -135.0 },
};

export default function OurMap() {
  const [items, setItems] = useState([]);
  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const [mapBounds, setMapBounds] = useState(null);

  const handleBoundsChanged = () => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      setMapBounds(bounds);
    }
  };

  useEffect(() => {
    axios
      .get("https://rentwallex-server.onrender.com/api/waitlist")
      .then(function (response) {
        // handle success
        setItems(Object.values(response.data.result));
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        if (error.code === "ERR_NETWORK") {
          // Database malfunction. Display static, fake data
          console.log("Network Error...");
          setItems(staticRentItems);
        }
      });
  }, []);

  useEffect(() => {
    if (mapBounds) {
      // Calculate visible markers based on map bounds
      const markers = items.filter(({ lat, lng }) => {
        return mapBounds.contains({ lat, lng });
      });
      setSelectedItemIndex(markers);
    }
  }, [mapBounds, items]);

  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const onClickOneItem = (item, index) => {
    console.log("This is ->", index);
    // setSelectedItemIndex(index)
    setSelectedItemIndex((old) => [...old, item]);

    showOneItem(item);
    focusMap(item);
  };

  const showOneItem = (item) => {
    setIsShowingDetail(true);
  };

  const backToAllItems = () => {
    setIsShowingDetail(false);
  };

  const focusMap = (item) => {
    // inside the map instance you can call any google maps method
    // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
    mapRef.current.setCenter({
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lng),
    });
    mapRef.current.setZoom(mapRef.current.getZoom() + 1);
  };

  const handlePinHover = (index) => {
    console.log("hovering..." + index);
    // highlight the corresponding rentItem
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(event.target.value);
    setSelectedProvince("");
    const cityCoordinate = cityCoordinates[selectedCity];
    if (cityCoordinate) {
      // Center the map to the selected city's coordinates
      mapRef.current.setCenter(cityCoordinate);
      mapRef.current.setZoom(13); // Set an appropriate zoom level
    }
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(event.target.value);
    setSelectedCity("");
    const provinceCoordinate = provinceCoordinates[selectedProvince];
    if (provinceCoordinate) {
      // Center the map to the selected city's coordinates
      mapRef.current.setCenter(provinceCoordinate);
      mapRef.current.setZoom(6); // Set an appropriate zoom level
    }
  };

  return (
    <div className="ourMap">
      <Navbar />
      <MapPageTopBanner />

      <div className="mapContentWrapper">
        <div className="left">
          <div className="title">
            {" "}
            {isShowingDetail ? "RENT(S) AT THIS ADDRESS" : "RENT(S) NEAR YOU"}
          </div>
          {isShowingDetail ? (
            <div onClick={backToAllItems}>
              <ButtonSmallRound symbol="arrow_back" />
            </div>
          ) : (
            <div className="place-dropdowns">
              <div className="dropdown">
                <select
                  value={selectedCity}
                  name="city"
                  onChange={handleCityChange}
                >
                  <option value="">City</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Montreal">Montreal</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Edmonton">Edmonton</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="Winnipeg">Winnipeg</option>
                  <option value="Quebec_City">Quebec City</option>
                  <option value="Hamilton">Hamilton</option>
                  <option value="London">London</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Halifax">Halifax</option>
                  <option value="Saskatoon">Saskatoon</option>
                  <option value="Regina">Regina</option>
                  <option value="St_Johns">St. John's</option>
                </select>
                <div className="arrow"></div>
              </div>
              <div className="dropdown">
                <select
                  value={selectedProvince}
                  name="province"
                  onChange={handleProvinceChange}
                >
                  <option value="">Province</option>
                  <option value="Alberta">AB</option>
                  <option value="British_Columbia">BC</option>
                  <option value="Manitoba">MB</option>
                  <option value="New_Brunswick">NB</option>
                  <option value="Newfoundland_and_Labrador">NL</option>
                  <option value="Nova_Scotia">NS</option>
                  <option value="Ontario">ON</option>
                  <option value="Prince_Edward_Island">PEI</option>
                  <option value="Quebec">QC</option>
                  <option value="Saskatchewan">SK</option>
                  <option value="Northwest Territories">NT</option>
                  <option value="Nunavut">NU</option>
                  <option value="Yukon">YT</option>
                </select>
                <div className="arrow"></div>
              </div>
            </div>
          )}
          {items.map(
            (item, index) =>
              (!isShowingDetail || selectedItemIndex.includes(item)) && (
                <RentItem
                  key={index}
                  item={item}
                  show={onClickOneItem}
                  id={index}
                  isDetail={isShowingDetail}
                />
              )
          )}
        </div>
        <div className="right">
          <Map
            onGoogleApiLoaded={onGoogleApiLoaded}
            coordinates={items}
            updateMap={onClickOneItem}
            handlePinHover={handlePinHover}
            handleBoundsChanged={handleBoundsChanged}
          />
        </div>
      </div>
    </div>
  );
}
