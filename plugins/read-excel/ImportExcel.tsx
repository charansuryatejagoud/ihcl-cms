import { Box, Stack, Text, Select, Grid, Card } from "@sanity/ui";
import React, { useState } from "react";
import Contact from "./Contact";
import Highlights from "./Highlights";
import Address from "./Address";
import DiningInfo from "./DiningInfo";
import TaxonomyInfo from "./TaxonomyInfo";
import Facilities from "./Facilities";
import Restaurants from "./Restaurants";
import Destinations from "./Destinations";
import ExclusiveOffers from "./ExclusiveOffers";
import Hotels from "./Hotels";
import About from "./About";
import HotelInformation from "./HotelInformationDynamic";
import { ViewResults } from "./ViewResults";

function ImportExcel() {
  const [selected, setSelected] = useState("Hotels");
  const [results, setResults] = useState([]);
  function updateCallBack(data = null): void {
    data ? setResults((prevData) => [...prevData, data]) : setResults([]);
  }

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
    "Hotels",
    "About",
  ];

  function handleChange(event: any): void {
    setSelected(event.target.value);
  }

  console.log("results", results);

  return (
    <Box>
      <Card border marginTop={2} padding={4} radius={2}>
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
                  {selected == "Hotel Information" && <HotelInformation />}
                  {selected == "Contact" && <Contact />}
                  {selected == "Highlights" && <Highlights />}
                  {selected == "Address" && <Address />}
                  {selected == "Dining" && <DiningInfo />}
                  {selected == "TaxonomyInfo" && <TaxonomyInfo />}
                  {selected == "Facilities" && <Facilities type="production" />}
                  {selected == "Restaurants" && <Restaurants />}
                  {selected == "Destinations" && (
                    <Destinations callBack={updateCallBack} />
                  )}
                  {selected == "Exclusive Offers" && <ExclusiveOffers />}
                  {selected == "Hotels" && <Hotels />}
                  {selected == "About" && <About />}
                </Stack>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Card>
      <ViewResults results={results} />
    </Box>
  );
}

export default ImportExcel;
