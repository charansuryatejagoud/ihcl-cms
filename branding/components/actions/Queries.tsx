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
        "holidays": *[
          _type == "offerPackages" && holidayOffer == true
          && hotels[].participatingHotels[]._ref match ^._id
        ]
        {
         "holidayIdentifier":identifier,
         "holidayTitle":title,
         "experiences": *[_type == "offerHolidays"
          && participatingOffers[]._ref match ^._id ] {
            title,
            identifier
           }
        },
        "restaurants": *[
          _type == "restaurants"
          && participatingHotels[]._ref match ^._id]
        {
         "restaurantIdentifier":identifier,
         "restaurantTitle":bannerTitle.desktopTitle[0],
         "restaurantCity":city,
         "restaurantBrand": *[ _type == "restaurantBrand"
          && participatingRestaurants[]._ref match ^._id][0].title,
         "restaurantDescription": hotelDetailDiningPage.restaurantInfo.description,
         "cusine": hotelDetailDiningPage.restaurantAvailability[lower(title) match "cuisine"][0].list[0].item,
         "breakfast": hotelDetailDiningPage.restaurantAvailability[lower(title) match "breakfast"][0].list[0].item,
         "lunch": hotelDetailDiningPage.restaurantAvailability[lower(title) match "lunch"][0].list[0].item,
         "dinner": hotelDetailDiningPage.restaurantAvailability[lower(title) match "dinner"][0].list[0].item,
         "dressCode": hotelDetailDiningPage.restaurantAvailability[lower(title) match "dress code"][0].list[0].item,
         "openingHours": openingHours
        },
       hotelId, hotelName, brandName,hotelPath,identifier,
       "hotelImage":hotelOverview->basicInfo.media[0].imageAsset.largeImage[0].asset->url,
       "longDescription":hotelDescription,
       "hotelHighlights":hotelFacilities->facilityDetails[title match "Hotel"].list[].item,
            hotelAddress->{
              addressLine1,city,state,country,pincode,
              latitude,longitude,regionKey
            },
            hotelContact->{
              "businessEmail": email[type == "business"][0].email,
              "businessPhone": phone[type == "business"][0].mobile,
              "supportEmail": email[type == "support"][0].email,
              "supportPhone": phone[type == "support"][0].mobile,
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