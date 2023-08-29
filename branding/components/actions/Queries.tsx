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
        hotelId, hotelName, brandName,hotelPath,identifier,
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