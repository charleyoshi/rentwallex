/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This sample uses the Places Autocomplete widget to:
// 1. Help the user select a place
// 2. Retrieve the address components associated with that place
// 3. Populate the form fields with those address components.
// This sample requires the Places library, Maps JavaScript API.
// Include the libraries=places parameter when you first load the API.
// For example: <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


export function initAutocomplete(address1Field, address2Field, updateAddress) {
  let autocomplete;

  function fillInAddress() {
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    // console.log("place.address_components:")
    // console.log(place.address_components)
    updateAddress("lat", place.geometry.location.lat())
    updateAddress("lng", place.geometry.location.lng())
    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          updateAddress("streetNumber", component.long_name)
          break;
        }

        case "route": {
          address1 += component.long_name;
          updateAddress("route", `${component.short_name}`)
          break;
        }

        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          updateAddress("postalCode", postcode)
          break;
        }

        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality": {
          // document.querySelector("#locality").value = component.long_name;
          address1 += `, ${component.long_name}`; // e.g. Calgary, Montreal, Toronto
          updateAddress("city", component.long_name)
          break;
        }
        case "administrative_area_level_1": {
          // document.querySelector("#state").value = component.short_name;
          address1 += `, ${component.short_name}`; // e.g. Alberta, Quebec, British Columbia
          updateAddress("province", component.short_name)
          break;
        }
        case "sublocality_level_1": {
          // document.querySelector("#state").value = component.short_name;
          address1 += `, ${component.short_name}`;
          break;
        }
        case "country":
          if (component.short_name === "US") {
            address1 += `, USA`;
          } else {
            address1 += `, ${component.long_name}`;
          }
          updateAddress("country", component.short_name)
          break;
      }
    }

    address1Field.value = address1;
    // console.log(address1)
    document.querySelector("#manualAddress").value = address1;
    address2Field.focus();
  }

  autocomplete = new window.google.maps.places.Autocomplete(address1Field, {
    // componentRestrictions: { country: ["us", "ca"] },
    componentRestrictions: { country: ["ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });

  address1Field.focus();

  autocomplete.addListener("place_changed", fillInAddress);
}
