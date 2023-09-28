export const queries = {
    restaurant: {
      type: `restaurants`,
      body: `{
        "restaurantId":identifier,
        "restaurantTitle":title,
        "restaurantCity":city,
        "restaurantDesc": hotelDetailDiningPage.restaurantInfo.description,
        "hotels": participatingHotels[]-> {
          "hotelId": identifier,
          "hotelName": hotelName
        }
      }`
    },
    hotel: {
      type: `hotel`,
      body: `{
        "restaurants": *[
          _type == "restaurants"
          && participatingHotels[]._ref match ^._id]
        {
         "restaurantIdentifier":identifier,
         "restaurantTitle":title,
         "restaurantCity":city,
         "restaurantBrand": *[ _type == "restaurantBrand"
          && participatingRestaurants[]._ref match ^._id][0].title,
         "restaurantDescription": hotelDetailDiningPage.restaurantInfo.description,
         "cusine": hotelDetailDiningPage.restaurantAvailability[lower(title) match "cuisine"][0].list[0].item,
         "breakfast": hotelDetailDiningPage.restaurantAvailability[lower(title) match "breakfast"][0].list[0].item,
         "lunch": hotelDetailDiningPage.restaurantAvailability[lower(title) match "lunch"][0].list[0].item,
         "dinner": hotelDetailDiningPage.restaurantAvailability[lower(title) match "dinner"][0].list[0].item,
         "openingHours": openingHours
        },
       hotelId, hotelName, brandName,hotelPath,identifier,
       "hotelImage":hotelOverview->basicInfo.media[0].imageAsset.largeImage[0].asset->url,
       "longDescription":hotelOverview->basicInfo.description,
       "hotelHighlights":hotelFacilities->facilityDetails[title match "Hotels"].list[].item,
            hotelAddress->{
              addressLine1,city,state,country,pincode,
              latitude,longitude,regionKey
            },
            hotelContact->{
              businessEmail, supportEmail, businessPhone, supportPhone
            },
            searchTaxonomies->{
              ihclHotelKey,
              brandKey,
              hotelCode,
              hospitalityTitle,
              hotelType,
              posTypes,
              pos,
              hotelPmsCode,
              orionCode,
              siebelCode,
              status,
              legalEntity,
              currency,
              pmsName,
              nonOrionFlag,
              ticFlag,
              epicureFlag,
              updatedDate,
              createdDate,
              activeInd,
              synxisHotelId,
              rating,
              aminities,
              longDescription,
              shortDescription,
              images,
              highlights,
              hospitalityTitle,
              restaurantTypes,
              dressCodes,
              cuisines,
              therapies,
              searchCategory,
              holidayExperience,
              holidayTheme,
              hotelFeature,
              restaurantName,
              menuLink,
              timings,
              diningPath,
              lunch,
              dinner,
              destinationPath
            }
          }`
    }
  }