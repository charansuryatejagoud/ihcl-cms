import { Box, Stack, Text, Select, Grid } from "@sanity/ui";
import React, { useState } from "react";
import HotelInformation from "./HotelInformation";
import Contact from "./Contact";
import Highlights from "./Highlights";
import Address from "./Address";
import DiningInfo from "./DiningInfo";
import TaxonomyInfo from "./TaxonomyInfo";
import Facilities from "./Facilities";
import Restaurants from "./Restaurants";
import Destinations from "./Destinations";
import ExclusiveOffers from "./ExclusiveOffers";

function ReadExcel() {
  const [selected, setSelected] = useState("Address");
  const dropDown = [
    "Hotel Information",
    "Contact",
    "Highlights",
    "Address",
    "Restaurants",
    "Dining",
    "TaxonomyInfo",
    "Facilities",
    "Destinations",
    "Exclusive Offers",
  ];

  function handleChange(event: any): void {
    setSelected(event.target.value);
  }

  return (
    <Box padding={4} paddingY={5}>
      <Stack space={4}>
        <Grid columns={[1, 1, 2, 2]}>
          <Stack space={4}>
            <Text size={4} weight="bold">
              Migrate excel data to content here
            </Text>
            <Text size={2} weight="regular">
              Please select below content type to migrate from excel
            </Text>

            <Select
              fontSize={[2, 2, 3, 4]}
              padding={[3, 3, 4]}
              space={[3, 3, 4]}
              value={selected}
              onChange={handleChange}
            >
              {dropDown.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </Select>
          </Stack>
          <Box
            marginLeft={4}
            style={{ outline: "1px solid black", alignContent: "center" }}
          >
            <Stack padding={3}>
              <Text size={2} weight="bold">
                {selected}
              </Text>
              {selected == "Hotel Information" && (
                <HotelInformation type="production" />
              )}
              {selected == "Contact" && <Contact />}
              {selected == "Highlights" && <Highlights />}
              {selected == "Address" && <Address />}
              {selected == "Dining" && <DiningInfo />}
              {selected == "TaxonomyInfo" && <TaxonomyInfo />}
              {selected == "Facilities" && <Facilities type="production" />}
              {selected == "Restaurants" && <Restaurants />}
              {selected == "Destinations" && <Destinations />}
              {selected == "Exclusive Offers" && <ExclusiveOffers />}
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ReadExcel;
