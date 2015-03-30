window.code = window.code || {};

window.code.models = {
"models": {
    "latLongDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ }'
        }
    ]},
    "timeDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "raw" : {
      "type" : "string"
    },
    "localized" : {
      "type" : "string"
    },
    "epochSeconds" : {
      "type" : "string"
    },
    "timeZoneOffsetSeconds" : {
      "type" : "string"
    },
    "localizedShortDate" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "mobileError": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errorCode" : {
      "type" : "string",
      "description" : "Possible error codes: INVALID_INPUT, HOTEL_ROOM_UNAVAILABLE, HOTEL_OFFER_UNAVAILABLE,HOTEL_SERVICE_FATAL_FAILURE, PAYMENT_FAILED, BOOKING_SUCCEEDED_WITH_ERRORS, BOOKING_FAILED, STORE_CREDIT_CARD_INFO_FAILED, SSL_REQUIRED,  USER_UNAUTHORIZED_FOR_PROFILE, UNKNOWN_ERROR, TRIP_SERVICE_ERROR, HOTEL_PRODUCT_NOT_FOUND, APPLY_COUPON_ERROR, REMOVE_COUPON_ERROR,APPLY_BACKICK_PRICE_ADJUSTMENT_ERROR,APPLY_ADJUSTMENT_UNAUTHORIZED,FLIGHT_SOLD_OUT, FLIGHT_PRODUCT_NOT_FOUND, USER_SERVICE_ERROR, USER_SERVICE_FATAL_FAILURE, USER_SERVICE_TRAVELER_ALREADY_EXISTS, SESSION_TIMEOUT, TRIP_ALREADY_BOOKED, USER_SERVICE_DUPLICATE_EMAIL, USER_SERVICE_CREATE_USER_ERROR, IMAGE_NOT_FOUND, CANNOT_BOOK_WITH_MINOR, USER_CREATION_FAILED_DURING_CHECKOUT, OMS_ERROR,INVALID_INPUT_NOT_OPAQUE_PRODUCT_KEY, PACKAGE_SEARCH_ERROR, CAR_PRODUCT_NOT_AVAILABLE, CAR_SERVICE_ERROR, CAR_SEARCH_ERROR"
    },
    "errorInfo" : {
      "type" : "string",
      "description" : "It returns a Map data structure"
    },
    "diagnosticId" : {
      "type" : "string"
    },
    "diagnosticFullText" : {
      "type" : "string"
    },
    "activityId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonSurcharge": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "amount" : {
      "type" : "string"
    },
    "type" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonPriceAdjustment": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "type" : {
      "type" : "string"
    },
    "amount" : {
      "type" : "string"
    },
    "formattedAmount" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonNightlyRates": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "promo" : {
      "type" : "boolean"
    },
    "baseRate" : {
      "type" : "string"
    },
    "rate" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonBaseRateInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "maxNightlyRate" : {
      "type" : "string"
    },
    "averageRate" : {
      "type" : "string"
    },
    "taxStatusType" : {
      "type" : "string"
    },
    "surchargeTotal" : {
      "type" : "string"
    },
    "surchargeTotalForEntireStay" : {
      "type" : "string"
    },
    "averageBaseRate" : {
      "type" : "string"
    },
    "nightlyRateTotal" : {
      "type" : "string"
    },
    "total" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "currencySymbol" : {
      "type" : "string"
    },
    "surcharges" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonSurcharge"
      }
    },
    "surchargesForEntireStay" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonSurcharge"
      }
    },
    "nightlyRatesPerRoom" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonNightlyRates"
      }
    },
    "nightlyRatesSize" : {
      "type" : "string"
    },
    "priceToShowUsers" : {
      "type" : "string"
    },
    "depositAmountToShowUsers" : {
      "type" : "string"
    },
    "priceRemainingAfterDepositToShowUsers" : {
      "type" : "string"
    },
    "depositAmountExact" : {
      "type" : "string"
    },
    "priceRemainingAfterDepositExact" : {
      "type" : "string"
    },
    "strikethroughPriceToShowUsers" : {
      "type" : "string"
    },
    "strikethroughPriceWithTaxesAndFeesToShowUsers" : {
      "type" : "string"
    },
    "totalMandatoryFees" : {
      "type" : "string"
    },
    "totalPriceWithMandatoryFees" : {
      "type" : "string"
    },
    "userPriceType" : {
      "type" : "string"
    },
    "priceAdjustments" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonPriceAdjustment"
      }
    },
    "checkoutPriceType" : {
      "type" : "string"
    },
    "airAttached" : {
      "type" : "boolean"
    },
    "roomTypeCode" : {
      "type" : "string"
    },
    "ratePlanCode" : {
      "type" : "string"
    },
    "showResortFeeMessage" : {
      "type" : "boolean"
    },
    "resortFeeInclusion" : {
      "type" : "boolean"
    },
    "dailyMandatoryFee" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "apiNewTripJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "itineraryNumber" : {
      "type" : "string"
    },
    "travelRecordLocator" : {
      "type" : "string"
    },
    "tripId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonAssociatedTraveler": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "tuid" : {
      "type" : "integer",
      "format" : "int32"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonPhone": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "number" : {
      "type" : "string"
    },
    "areaCode" : {
      "type" : "string"
    },
    "category" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "extensionNumber" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonAddress": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "firstAddressLine" : {
      "type" : "string"
    },
    "secondAddressLine" : {
      "type" : "string"
    },
    "city" : {
      "type" : "string"
    },
    "province" : {
      "type" : "string"
    },
    "postalCode" : {
      "type" : "string"
    },
    "countryAlpha3Code" : {
      "type" : "string"
    },
    "categoryCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonUserCreditCardInformation": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "description" : {
      "type" : "string"
    },
    "paymentsInstrumentsId" : {
      "type" : "string"
    },
    "creditCardType" : {
      "type" : "string"
    },
    "nameOnCard" : {
      "type" : "string"
    },
    "expired" : {
      "type" : "string"
    },
    "expirationDate" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonFrequentGuestMembership": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "frequentGuestMembershipID" : {
      "type" : "string"
    },
    "frequentGuestMembershipCode" : {
      "type" : "string"
    },
    "hotelMembershipNumber" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonPassport": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "countryCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonTsaDetails": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "gender" : {
      "type" : "string"
    },
    "dateOfBirth" : {
      "type" : "string"
    },
    "redressNumber" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonFrequentFlyerMembership": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "membershipNumber" : {
      "type" : "string"
    },
    "planCode" : {
      "type" : "string"
    },
    "airlineCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonEmergencyContact": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "phone" : {
      "$ref" : "#/definitions/jsonPhone"
    }
  }
}'
        }
    ]},
    "jsonValueAdd": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonHotel": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "sortIndex" : {
      "type" : "string"
    },
    "hotelId" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "localizedName" : {
      "type" : "string"
    },
    "nonLocalizedName" : {
      "type" : "string"
    },
    "address" : {
      "type" : "string"
    },
    "city" : {
      "type" : "string"
    },
    "stateProvinceCode" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "postalCode" : {
      "type" : "string"
    },
    "airportCode" : {
      "type" : "string"
    },
    "supplierType" : {
      "type" : "string"
    },
    "hotelStarRating" : {
      "type" : "string"
    },
    "hotelStarRatingCssClassName" : {
      "type" : "string"
    },
    "hotelGuestRating" : {
      "type" : "string"
    },
    "totalRecommendations" : {
      "type" : "string"
    },
    "percentRecommended" : {
      "type" : "string"
    },
    "totalReviews" : {
      "type" : "string"
    },
    "shortDescription" : {
      "type" : "string"
    },
    "locationDescription" : {
      "type" : "string"
    },
    "locationId" : {
      "type" : "string"
    },
    "lowRate" : {
      "type" : "string"
    },
    "lowRateInfo" : {
      "$ref" : "#/definitions/jsonBaseRateInfo"
    },
    "rateCurrencyCode" : {
      "type" : "string"
    },
    "rateCurrencySymbol" : {
      "type" : "string"
    },
    "roomsLeftAtThisRate" : {
      "type" : "string"
    },
    "latitude" : {
      "type" : "string"
    },
    "longitude" : {
      "type" : "string"
    },
    "proximityDistanceInMiles" : {
      "type" : "string"
    },
    "proximityDistanceInKiloMeters" : {
      "type" : "string"
    },
    "largeThumbnailUrl" : {
      "type" : "string"
    },
    "thumbnailUrl" : {
      "type" : "string"
    },
    "discountMessage" : {
      "type" : "string"
    },
    "isDiscountRestrictedToCurrentSourceType" : {
      "type" : "boolean"
    },
    "isSameDayDRR" : {
      "type" : "boolean"
    },
    "isHotelAvailable" : {
      "type" : "boolean"
    },
    "notAvailableMessage" : {
      "type" : "string"
    },
    "isSponsoredListing" : {
      "type" : "boolean"
    },
    "clickTrackingUrl" : {
      "type" : "string"
    },
    "clickTrackingRedirectUrl" : {
      "type" : "string"
    },
    "impressionTrackingUrl" : {
      "type" : "string"
    },
    "omnitureAdDisplayedUrl" : {
      "type" : "string"
    },
    "omnitureAdClickedUrl" : {
      "type" : "string"
    },
    "hasFreeCancellation" : {
      "type" : "boolean"
    },
    "amenities" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonValueAdd"
      }
    },
    "distanceUnit" : {
      "type" : "string"
    },
    "didGetBackHighestPriceFromSurvey" : {
      "type" : "boolean"
    },
    "highestPriceFromSurvey" : {
      "type" : "string"
    },
    "isDudley" : {
      "type" : "boolean"
    },
    "isVipAccess" : {
      "type" : "boolean"
    },
    "isPaymentChoiceAvailable" : {
      "type" : "boolean"
    },
    "isShowEtpChoice" : {
      "type" : "boolean"
    },
    "allowedToDisplayRatingAsStars" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "jsonOpaqueNeighborhood": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "opaqueHoodId" : {
      "type" : "string"
    },
    "opaqueHoodName" : {
      "type" : "string"
    },
    "opaqueHoodDescription" : {
      "type" : "string"
    },
    "cityName" : {
      "type" : "string"
    },
    "provinceName" : {
      "type" : "string"
    },
    "centroid" : {
      "$ref" : "#/definitions/latLongDomain"
    },
    "opaqueHoodShape" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/latLongDomain"
      }
    }
  }
}'
        }
    ]},
    "jsonAmbiguousCityMatch": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "regionId" : {
      "type" : "string"
    },
    "cityName" : {
      "type" : "string"
    },
    "cityUrl" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonOpaqueHotel": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "sortIndex" : {
      "type" : "string"
    },
    "hotelName" : {
      "type" : "string"
    },
    "hotelStarRating" : {
      "type" : "string"
    },
    "opaqueHoodId" : {
      "type" : "string"
    },
    "opaqueSearchResultId" : {
      "type" : "string"
    },
    "opaqueNeighborhood" : {
      "$ref" : "#/definitions/jsonOpaqueNeighborhood"
    },
    "productKey" : {
      "type" : "string"
    },
    "hotelAmenities" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "hotelOffer" : {
      "$ref" : "#/definitions/jsonBaseRateInfo"
    }
  }
}'
        }
    ]},
    "flightSegmentJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "departureTime" : {
      "type" : "string"
    },
    "departureTimeEpochSeconds" : {
      "type" : "integer",
      "format" : "int32"
    },
    "departureTimeRaw" : {
      "type" : "string"
    },
    "departureTimeZoneOffsetSeconds" : {
      "type" : "integer",
      "format" : "int32"
    },
    "arrivalTime" : {
      "type" : "string"
    },
    "arrivalTimeEpochSeconds" : {
      "type" : "integer",
      "format" : "int32"
    },
    "arrivalTimeRaw" : {
      "type" : "string"
    },
    "arrivalTimeZoneOffsetSeconds" : {
      "type" : "integer",
      "format" : "int32"
    },
    "arrivalAirportCode" : {
      "type" : "string"
    },
    "arrivalAirportLocation" : {
      "type" : "string"
    },
    "departureAirportCode" : {
      "type" : "string"
    },
    "departureAirportLocation" : {
      "type" : "string"
    },
    "airlineName" : {
      "type" : "string"
    },
    "airlineCode" : {
      "type" : "string"
    },
    "flightNumber" : {
      "type" : "string"
    },
    "onTimePercentage" : {
      "type" : "string"
    },
    "operatingAirlineName" : {
      "type" : "string"
    },
    "operatingAirlineCode" : {
      "type" : "string"
    },
    "equipmentCode" : {
      "type" : "string"
    },
    "equipmentDescription" : {
      "type" : "string"
    },
    "duration" : {
      "type" : "string"
    },
    "distance" : {
      "type" : "integer",
      "format" : "int32"
    },
    "distanceUnits" : {
      "type" : "string"
    },
    "stops" : {
      "type" : "integer",
      "format" : "int32"
    },
    "meal" : {
      "type" : "string"
    },
    "sameFlightAsPreviousSegment" : {
      "type" : "boolean"
    },
    "providerCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "flightLegJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "legId" : {
      "type" : "string"
    },
    "baggageFeesUrl" : {
      "type" : "string"
    },
    "segments" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightSegmentJson"
      }
    }
  }
}'
        }
    ]},
    "mobilePrice": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "amount" : {
      "type" : "string"
    },
    "formattedPrice" : {
      "type" : "string"
    },
    "formattedWholePrice" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "passengerCategoryPrice": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "passengerCategory" : {
      "type" : "string"
    },
    "totalPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "basePrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "taxesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    }
  }
}'
        }
    ]},
    "flightSegmentAttributesJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bookingCode" : {
      "type" : "string"
    },
    "cabinCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "flightOfferJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "legIds" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "currency" : {
      "type" : "string"
    },
    "baseFare" : {
      "type" : "string"
    },
    "baseFarePrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "totalFare" : {
      "type" : "string"
    },
    "totalFarePrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "pricePerPassengerCategory" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/passengerCategoryPrice"
      }
    },
    "averageTotalPricePerTicket" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "numberOfTickets" : {
      "type" : "integer",
      "format" : "int32"
    },
    "taxes" : {
      "type" : "string"
    },
    "taxesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "fees" : {
      "type" : "string"
    },
    "feesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "showFees" : {
      "type" : "boolean"
    },
    "productKey" : {
      "type" : "string"
    },
    "mobileShoppingKey" : {
      "type" : "string"
    },
    "seatsRemaining" : {
      "type" : "integer",
      "format" : "int32"
    },
    "segmentAttributes" : {
      "type" : "array",
      "items" : {
        "type" : "array",
        "items" : {
          "$ref" : "#/definitions/flightSegmentAttributesJson"
        }
      }
    },
    "baggageFeesUrl" : {
      "type" : "string"
    },
    "fareType" : {
      "type" : "string"
    },
    "fareName" : {
      "type" : "string"
    },
    "fareNameLink" : {
      "type" : "string"
    },
    "isInternational" : {
      "type" : "boolean"
    },
    "mayChargeOBFees" : {
      "type" : "boolean"
    },
    "hasBagFee" : {
      "type" : "boolean"
    },
    "hasNoBagFee" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "searchCityJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "code" : {
      "type" : "string"
    },
    "city" : {
      "type" : "string"
    },
    "province" : {
      "type" : "string"
    },
    "country" : {
      "type" : "string"
    },
    "searchType" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "airport": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airportCode" : {
      "type" : "string"
    },
    "regionId" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "country" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "route": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "origin" : {
      "type" : "string"
    },
    "destinations" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    }
  }
}'
        }
    ]},
    "flightRulesJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "isChangeAllowed" : {
      "type" : "boolean"
    },
    "isEnrouteChangeAllowed" : {
      "type" : "boolean"
    },
    "isEnrouteRefundAllowed" : {
      "type" : "boolean"
    },
    "isRefundable" : {
      "type" : "boolean"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "changePenaltyAmount" : {
      "type" : "string"
    },
    "refundPenaltyAmount" : {
      "type" : "string"
    },
    "enrouteChangePenaltyAmount" : {
      "type" : "string"
    },
    "enrouteRefundAllowedAmount" : {
      "type" : "string"
    },
    "changePenaltyPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "refundPenaltyPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "enrouteChangePenaltyPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "enrouteRefundAllowedPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "summaryText" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "apiNewTrip": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "itineraryNumber" : {
      "type" : "string"
    },
    "travelRecordLocator" : {
      "type" : "string"
    },
    "tripId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "flightDetailedRulesJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "RuleToTextMap" : {
      "type" : "string",
      "description" : "Returns a Map data structure"
    },
    "RuleToUrlMap" : {
      "type" : "string",
      "description" : "Returns a Map data structure"
    }
  }
}'
        }
    ]},
    "apiPaymentOptionJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "fee" : {
      "type" : "string"
    },
    "feeCurrencyCode" : {
      "type" : "string"
    },
    "totalFarePriceWithFee" : {
      "type" : "string"
    },
    "formattedFee" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "expediaRewardsForTripJson": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalPointsToEarn" : {
      "type" : "integer",
      "format" : "int32"
    },
    "isActiveRewardsMember" : {
      "type" : "boolean"
    },
    "rewardsMembershipTierName" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "addOn": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "termsUrl" : {
      "type" : "string"
    },
    "insuranceTypeId" : {
      "type" : "integer",
      "format" : "int32"
    },
    "price" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "displayPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "displayPriceType" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "insurance": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "productId" : {
      "type" : "string"
    },
    "policyNumber" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "termsUrl" : {
      "type" : "string"
    },
    "totalPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "totalPriceWithoutAddOns" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "displayPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "displayPriceType" : {
      "type" : "string"
    },
    "availableInsuranceAddOns" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/addOn"
      }
    },
    "selectedInsuranceAddOn" : {
      "$ref" : "#/definitions/addOn"
    }
  }
}'
        }
    ]},
    "mobileCoupon": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string",
      "description" : "Minimum size: 1, Maximum Size: 225, Pattern: \"^[.,a-zA-Z0-9'\\- #]*$\""
    },
    "code" : {
      "type" : "string",
      "description" : "Minimum size: 1, Maximum Size: 100, Pattern: \"^[.,a-zA-Z0-9'\\- #]*$\""
    },
    "instanceId" : {
      "type" : "integer",
      "format" : "int32"
    }
  }
}'
        }
    ]},
    "textSection": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "content" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "region": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int32"
    },
    "type" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonPhoto": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "url" : {
      "type" : "string"
    },
    "thumbnailUrl" : {
      "type" : "string"
    },
    "featured" : {
      "type" : "boolean"
    },
    "displayText" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonBedType": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonAvailabilityCancelPolicyInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "versionID" : {
      "type" : "string"
    },
    "cancelTime" : {
      "type" : "string"
    },
    "startWindowHours" : {
      "type" : "string"
    },
    "nightCount" : {
      "type" : "string"
    },
    "percent" : {
      "type" : "string"
    },
    "amount" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "timeZoneDescription" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonHotelRateInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "priceBreakdown" : {
      "type" : "boolean"
    },
    "promo" : {
      "type" : "boolean"
    },
    "rateChange" : {
      "type" : "boolean"
    },
    "chargeableRateInfo" : {
      "$ref" : "#/definitions/jsonBaseRateInfo"
    },
    "convertedRateInfo" : {
      "$ref" : "#/definitions/jsonBaseRateInfo"
    }
  }
}'
        }
    ]},
    "mobileHotelSmokingPreference": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "description" : {
      "type" : "string",
      "description" : " S(\"Smoking\", \"label_smoking\"), NS(\"Non-Smoking\", \"label_non_smoking\"),E(\"Smoking or Non-Smoking\", \"label_smoking_or_non_smoking\"), Unknown(\"Unknown smoking preference\", \"label_unknown_smoking_preference\");"
    },
    "locMsgId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonHotelOffer": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "productKey" : {
      "type" : "string"
    },
    "cancellationPolicy" : {
      "type" : "string"
    },
    "policy" : {
      "type" : "string"
    },
    "rateDescription" : {
      "type" : "string"
    },
    "roomTypeDescription" : {
      "type" : "string"
    },
    "roomLongDescription" : {
      "type" : "string"
    },
    "roomThumbnailUrl" : {
      "type" : "string"
    },
    "supplierType" : {
      "type" : "string"
    },
    "otherInformation" : {
      "type" : "string"
    },
    "rateChange" : {
      "type" : "boolean"
    },
    "nonRefundable" : {
      "type" : "boolean"
    },
    "hasFreeCancellation" : {
      "type" : "boolean"
    },
    "freeCancellationWindowDate" : {
      "type" : "string"
    },
    "guaranteeRequired" : {
      "type" : "boolean"
    },
    "depositRequired" : {
      "type" : "boolean"
    },
    "immediateChargeRequired" : {
      "type" : "boolean"
    },
    "currentAllotment" : {
      "type" : "string"
    },
    "promoId" : {
      "type" : "string"
    },
    "promoDescription" : {
      "type" : "string"
    },
    "isDiscountRestrictedToCurrentSourceType" : {
      "type" : "boolean"
    },
    "isSameDayDRR" : {
      "type" : "boolean"
    },
    "smokingPreferences" : {
      "$ref" : "#/definitions/MobileHotelSmokingPreference"
    },
    "rateOccupancyPerRoom" : {
      "type" : "string"
    },
    "bedTypes" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonBedType"
      }
    },
    "cancelPolicyInfoList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonAvailabilityCancelPolicyInfo"
      }
    },
    "rateInfo" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonHotelRateInfo"
      }
    },
    "valueAdds" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonValueAdd"
      }
    },
    "quotedOccupancy" : {
      "type" : "string"
    },
    "minGuestAge" : {
      "type" : "string"
    },
    "taxRate" : {
      "type" : "string"
    },
    "roomTypeCode" : {
      "type" : "string"
    },
    "ratePlanCode" : {
      "type" : "string"
    },
    "isPayLater" : {
      "type" : "boolean"
    },
    "payLaterOffer" : {
      "$ref" : "#/definitions/jsonHotelOffer"
    }
  }
}'
        }
    ]},
    "jsonLoyaltyPointInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "pointValue" : {
      "type" : "integer",
      "format" : "int32"
    },
    "pointType" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonLoyaltyPoints": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalLoyaltyPoints" : {
      "type" : "integer",
      "format" : "int32"
    },
    "loyaltyPointInfoList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonLoyaltyPointInfo"
      }
    }
  }
}'
        }
    ]},
    "packageTripPricing": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "packageTotal" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "basePrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "totalTaxesAndFees" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "hotelPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "flightPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "savings" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "couponDiscount" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "packageTotalWithoutCoupon" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "taxesAndFeesIncluded" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "jsonRoomOptions": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bedTypeName" : {
      "type" : "string"
    },
    "smokingPreference" : {
      "$ref" : "#/definitions/mobileHotelSmokingPreference"
    },
    "specialRequest" : {
      "type" : "boolean"
    },
    "hasExtraBedAdult" : {
      "type" : "boolean"
    },
    "hasExtraBedChild" : {
      "type" : "boolean"
    },
    "hasExtraBedInfant" : {
      "type" : "boolean"
    },
    "isSmokingPreferenceSelected" : {
      "type" : "boolean"
    },
    "isRoomOptionsAvailable" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "jsonRoomOccupants": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "adultCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "childAndInfantAges" : {
      "type" : "array",
      "items" : {
        "type" : "integer",
        "format" : "int32"
      }
    },
    "bookingItemId" : {
      "type" : "string"
    },
    "orderLineGUID" : {
      "type" : "string"
    },
    "reservationStatus" : {
      "type" : "string"
    },
    "primaryOccupantName" : {
      "type" : "string"
    },
    "occupantSelectedRoomOptions" : {
      "$ref" : "#/definitions/jsonRoomOptions"
    }
  }
}'
        }
    ]},
    "jsonHotelBooking": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "error" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "warnings" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "cancellationPolicy" : {
      "type" : "string"
    },
    "nonLocalizedhotelName" : {
      "type" : "string"
    },
    "hotelName" : {
      "type" : "string"
    },
    "localizedHotelName" : {
      "type" : "string"
    },
    "hotelAddress" : {
      "type" : "string"
    },
    "hotelPostalCode" : {
      "type" : "string"
    },
    "hotelStateProvinceCode" : {
      "type" : "string"
    },
    "hotelCountryCode" : {
      "type" : "string"
    },
    "hotelCity" : {
      "type" : "string"
    },
    "hotelPhone" : {
      "type" : "string"
    },
    "hotelLongitude" : {
      "type" : "string"
    },
    "hotelLatitude" : {
      "type" : "string"
    },
    "nightCount" : {
      "type" : "string"
    },
    "maxGuestCount" : {
      "type" : "string"
    },
    "checkInInstructions" : {
      "type" : "string"
    },
    "roomDescription" : {
      "type" : "string"
    },
    "checkInDate" : {
      "type" : "string"
    },
    "checkInDateForTracking" : {
      "type" : "string"
    },
    "checkOutDate" : {
      "type" : "string"
    },
    "pricePerDayBreakdown" : {
      "type" : "string"
    },
    "averageDailyHotelPrice" : {
      "type" : "string"
    },
    "extraGuestCharges" : {
      "type" : "string"
    },
    "taxes" : {
      "type" : "string"
    },
    "fees" : {
      "type" : "string"
    },
    "averageBaseRate" : {
      "type" : "string"
    },
    "totalPrice" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "nightlyRates" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonNightlyRate"
      }
    },
    "supplierType" : {
      "type" : "string"
    },
    "confirmationPending" : {
      "type" : "string"
    },
    "itineraryNumber" : {
      "type" : "string"
    },
    "travelRecordLocator" : {
      "type" : "string"
    },
    "hotelConfirmationNumber" : {
      "type" : "string"
    },
    "numberOfRoomsBooked" : {
      "type" : "string"
    },
    "nonRefundable" : {
      "type" : "string"
    },
    "hasFreeCancellation" : {
      "type" : "boolean"
    },
    "freeCancellationWindowDate" : {
      "type" : "string"
    },
    "email" : {
      "type" : "string"
    },
    "guestFullName" : {
      "type" : "string"
    },
    "guestPhone" : {
      "$ref" : "#/definitions/jsonPhone"
    },
    "guestAddress" : {
      "$ref" : "#/definitions/jsonAddress"
    },
    "tripId" : {
      "type" : "string"
    },
    "isMerchant" : {
      "type" : "boolean"
    },
    "isGDS" : {
      "type" : "boolean"
    },
    "isOpaque" : {
      "type" : "boolean"
    },
    "hotelInventoryTypeName" : {
      "type" : "string"
    },
    "passbookUrl" : {
      "type" : "string"
    },
    "roomOccupants" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonRoomOccupants"
      }
    },
    "orderNumber" : {
      "type" : "integer",
      "format" : "int32"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    },
    "confirmationUrl" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonPriceChange": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "oldProduct" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "newProduct" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    }
  }
}'
        }
    ]},
    "checkout": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bookingResponse" : {
      "$ref" : "#/definitions/jsonHotelBooking"
    },
    "productResponse" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "jsonPriceChangeResponse" : {
      "$ref" : "#/definitions/jsonPriceChange"
    }
  }
}'
        }
    ]},
    "mobileAirAttachQualifier": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airAttachQualified" : {
      "type" : "boolean"
    },
    "offerExpires" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelCancelRules": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "isRefundable" : {
      "type" : "boolean"
    },
    "isVenere" : {
      "type" : "boolean"
    },
    "isOpaque" : {
      "type" : "boolean"
    },
    "hasFixedPenaltyPrice" : {
      "type" : "boolean"
    },
    "isExpediaRate" : {
      "type" : "boolean"
    },
    "cancellationWindowHours" : {
      "type" : "integer",
      "format" : "int32"
    },
    "cancellationWindowDays" : {
      "type" : "integer",
      "format" : "int32"
    },
    "cancellationTimeZoneName" : {
      "type" : "string"
    },
    "outsideWindowPenaltyNightCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "outsideWindowPenaltyPercentage" : {
      "type" : "integer",
      "format" : "int32"
    },
    "nonRefundableOutsideWindow" : {
      "type" : "boolean"
    },
    "insideWindowPenaltyNightCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "insideWindowPenaltyPercentage" : {
      "type" : "integer",
      "format" : "int32"
    },
    "nonRefundableInsideWindow" : {
      "type" : "boolean"
    },
    "hotelName" : {
      "type" : "string"
    },
    "policyText" : {
      "type" : "string"
    },
    "cancellationText1" : {
      "type" : "string"
    },
    "cancellationText2" : {
      "type" : "string"
    },
    "nonRefundableDates" : {
      "type" : "array",
      "items" : {
        "type" : "integer",
        "format" : "int32"
      }
    }
  }
}'
        }
    ]},
    "hotelCancelEnquiryRoomInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "ratePlanDescription" : {
      "type" : "string"
    },
    "adultCount" : {
      "type" : "string"
    },
    "numberOfNights" : {
      "type" : "string"
    },
    "amountPaid" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "amountRefund" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "orderLineGUID" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelCancelEnquiryInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "roomInfoList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/hotelCancelEnquiryRoomInfo"
      }
    },
    "hotelRules" : {
      "$ref" : "#/definitions/hotelCancelRules"
    }
  }
}'
        }
    ]},
    "packageHotelOffer": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "pricePerPerson" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "packagePricing" : {
      "$ref" : "#/definitions/packageTripPricing"
    },
    "packageProductId" : {
      "type" : "string"
    },
    "hotelOffer" : {
      "$ref" : "#/definitions/jsonHotelOffer"
    }
  }
}'
        }
    ]},
    "packageTrip": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "tripId" : {
      "type" : "string"
    },
    "itineraryNumber" : {
      "type" : "integer",
      "format" : "int32"
    },
    "flight" : {
      "$ref" : "#/definitions/packageFlightJsonResponse"
    },
    "hotel" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "pricing" : {
      "$ref" : "#/definitions/packageTripPricing"
    },
    "tealeafTransactionId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "vendor": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "integer",
      "format" : "int32"
    },
    "name" : {
      "type" : "string"
    },
    "code" : {
      "type" : "string"
    },
    "localPhoneNumber" : {
      "type" : "string"
    },
    "phoneNumber" : {
      "type" : "string"
    },
    "loyaltyProgram" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carLocation": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "locationType" : {
      "type" : "string"
    },
    "locationDescription" : {
      "type" : "string"
    },
    "airportInstructions" : {
      "type" : "string"
    },
    "addressLine1" : {
      "type" : "string"
    },
    "addressLine2" : {
      "type" : "string"
    },
    "addressLine3" : {
      "type" : "string"
    },
    "addressLine4" : {
      "type" : "string"
    },
    "addressLine5" : {
      "type" : "string"
    },
    "cityName" : {
      "type" : "string"
    },
    "provinceStateName" : {
      "type" : "string"
    },
    "postalCode" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "locationCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "rentalFare": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "rateTerm" : {
      "type" : "string"
    },
    "rate" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "dailyRate" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "total" : {
      "$ref" : "#/definitions/mobilePrice"
    }
  }
}'
        }
    ]},
    "carRentalMileageLimits": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "freeMileage" : {
      "type" : "integer",
      "format" : "int32"
    },
    "mileageUnit" : {
      "type" : "string"
    },
    "extraCostPerDistance" : {
      "$ref" : "#/definitions/priceDomain"
    }
  }
}'
        }
    ]},
    "carRentalLimits": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "minDuration" : {
      "type" : "string"
    },
    "maxDuration" : {
      "type" : "string"
    },
    "lastestReturnTime" : {
      "type" : "string"
    },
    "mileageLimits" : {
      "$ref" : "#/definitions/carRentalMileageLimits"
    }
  }
}'
        }
    ]},
    "vehicleInfo": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "category" : {
      "type" : "string",
      "description" : "It can have following values: \"* MINI\", \"* ECONOMY\", \"* COMPACT\", \"* MIDSIZE\", \"* STANDARD\", \"* FULLSIZE\", \"* PREMIUM\", \"* LUXURY\", \"* SPECIAL\", \"* MINI_ELITE\", \"* ECONOMY_ELITE\", \"* COMPACT_ELITE\", \"* MIDSIZE_ELITE\", \"* STANDARD_ELITE\", \"* FULLSIZE_ELITE\", \"* PREMIUM_ELITE\", \"* LUXURY_ELITE\", \"* OVERSIZE\""
    },
    "type" : {
      "type" : "string",
      "description" : "It can have following values: \"* TWO_DOOR_CAR\", \"* THREE_DOOR_CAR\", \"* FOUR_DOOR_CAR\", \"* VAN\", \"* WAGON\", \"* LIMOUSINE\", \"* RECREATIONAL_VEHICLE\", \"* CONVERTIBLE\", \"* SPORTS_CAR\", \"* SUV\", \"* PICKUP_REGULAR_CAB\", \"* PICKUP_EXTENDED_CAB\", \"* OPEN_AIR_ALL_TERRAIN\", \"* SPECIAL\", \"* COMMERCIAL_VAN_TRUCK\", \"* SPECIAL_OFFER_CAR\", \"* COUPE\", \"* MONOSPACE\", \"* MOTORHOME\", \"* TWO_WHEEL_VEHICLE\", \"* ROADSTER\", \"* CROSSOVER\""
    },
    "fuel" : {
      "type" : "string",
      "description" : "It can have following values: \"* `UNKNOWN`\", \"* `GASOLINE`\", \"* `DIESEL`\", \"* `HYBRID`\", \"* `ELECTRIC`\", \"* `LIQUID_COMPRESSED_NATURAL_GAS`\", \"* `HYDROGEN`\", \"* `MULTI_FUEL`\", \"* `ETHANOL`\""
    },
    "transmission" : {
      "type" : "string",
      "description" : "It can have following values: \"* `UNKNOWN`\", \"* `AUTOMATIC_TRANSMISSION`\", \"* `MANUAL_TRANSMISSION`\""
    },
    "drive" : {
      "type" : "string",
      "description" : "It can have following values: \"* `UNKNOWN`\", \"* `TWO_WHEEL_DRIVE`\", \"* `FOUR_WHEEL_DRIVE`\", \"* `ALL_WHEEL_DRIVE`\""
    },
    "hasAirConditioning" : {
      "type" : "boolean"
    },
    "makes" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "minDoors" : {
      "type" : "integer",
      "format" : "int32"
    },
    "maxDoors" : {
      "type" : "integer",
      "format" : "int32"
    },
    "adultCapacity" : {
      "type" : "integer",
      "format" : "int32"
    },
    "childCapacity" : {
      "type" : "integer",
      "format" : "int32"
    },
    "largeLuggageCapacity" : {
      "type" : "integer",
      "format" : "int32"
    },
    "smallLuggageCapacity" : {
      "type" : "integer",
      "format" : "int32"
    }
  }
}'
        }
    ]},
    "rentalOffer": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "productKey" : {
      "type" : "string"
    },
    "vendor" : {
      "$ref" : "#/definitions/vendor"
    },
    "creditCardRequiredToGuaranteeReservation" : {
      "type" : "boolean"
    },
    "pickUpLocation" : {
      "$ref" : "#/definitions/carLocation"
    },
    "dropOffLocation" : {
      "$ref" : "#/definitions/carLocation"
    },
    "fare" : {
      "$ref" : "#/definitions/rentalFare"
    },
    "isMerchant" : {
      "type" : "boolean"
    },
    "carRentalLimits" : {
      "$ref" : "#/definitions/carRentalLimits"
    },
    "vehicleInfo" : {
      "$ref" : "#/definitions/vehicleInfo"
    }
  }
}'
        }
    ]},
    "rentalFareBreakdownItem": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "type" : {
      "type" : "string",
      "description" : "It can have the following values: \"* `INSURANCE`\",\"* `DROP_OFF_CHARGE`\",\"* `TAXES_AND_FEES`\",\"* `BASE`\""
    },
    "includedInTotal" : {
      "type" : "boolean"
    },
    "price" : {
      "$ref" : "#/definitions/mobilePrice"
    }
  }
}'
        }
    ]},
    "detailedRentalFare": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "rateTerm" : {
      "type" : "string",
      "description" : "It can have the following values: HOURLY, DAILY, WEEKLY, WEEKEND, MONTHLY, TOTAL, TRIP"
    },
    "rate" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "priceBreakdownOfTotalDueToday" : {
      "type" : "array"
    },
    "totalDueToday" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "priceBreakdownOfTotalDueAtPickup" : {
      "type" : "array"
    },
    "totalDueAtPickup" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "grandTotal" : {
      "$ref" : "#/definitions/mobilePrice"
    }
  }
}'
        }
    ]},
    "rentalProduct": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "pickupTime" : {
      "type" : "string"
    },
    "dropOffTime" : {
      "type" : "string"
    },
    "productKey" : {
      "type" : "string"
    },
    "vendor" : {
      "$ref" : "#/definitions/vendor"
    },
    "creditCardRequiredToGuaranteeReservation" : {
      "type" : "boolean"
    },
    "pickUpLocation" : {
      "$ref" : "#/definitions/carLocation"
    },
    "dropOffLocation" : {
      "$ref" : "#/definitions/carLocation"
    },
    "vehicleInfo" : {
      "$ref" : "#/definitions/vehicleInfo"
    },
    "detailedFare" : {
      "$ref" : "#/definitions/detailedRentalFare"
    },
    "rulesAndRestrictionsURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "loyaltyPointDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "m_pointType" : {
      "type" : "string",
      "description" : "Possible description: basePoint, offerPoint, None, bonusPoint, fallOfferPoint, eliteCredit, manualAdjustment;"
    },
    "m_pointDescription" : {
      "type" : "string"
    },
    "m_status" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "rewardsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalPoints" : {
      "type" : "integer",
      "format" : "int32"
    },
    "basePoints" : {
      "type" : "integer",
      "format" : "int32"
    },
    "bonusPoints" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/loyaltyPointDomain"
      }
    },
    "logoUrl" : {
      "type" : "string"
    },
    "viewStatementURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "customerSupportDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "customerSupportURL" : {
      "type" : "string"
    },
    "customerSupportPhoneInfo" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "customerSupportPhoneNumberDomestic" : {
      "type" : "string"
    },
    "customerSupportPhoneNumberDomesticAfterHours" : {
      "type" : "string"
    },
    "customerSupportPhoneNumberInternational" : {
      "type" : "string"
    },
    "customerSupportPhoneInfoForEmail" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "termsAndConditionsURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "addressDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "addressLine1" : {
      "type" : "string"
    },
    "addressLine2" : {
      "type" : "string"
    },
    "addressLine3" : {
      "type" : "string"
    },
    "addressLine4" : {
      "type" : "string"
    },
    "addressLine5" : {
      "type" : "string"
    },
    "city" : {
      "type" : "string"
    },
    "cityLocalized" : {
      "type" : "string"
    },
    "companyName" : {
      "type" : "string"
    },
    "countrySubdivisionCode" : {
      "type" : "string"
    },
    "postalCode" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "countryName" : {
      "type" : "string"
    },
    "fullAddress" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "labelAndValuePairDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "label" : {
      "type" : "string"
    },
    "value" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelPropertyInfoDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "address" : {
      "$ref" : "#/definitions/addressDomain"
    },
    "name" : {
      "type" : "string"
    },
    "starRating" : {
      "type" : "string"
    },
    "photoThumbnailURL" : {
      "type" : "string"
    },
    "photoThumbnail500pixURL" : {
      "type" : "string"
    },
    "photoThumbnail1000pixURL" : {
      "type" : "string"
    },
    "localPhone" : {
      "type" : "string"
    },
    "tollFreePhone" : {
      "type" : "string"
    },
    "formattedPhoneNumbers" : {
      "type" : "string"
    },
    "checkInPolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "checkInStartTimePolicy" : {
      "$ref" : "#/definitions/labelAndValuePairDomain"
    },
    "checkInEndTimePolicy" : {
      "$ref" : "#/definitions/labelAndValuePairDomain"
    },
    "checkOutTimePolicy" : {
      "$ref" : "#/definitions/labelAndValuePairDomain"
    },
    "generalRules" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "restrictionPolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "fees" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "mandatoryFees" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "specialCheckInInstructions" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "isVipAccess" : {
      "type" : "boolean"
    },
    "googleMapsLink" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "lodgingPriceDetailsPerDayDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "day" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "primaryCurrencyCode" : {
      "type" : "string"
    },
    "amount" : {
      "type" : "string"
    },
    "amountFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "lodgingPriceDetailsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "comment" : {
      "type" : "string"
    },
    "primaryCurrencyCode" : {
      "type" : "string"
    },
    "base" : {
      "type" : "string"
    },
    "baseFormatted" : {
      "type" : "string"
    },
    "baseWithAdjustmentForDRRRateDiscount" : {
      "type" : "string"
    },
    "baseWithAdjustmentForDRRRateDiscountFormatted" : {
      "type" : "string"
    },
    "extraGuestCharges" : {
      "type" : "string"
    },
    "extraGuestChargesFormatted" : {
      "type" : "string"
    },
    "taxesAndFees" : {
      "type" : "string"
    },
    "taxesAndFeesFormatted" : {
      "type" : "string"
    },
    "mandatoryHotelFees" : {
      "type" : "string"
    },
    "mandatoryHotelFeesFormatted" : {
      "type" : "string"
    },
    "adjustmentForDRRRateDiscount" : {
      "type" : "string"
    },
    "adjustmentForDRRRateDiscountFormatted" : {
      "type" : "string"
    },
    "drrRateDiscountDescription" : {
      "type" : "string"
    },
    "adjustmentForAgent" : {
      "type" : "string"
    },
    "adjustmentForAgentFormatted" : {
      "type" : "string"
    },
    "adjustmentForCoupon" : {
      "type" : "string"
    },
    "adjustmentForCouponFormatted" : {
      "type" : "string"
    },
    "adjustmentForEmployeeDiscount" : {
      "type" : "string"
    },
    "adjustmentForEmployeeDiscountFormatted" : {
      "type" : "string"
    },
    "adjustmentForLoyalty" : {
      "type" : "string"
    },
    "adjustmentForLoyaltyFormatted" : {
      "type" : "string"
    },
    "subTotalBeforeCoupon" : {
      "type" : "string"
    },
    "subTotalBeforeCouponFormatted" : {
      "type" : "string"
    },
    "subTotalAfterDeposits" : {
      "type" : "string"
    },
    "subTotalAfterDepositsFormatted" : {
      "type" : "string"
    },
    "subTotalAfterDepositsPOS" : {
      "type" : "string"
    },
    "subTotalAfterDepositsPOSFormatted" : {
      "type" : "string"
    },
    "penalty" : {
      "type" : "string"
    },
    "penaltyFormatted" : {
      "type" : "string"
    },
    "refund" : {
      "type" : "string"
    },
    "refundFormatted" : {
      "type" : "string"
    },
    "refundPOS" : {
      "type" : "string"
    },
    "refundPOSFormatted" : {
      "type" : "string"
    },
    "taxStatus" : {
      "type" : "string"
    },
    "total" : {
      "type" : "string"
    },
    "totalFormatted" : {
      "type" : "string"
    },
    "totalExpediaCollectAmount" : {
      "type" : "string"
    },
    "totalExpediaCollectAmountFormatted" : {
      "type" : "string"
    },
    "totalPOSCurrencyCode" : {
      "type" : "string"
    },
    "totalPOS" : {
      "type" : "string"
    },
    "totalPOSFormatted" : {
      "type" : "string"
    },
    "hotelDeposits" : {
      "type" : "string"
    },
    "hotelDepositsFormatted" : {
      "type" : "string"
    },
    "hotelDepositsPOS" : {
      "type" : "string"
    },
    "hotelDepositsPOSFormatted" : {
      "type" : "string"
    },
    "hotelDepositsAfterRefund" : {
      "type" : "string"
    },
    "hotelDepositsAfterRefundFormatted" : {
      "type" : "string"
    },
    "hotelDepositsAfterRefundPOS" : {
      "type" : "string"
    },
    "hotelDepositsAfterRefundPOSFormatted" : {
      "type" : "string"
    },
    "averagePricePerDay" : {
      "type" : "string"
    },
    "averagePricePerDayFormatted" : {
      "type" : "string"
    },
    "averageTaxPerDay" : {
      "type" : "string"
    },
    "averageTaxPerDayFormatted" : {
      "type" : "string"
    },
    "priceDetailsPerDay" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/lodgingPriceDetailsPerDayDomain"
      }
    },
    "isSameRateForAllNights" : {
      "type" : "boolean"
    },
    "hasFees" : {
      "type" : "boolean"
    },
    "expediaChangeFee" : {
      "type" : "string"
    },
    "expediaChangeFeeFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "lodgingRulesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "cancelChangeWarning" : {
      "type" : "string"
    },
    "cancelChangeRulesIntroduction" : {
      "type" : "string"
    },
    "cancelChangeRules" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "cancellationWindowTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "opaqueRules" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "opaquePolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "lateArrivalInstructions" : {
      "type" : "string"
    },
    "loyaltyPointsDisclaimer" : {
      "type" : "string"
    },
    "quebecResidentsIndemnityFund" : {
      "type" : "string"
    },
    "currencyDisclaimer" : {
      "type" : "string"
    },
    "currencyConversionDisclaimer" : {
      "type" : "string"
    },
    "extraGuestPolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "occupancyPolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "paymentPolicies" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "aarpCheckIn" : {
      "type" : "string"
    },
    "roomRequestDisclaimer" : {
      "type" : "string"
    },
    "accessibilityText" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "priceDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "currency" : {
      "$ref" : "#/definitions/currencyDomain"
    }
  }
}'
        }
    ]},
    "couponDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "code" : {
      "type" : "string"
    },
    "couponValue" : {
      "$ref" : "#/definitions/priceDomain"
    }
  }
}'
        }
    ]},
    "currencyDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "currencyCode" : {
      "type" : "string"
    },
    "defaultFractionDigits" : {
      "type" : "integer",
      "format" : "int32"
    },
    "numericCode" : {
      "type" : "integer",
      "format" : "int32"
    },
    "instances" : {
      "type" : "string",
      "description" : "Returns a Hashmap data structure(HashMap<String, Currency>)"
    },
    "available" : {
      "type" : "array",
      "description" : "Returns a Hashset data structure(HashSet<Currency>)",
      "items" : {
        "$ref" : "#/definitions/currencyDomain"
      }
    }
  }
}'
        }
    ]},
    "guestDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "firstName" : {
      "type" : "string"
    },
    "fullName" : {
      "type" : "string"
    },
    "email" : {
      "type" : "string"
    },
    "primaryPhone" : {
      "type" : "string"
    },
    "phone" : {
      "type" : "string"
    },
    "frequentGuestPlanName" : {
      "type" : "string"
    },
    "frequentGuestMembershipCode" : {
      "type" : "string"
    },
    "frequentFlyerPlanName" : {
      "type" : "string"
    },
    "frequentFlyerMembershipCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "occupancyInfoDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "adultCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "childCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "infantCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "childAndInfantAges" : {
      "type" : "array",
      "items" : {
        "type" : "integer",
        "format" : "int32"
      }
    }
  }
}'
        }
    ]},
    "roomOptionsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bedTypeName" : {
      "type" : "string"
    },
    "defaultBedTypeName" : {
      "type" : "string"
    },
    "smokingPreference" : {
      "type" : "string"
    },
    "specialRequest" : {
      "type" : "string"
    },
    "accessibilityOptions" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "hasExtraBedAdult" : {
      "type" : "boolean"
    },
    "hasExtraBedChild" : {
      "type" : "boolean"
    },
    "hasExtraBedInfant" : {
      "type" : "boolean"
    },
    "isSmokingPreferenceSelected" : {
      "type" : "boolean"
    },
    "isRoomOptionsAvailable" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "bedDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "selected" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "accessibilityDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "selected" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "availableRoomOptionsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bedTypes" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/bedDomain"
      }
    },
    "accessibilityOptions" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/accessibilityDomain"
      }
    },
    "isSmokingRoomAvailable" : {
      "type" : "boolean"
    },
    "isNonSmokingRoomAvailable" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "roomPreferencesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "primaryOccupant" : {
      "$ref" : "#/definitions/guestDomain"
    },
    "otherOccupantInfo" : {
      "$ref" : "#/definitions/occupancyInfoDomain"
    },
    "occupantSelectedRoomOptions" : {
      "$ref" : "#/definitions/roomOptionsDomain"
    },
    "availableRoomOptions" : {
      "$ref" : "#/definitions/availableRoomOptionsDomain"
    }
  }
}'
        }
    ]},
    "cancelRefundDetailsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "condition" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "penaltyAmount" : {
      "type" : "string"
    },
    "penaltyAmountFormatted" : {
      "type" : "string"
    },
    "refundAmount" : {
      "type" : "string"
    },
    "refundAmountFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "roomDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "roomRatePlanDescription" : {
      "type" : "string"
    },
    "roomTypeCode" : {
      "type" : "string"
    },
    "ratePlanCode" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "bookingStatusEnum" : {
      "type" : "string"
    },
    "hotelConfirmationNumber" : {
      "type" : "string"
    },
    "hotelCancellationId" : {
      "type" : "string"
    },
    "drrRateDiscountDescription" : {
      "type" : "string"
    },
    "orderLineNumber" : {
      "type" : "string"
    },
    "refundabilityStatus" : {
      "type" : "string"
    },
    "availableOnAllDates" : {
      "type" : "string"
    },
    "roomCancelLink" : {
      "type" : "string"
    },
    "roomChangeLink" : {
      "type" : "string"
    },
    "cancelRefundDetails" : {
      "$ref" : "#/definitions/cancelRefundDetailsDomain"
    },
    "totalPriceDetails" : {
      "$ref" : "#/definitions/lodgingPriceDetailsDomain"
    },
    "averagePriceDetails" : {
      "$ref" : "#/definitions/lodgingPriceDetailsDomain"
    },
    "roomPreferences" : {
      "$ref" : "#/definitions/roomPreferencesDomain"
    },
    "amenities" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    }
  }
}'
        }
    ]},
    "paymentAndCreditFeesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "paymentsHotelFeesAndDepositsDisclaimer" : {
      "type" : "string"
    },
    "paymentsDepositRequired" : {
      "type" : "string"
    },
    "paymentsCreditsGDSHotelAnyRoomCancelled" : {
      "type" : "string"
    },
    "paymentsCreditsDAHotelAnyRoomCancelled" : {
      "type" : "string"
    },
    "noFeesStaticText" : {
      "type" : "string"
    },
    "isDirectAgency" : {
      "type" : "boolean"
    },
    "isGDS" : {
      "type" : "boolean"
    },
    "isFullyCancelled" : {
      "type" : "boolean"
    },
    "isAnyRoomCancelled" : {
      "type" : "boolean"
    },
    "isDepositRequired" : {
      "type" : "boolean"
    },
    "isPaymentsCreditsVisible" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "hotelDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "hotelId" : {
      "type" : "string"
    },
    "checkInDateTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "checkOutDateTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "startTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "endTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "checkInDate" : {
      "type" : "string"
    },
    "checkOutDate" : {
      "type" : "string"
    },
    "checkInDateLocalized" : {
      "type" : "string"
    },
    "checkOutDateLocalized" : {
      "type" : "string"
    },
    "numberOfNights" : {
      "type" : "integer",
      "format" : "int32"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "bookingStatusText" : {
      "type" : "string"
    },
    "bookingStatusMessage" : {
      "type" : "string"
    },
    "inventoryType" : {
      "type" : "string",
      "description" : "Possible values: MERCHANT, PEGASUS, WORLDSPAN, VENERE, DIRECT_AGENCY, OPAQUE, ESCAPIA, WOTIF"
    },
    "inventorySource" : {
      "type" : "string"
    },
    "paymentModel" : {
      "type" : "string"
    },
    "inventoryVisibility" : {
      "type" : "string"
    },
    "orderNumber" : {
      "type" : "string"
    },
    "webCancelPathURL" : {
      "type" : "string"
    },
    "infositeURL" : {
      "type" : "string"
    },
    "hotelPropertyInfo" : {
      "$ref" : "#/definitions/hotelPropertyInfoDomain"
    },
    "averagePriceDetails" : {
      "$ref" : "#/definitions/lodgingPriceDetailsDomain"
    },
    "totalPriceDetails" : {
      "$ref" : "#/definitions/lodgingPriceDetailsDomain"
    },
    "rules" : {
      "$ref" : "#/definitions/lodgingRulesDomain"
    },
    "appliedCoupons" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/couponDomain"
      }
    },
    "rooms" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/roomDomain"
      }
    },
    "sharableItemDetailURL" : {
      "type" : "string"
    },
    "isFreeCancellationAvailable" : {
      "type" : "boolean"
    },
    "paymentsAndCreditFees" : {
      "$ref" : "#/definitions/paymentAndCreditFeesDomain"
    },
    "roomChangeLink" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "confirmationNumberDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airlineName" : {
      "type" : "string"
    },
    "number" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "fareDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airlineCardFee" : {
      "type" : "string"
    },
    "airlineCardFeeFormatted" : {
      "type" : "string"
    },
    "expediaServiceFee" : {
      "type" : "string"
    },
    "expediaServiceFeeFormatted" : {
      "type" : "string"
    },
    "insurance" : {
      "type" : "string"
    },
    "insuranceFormatted" : {
      "type" : "string"
    },
    "subTotal" : {
      "type" : "string"
    },
    "subTotalFormatted" : {
      "type" : "string"
    },
    "couponDiscount" : {
      "type" : "string"
    },
    "couponDiscountFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "feeComponentDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "localizedName" : {
      "type" : "string"
    },
    "amount" : {
      "type" : "string"
    },
    "amountFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "weightDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "unit" : {
      "type" : "string",
      "description" : "Possible value: KILOGRAM(\"kgs\")"
    }
  }
}'
        }
    ]},
    "ancillaryFeeComponentDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "quantity" : {
      "type" : "integer",
      "format" : "int32"
    },
    "weight" : {
      "$ref" : "#/definitions/weightDomain"
    },
    "addToTotal" : {
      "type" : "boolean"
    },
    "listOfLegsAncillaryAppliedTo" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    }
  }
}'
        }
    ]},
    "phoneDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "countryCode" : {
      "type" : "string"
    },
    "phone" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "seatDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "assigned" : {
      "type" : "string"
    },
    "requested" : {
      "type" : "string"
    },
    "seatPreference" : {
      "type" : "string"
    },
    "seatPreferenceLocalized" : {
      "type" : "string"
    },
    "ticketingStatus" : {
      "type" : "string"
    },
    "smokingAllowed" : {
      "type" : "boolean"
    },
    "legIndex" : {
      "type" : "integer",
      "format" : "int32"
    },
    "segmentIndex" : {
      "type" : "integer",
      "format" : "int32"
    }
  }
}'
        }
    ]},
    "frequentFlyerPlanDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airlineCode" : {
      "type" : "string"
    },
    "programCode" : {
      "type" : "string"
    },
    "programName" : {
      "type" : "string"
    },
    "membershipNumber" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "passengerFlightDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "typeCode" : {
      "type" : "string"
    },
    "typeLocalized" : {
      "type" : "string"
    },
    "title" : {
      "type" : "string"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "fullName" : {
      "type" : "string"
    },
    "gender" : {
      "type" : "string"
    },
    "dateOfBirth" : {
      "$ref" : "#/definitions/confirmationNumberDomain"
    },
    "TSARedressNumber" : {
      "type" : "string"
    },
    "passportAddress" : {
      "type" : "string"
    },
    "passportCountryCode" : {
      "type" : "string"
    },
    "phoneNumbers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/phoneDomain"
      }
    },
    "specialAssistanceOptions" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "ticketNumbers" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "cancelledTicketNumbers" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "frequentFlyerPlans" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/frequentFlyerPlanDomain"
      }
    },
    "seats" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/seatDomain"
      }
    }
  }
}'
        }
    ]},
    "farePerPassengerDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "passengerIndex" : {
      "type" : "integer",
      "format" : "int32"
    },
    "passengerTypeCode" : {
      "type" : "string"
    },
    "passengerTypeCodeLocalized" : {
      "type" : "string"
    },
    "currency" : {
      "type" : "string"
    },
    "base" : {
      "type" : "string"
    },
    "baseFormatted" : {
      "type" : "string"
    },
    "taxes" : {
      "type" : "string"
    },
    "taxesFormatted" : {
      "type" : "string"
    },
    "fees" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/feeComponentDomain"
      }
    },
    "ancillaryFees" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/ancillaryFeeComponentDomain"
      }
    },
    "total" : {
      "type" : "string"
    },
    "totalFormatted" : {
      "type" : "string"
    },
    "fromToAirportCodes" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "locationDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "longName" : {
      "type" : "string"
    },
    "airportCode" : {
      "type" : "string"
    },
    "airportMetroCode" : {
      "type" : "string"
    },
    "city" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "countrySubdivisionCode" : {
      "type" : "string"
    },
    "fullAddress" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "flightDelaysDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "departureGateDelay" : {
      "type" : "string"
    },
    "arrivalGateDelay" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "segmentDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "transportationType" : {
      "type" : "string"
    },
    "departureType" : {
      "type" : "string"
    },
    "departureLocation" : {
      "$ref" : "#/definitions/locationDomain"
    },
    "departureTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "arrivalType" : {
      "type" : "string"
    },
    "arrivalLocation" : {
      "$ref" : "#/definitions/locationDomain"
    },
    "arrivalTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "departureTerminal" : {
      "type" : "string"
    },
    "departureGate" : {
      "type" : "string"
    },
    "arrivalTerminal" : {
      "type" : "string"
    },
    "arrivalGate" : {
      "type" : "string"
    },
    "airlineCode" : {
      "type" : "string"
    },
    "externalAirlineCode" : {
      "type" : "string"
    },
    "airlineName" : {
      "type" : "string"
    },
    "operatedByAirCarrierName" : {
      "type" : "string"
    },
    "confirmationAirline" : {
      "type" : "string"
    },
    "confirmationNUmber" : {
      "type" : "string"
    },
    "flightNumber" : {
      "type" : "string"
    },
    "equipmentCode" : {
      "type" : "string"
    },
    "equipmentDescription" : {
      "type" : "string"
    },
    "layoverDuration" : {
      "type" : "string"
    },
    "distanceUnits" : {
      "type" : "string"
    },
    "duration" : {
      "type" : "string"
    },
    "formattedDuration" : {
      "type" : "string"
    },
    "onTimePercentage" : {
      "type" : "string"
    },
    "providerCode" : {
      "type" : "string"
    },
    "bookingCode" : {
      "type" : "string"
    },
    "cabinCode" : {
      "type" : "string"
    },
    "cabinCodeLocalized" : {
      "type" : "string"
    },
    "checkinAirlineName" : {
      "type" : "string"
    },
    "checkinAirlineCode" : {
      "type" : "string"
    },
    "isSeatMapAvailable" : {
      "type" : "boolean"
    },
    "flightIdForSeatMap" : {
      "type" : "string"
    },
    "delays" : {
      "$ref" : "#/definitions/flightDelaysDomain"
    },
    "status" : {
      "type" : "string"
    },
    "airSegmentStatusCode" : {
      "type" : "string"
    },
    "airOriginDestinationReferenceIndex" : {
      "type" : "integer",
      "format" : "int32"
    },
    "segmentChangeMessage" : {
      "type" : "string"
    },
    "segmentChangeMessageLegacy" : {
      "type" : "string"
    },
    "isHidden" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "legDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "type" : {
      "type" : "string",
      "description" : "Possible values: NONSTOP, DIRECT, ONESTOP, MULTISTOP"
    },
    "state" : {
      "type" : "string",
      "description" : "Possible values: PRE_START_4,PRE_START_3, PRE_START_2, PRE_START_1, PRE_START_0, POST_START, IN_PROGRESS, PRE_END, POST_END_0, POST_END_1, POST_END_2, POST_END_3"
    },
    "numberOfStops" : {
      "type" : "integer",
      "format" : "int32"
    },
    "airlineLogoURL" : {
      "type" : "string"
    },
    "segments" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/segmentDomain"
      }
    },
    "sharableFlightLegURL" : {
      "type" : "string"
    },
    "duration" : {
      "type" : "string"
    },
    "segmentChangeMessage" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "textUrlTripleDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "text" : {
      "type" : "string"
    },
    "url" : {
      "type" : "string"
    },
    "textAndURL" : {
      "type" : "string"
    },
    "apiURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "rulesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bookingFeeText" : {
      "type" : "string"
    },
    "cancellationFeeLegalText" : {
      "type" : "string"
    },
    "bookingFeeLegalText" : {
      "type" : "string"
    },
    "faresNotGuaranteedText" : {
      "type" : "string"
    },
    "cancelChangeIntroductionText" : {
      "type" : "string"
    },
    "feeChangeRefundIntroductionText" : {
      "type" : "string"
    },
    "refundabilityText" : {
      "type" : "string"
    },
    "changePenaltyText" : {
      "type" : "string"
    },
    "completePenaltyRules" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "bargainFairUpgradesText" : {
      "type" : "string"
    },
    "bargainFareStandbyText" : {
      "type" : "string"
    },
    "lccPartnerConfEmailsText" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "insuranceTerms" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "additionalAirlineFees" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "airlineLiabilityLimitations" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "airlineLiabilityLimitationsEnglishOnlyCaveatText" : {
      "type" : "string"
    },
    "quebecResidentsIndemnityFundText" : {
      "type" : "string"
    },
    "ticketingAgencyText" : {
      "type" : "string"
    },
    "flightRulesLCCImportantMessage" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "manageMyFlightRulesLCCImportantMessage" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "flightRulesLCCPrecheckinAdvice" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "flightRulesLCCServiceLite" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "firstCharterImportantMessage" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "secondCharterImportantMessage" : {
      "$ref" : "#/definitions/textUrlTripleDomain"
    },
    "splitTicketingMessage" : {
      "type" : "string"
    },
    "airlineCheckInInstructionText" : {
      "type" : "string"
    },
    "travelingToUSText" : {
      "type" : "string"
    },
    "internationalPassportNoteText" : {
      "type" : "string"
    },
    "onlineCheckinReminderText" : {
      "type" : "string"
    },
    "lccPartnerConfEmailsForSplitTicketText" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    }
  }
}'
        }
    ]},
    "flightDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "bookingStatusText" : {
      "type" : "string"
    },
    "bookingStatusMessage" : {
      "type" : "string"
    },
    "ticketingStatus" : {
      "type" : "string"
    },
    "orderNumber" : {
      "type" : "string"
    },
    "webCancelPathURL" : {
      "type" : "string"
    },
    "updateFrequentFlyerPathURL" : {
      "type" : "string"
    },
    "orderLineNumber" : {
      "type" : "string"
    },
    "confirmationNumbers" : {
      "$ref" : "#/definitions/confirmationNumberDomain"
    },
    "expediaBookingId" : {
      "type" : "string"
    },
    "paymentModel" : {
      "type" : "string"
    },
    "fareType" : {
      "type" : "string"
    },
    "flightType" : {
      "type" : "string"
    },
    "isInternational" : {
      "type" : "boolean"
    },
    "fareTotal" : {
      "$ref" : "#/definitions/fareDomain"
    },
    "farePerPassenger" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/farePerPassengerDomain"
      }
    },
    "isSplitTicket" : {
      "type" : "boolean"
    },
    "fulfillmentMethod" : {
      "type" : "string"
    },
    "passengers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/passengerFlightDomain"
      }
    },
    "legs" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/legDomain"
      }
    },
    "rules" : {
      "$ref" : "#/definitions/rulesDomain"
    },
    "sharableItemDetailURL" : {
      "type" : "string"
    },
    "airRecordLocator" : {
      "type" : "string"
    },
    "startDate" : {
      "type" : "string"
    },
    "endDate" : {
      "type" : "string"
    },
    "isSeatMapAvailable" : {
      "type" : "boolean"
    },
    "ticketingTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "webChangePathURL" : {
      "type" : "string"
    },
    "bookingProvider" : {
      "type" : "string"
    },
    "hasTrainTransfer" : {
      "type" : "boolean"
    },
    "ticketingAirCarrierNames" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "isLccOrCharter" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "carTravelerDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carLocationDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "locationType" : {
      "type" : "string"
    },
    "locationDescription" : {
      "type" : "string"
    },
    "airportInstructions" : {
      "type" : "string"
    },
    "addressLine1" : {
      "type" : "string"
    },
    "addressLine2" : {
      "type" : "string"
    },
    "addressLine3" : {
      "type" : "string"
    },
    "addressLine4" : {
      "type" : "string"
    },
    "addressLine5" : {
      "type" : "string"
    },
    "cityName" : {
      "type" : "string"
    },
    "provinceStateName" : {
      "type" : "string"
    },
    "postalCode" : {
      "type" : "string"
    },
    "countryCode" : {
      "type" : "string"
    },
    "locationCode" : {
      "type" : "boolean"
    }
  }
}'
        }
    ]},
    "carOpenHoursDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "openingDateTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "closingDateTime" : {
      "$ref" : "#/definitions/timeDomain"
    }
  }
}'
        }
    ]},
    "carVendorDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "longName" : {
      "type" : "string"
    },
    "code" : {
      "type" : "string"
    },
    "shortName" : {
      "type" : "string"
    },
    "localPhoneNumber" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carDomainRulesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "ruleType" : {
      "type" : "string"
    },
    "ruleName" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carTypeAttributesDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "vehicleTypeLocalized" : {
      "type" : "string"
    },
    "fuelType" : {
      "type" : "string"
    },
    "fuelTypeLocalized" : {
      "type" : "string"
    },
    "airConditioningType" : {
      "type" : "string"
    },
    "airConditioningTypeLocalized" : {
      "type" : "string"
    },
    "transmissionType" : {
      "type" : "string"
    },
    "transmissionTypeLocalized" : {
      "type" : "string"
    },
    "wheelDriveType" : {
      "type" : "string"
    },
    "wheelDriveTypeLocalized" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "bookingStatusText" : {
      "type" : "string"
    },
    "bookingStatusMessage" : {
      "type" : "string"
    },
    "orderLineNumber" : {
      "type" : "string"
    },
    "paymentModel" : {
      "type" : "string"
    },
    "reservationGuaranteePolicy" : {
      "type" : "string"
    },
    "price" : {
      "$ref" : "#/definitions/priceDomain"
    },
    "confirmationNumber" : {
      "type" : "string"
    },
    "webCancelPathURL" : {
      "type" : "string"
    },
    "webGetCarCancelDetailPathURL" : {
      "type" : "string"
    },
    "webCarRulesPageURL" : {
      "type" : "string"
    },
    "bookingId" : {
      "type" : "string"
    },
    "travelers" : {
      "$ref" : "#/definitions/carTravelerDomain"
    },
    "pickupTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "dropOffTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "pickupLocation" : {
      "$ref" : "#/definitions/carLocationDomain"
    },
    "dropOffLocation" : {
      "$ref" : "#/definitions/carLocationDomain"
    },
    "pickupDateOpenHoursSummaryString" : {
      "type" : "string"
    },
    "passengers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/carOpenHoursDomain"
      }
    },
    "dropOffDateOpenHoursSummaryString" : {
      "type" : "string"
    },
    "dropOffDateOpenHours" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/carOpenHoursDomain"
      }
    },
    "carVendor" : {
      "$ref" : "#/definitions/carVendorDomain"
    },
    "carCategoryImageURL" : {
      "type" : "string"
    },
    "carCategory" : {
      "type" : "string"
    },
    "carCategoryLocalized" : {
      "type" : "string"
    },
    "carType" : {
      "type" : "string"
    },
    "carTypeLocalized" : {
      "type" : "string"
    },
    "carTypeAttributes" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/carTypeAttributesDomain"
      }
    },
    "specialEquipmentRequests" : {
      "type" : "string"
    },
    "specialEquipmentRequestCaveatText" : {
      "type" : "string"
    },
    "rules" : {
      "$ref" : "#/definitions/carDomainRulesDomain"
    },
    "sharableItemDetailURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "vendorLocationDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name1" : {
      "type" : "string"
    },
    "name2" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "activityTravelerFieldsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "isRedeemer" : {
      "type" : "boolean"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "gender" : {
      "type" : "string"
    },
    "nationalityCountry" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "phoneNumberDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "formatted" : {
      "type" : "string"
    },
    "costText" : {
      "type" : "string"
    },
    "useText" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hoursOfOperationDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "day" : {
      "type" : "string"
    },
    "startTime" : {
      "type" : "string"
    },
    "endTime" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "vendorCustomerServiceOfficeDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "emailAddress" : {
      "type" : "string"
    },
    "phoneCountryCode" : {
      "type" : "string"
    },
    "phoneNumber" : {
      "type" : "string"
    },
    "phoneNumbers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/phoneNumberDomain"
      }
    },
    "hoursOfOperationText" : {
      "type" : "string"
    },
    "hoursOfOperation" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/hoursOfOperationDomain"
      }
    }
  }
}'
        }
    ]},
    "termsAndConditionsDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "instructions" : {
      "type" : "string"
    },
    "knowBeforeYouGo" : {
      "type" : "string"
    },
    "howToRedeem" : {
      "type" : "string"
    },
    "terms" : {
      "type" : "string"
    },
    "cancellationAddendum" : {
      "type" : "string"
    },
    "generalDisclaimer" : {
      "type" : "string"
    },
    "quebecResidentsIndemnityFund" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "activityVoucherDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "id" : {
      "type" : "string"
    },
    "barcodeNumber" : {
      "type" : "string"
    },
    "securityCode" : {
      "type" : "string"
    },
    "barcodeImageURL" : {
      "type" : "string"
    },
    "validForRedemerTypeLocalized" : {
      "type" : "string"
    },
    "validForRedemerTypeEnglish" : {
      "type" : "string"
    },
    "supplierReferenceCode" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "pricePerPassengerDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "keyForCategory" : {
      "type" : "string"
    },
    "numberOfPassengers" : {
      "type" : "integer",
      "format" : "int32"
    },
    "totalBasePrice" : {
      "$ref" : "#/definitions/priceDomain"
    },
    "perPassengerBasePrice" : {
      "$ref" : "#/definitions/priceDomain"
    }
  }
}'
        }
    ]},
    "localisePriceAndPassengerCountDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalBasePriceForSorting" : {
      "$ref" : "#/definitions/priceDomain"
    },
    "localisedPassengerTypeAndCount" : {
      "type" : "string"
    },
    "localisedPrice" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "activityFareDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "pricePerCategory" : {
      "type" : "string"
    },
    "localisedPriceAndPassengerCount" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/localisePriceAndPassengerCountDomain"
      }
    }
  }
}'
        }
    ]},
    "activityDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "bookingStatusText" : {
      "type" : "string"
    },
    "bookingStatusMessage" : {
      "type" : "string"
    },
    "supplierReferenceNumber" : {
      "type" : "string"
    },
    "bookingDate" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "startTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "endTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "paymentModel" : {
      "type" : "string"
    },
    "price" : {
      "$ref" : "#/definitions/activityFareDomain"
    },
    "activityTitle" : {
      "type" : "string"
    },
    "activityDescription" : {
      "type" : "string"
    },
    "activityItemTitle" : {
      "type" : "string"
    },
    "activityItemDescription" : {
      "type" : "string"
    },
    "activityItemTitleEnglish" : {
      "type" : "string"
    },
    "activityDetailsURL" : {
      "type" : "string"
    },
    "activityLocation" : {
      "$ref" : "#/definitions/vendorLocationDomain"
    },
    "redemptionLocations" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/vendorLocationDomain"
      }
    },
    "travelerCountDescription" : {
      "type" : "string"
    },
    "travelers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/activityTravelerFieldsDomain"
      }
    },
    "vendorName" : {
      "type" : "string"
    },
    "vendorCustomerServiceEmail" : {
      "type" : "string"
    },
    "vendorCustomerServiceOffices" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/vendorCustomerServiceOfficeDomain"
      }
    },
    "termsAndConditions" : {
      "$ref" : "#/definitions/termsAndConditionsDomain"
    },
    "voucherPrintURL" : {
      "type" : "string"
    },
    "vouchers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/activityVoucherDomain"
      }
    },
    "sharableItemDetailURL" : {
      "type" : "string"
    },
    "webGetLXCancelDetailPathURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "packagePriceDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "currency" : {
      "type" : "string"
    },
    "subTotal" : {
      "type" : "string"
    },
    "subTotalFormatted" : {
      "type" : "string"
    },
    "taxesAndFees" : {
      "type" : "string"
    },
    "taxesAndFeesFormatted" : {
      "type" : "string"
    },
    "insurance" : {
      "type" : "string"
    },
    "insuranceFormatted" : {
      "type" : "string"
    },
    "coupon" : {
      "type" : "string"
    },
    "couponFormatted" : {
      "type" : "string"
    },
    "obfee" : {
      "type" : "string"
    },
    "obfeeFormatted" : {
      "type" : "string"
    },
    "total" : {
      "type" : "string"
    },
    "totalFormatted" : {
      "type" : "string"
    },
    "savings" : {
      "type" : "string"
    },
    "savingsFormatted" : {
      "type" : "string"
    },
    "bookingFee" : {
      "type" : "string"
    },
    "bookingFeeFormatted" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "packageDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "uniqueID" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "orderNumber" : {
      "type" : "string"
    },
    "orderLineNumber" : {
      "type" : "string"
    },
    "isChangeable" : {
      "type" : "boolean"
    },
    "isLegacy" : {
      "type" : "boolean"
    },
    "price" : {
      "$ref" : "#/definitions/packagePriceDomain"
    },
    "flights" : {
      "$ref" : "#/definitions/flightDomain"
    },
    "hotels" : {
      "$ref" : "#/definitions/hotelDomain"
    },
    "activities" : {
      "$ref" : "#/definitions/activityDomain"
    },
    "cars" : {
      "$ref" : "#/definitions/carDomain"
    },
    "startDate" : {
      "type" : "string"
    },
    "endDate" : {
      "type" : "string"
    },
    "startTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "endTime" : {
      "$ref" : "#/definitions/timeDomain"
    }
  }
}'
        }
    ]},
    "generalComponentDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "comment" : {
      "type" : "string"
    },
    "startDate" : {
      "type" : "string",
      "format" : "date"
    },
    "endDate" : {
      "type" : "string",
      "format" : "date"
    },
    "bookingStatus" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "promotionDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "promotionId" : {
      "type" : "integer",
      "format" : "int32"
    },
    "promotionCode" : {
      "type" : "string"
    },
    "campaignId" : {
      "type" : "integer",
      "format" : "int32"
    },
    "name" : {
      "type" : "string"
    },
    "cruiseCardName" : {
      "type" : "string"
    },
    "fullDescription" : {
      "type" : "string"
    },
    "shortDescription" : {
      "type" : "string"
    },
    "termsAndConditions" : {
      "type" : "string"
    },
    "rank" : {
      "type" : "integer",
      "format" : "int32"
    }
  }
}'
        }
    ]},
    "passengerCruiseDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "passengerNumber" : {
      "type" : "integer",
      "format" : "int32"
    },
    "titleCode" : {
      "type" : "string"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "birthDate" : {
      "type" : "string"
    },
    "gender" : {
      "type" : "string"
    },
    "citizenship" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "pricingSummaryDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ }'
        }
    ]},
    "paymentHistoryDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalAmountReceivedInd" : {
      "type" : "string"
    },
    "currency" : {
      "type" : "string"
    },
    "finalPaymentDueDate" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "cruiseDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "bookingStatus" : {
      "type" : "string"
    },
    "invoiceNumber" : {
      "type" : "string"
    },
    "cruiseLineName" : {
      "type" : "string"
    },
    "shipName" : {
      "type" : "string"
    },
    "departureDate" : {
      "type" : "string"
    },
    "returnDate" : {
      "type" : "string"
    },
    "promotions" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/promotionDomain"
      }
    },
    "pricingSummary" : {
      "$ref" : "#/definitions/pricingSummaryDomain"
    },
    "cruiseLineBkgConfNumber" : {
      "type" : "string"
    },
    "adultPassengers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/passengerCruiseDomain"
      }
    },
    "childPassengers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/passengerCruiseDomain"
      }
    },
    "cabinDetails" : {
      "type" : "string"
    },
    "email" : {
      "type" : "string"
    },
    "customerCareNumber" : {
      "type" : "string"
    },
    "rulesAndRestrictionsLink" : {
      "type" : "string"
    },
    "cruiseLineWebsiteLink" : {
      "type" : "string"
    },
    "paymentHistory" : {
      "$ref" : "#/definitions/paymentHistoryDomain"
    }
  }
}'
        }
    ]},
    "simplifiedTripDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "levelOfDetail" : {
      "type" : "string"
    },
    "tripId" : {
      "type" : "string"
    },
    "apiDetailsURL" : {
      "type" : "string"
    },
    "webDetailsURL" : {
      "type" : "string"
    },
    "title" : {
      "type" : "string"
    },
    "description" : {
      "type" : "string"
    },
    "updateTripNameDescPathURL" : {
      "type" : "string"
    },
    "startTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "endTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "tripCreatedTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "tripUpdatedTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "tripCacheUpdatedTime" : {
      "$ref" : "#/definitions/timeDomain"
    },
    "startDate" : {
      "type" : "string"
    },
    "endDate" : {
      "type" : "string"
    },
    "startDateLocalized" : {
      "type" : "string"
    },
    "endDateLocalized" : {
      "type" : "string"
    },
    "bookingStatus" : {
      "type" : "string"
    },
    "timePeriod" : {
      "type" : "string"
    },
    "rewards" : {
      "$ref" : "#/definitions/rewardsDomain"
    },
    "sharableDetailsURL" : {
      "type" : "string"
    },
    "customerSupport" : {
      "$ref" : "#/definitions/customerSupportDomain"
    },
    "isBookedUsingForeignCurrency" : {
      "type" : "boolean"
    },
    "hotels" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/hotelDomain"
      }
    },
    "flights" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightDomain"
      }
    },
    "cars" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/carDomain"
      }
    },
    "activities" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/activityDomain"
      }
    },
    "packages" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/packageDomain"
      }
    },
    "insurance" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/generalComponentDomain"
      }
    },
    "cruises" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/cruiseDomain"
      }
    },
    "externalCruises" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/cruiseDomain"
      }
    },
    "trains" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/generalComponentDomain"
      }
    },
    "readTripError" : {
      "$ref" : "#/definitions/boolean"
    }
  }
}'
        }
    ]},
    "productTypeDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "m_productType" : {
      "type" : "string"
    },
    "travelocityType" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "userErrorMessageDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "hasPageLevelError" : {
      "type" : "boolean"
    },
    "hasModuleLevelError" : {
      "type" : "boolean"
    },
    "pageLevelErrorMessage" : {
      "type" : "string"
    },
    "moduleLevelErrorMessage" : {
      "type" : "string"
    },
    "moduleName" : {
      "type" : "string"
    },
    "errorKey" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "priceChangeResponseDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "priceIncreased" : {
      "type" : "boolean"
    },
    "previousTotalPrice" : {
      "$ref" : "#/definitions/priceDomain"
    },
    "previousTotal" : {
      "type" : "string"
    },
    "previousTotalFormatted" : {
      "type" : "string"
    },
    "newTotalPrice" : {
      "$ref" : "#/definitions/priceDomain"
    },
    "newTotal" : {
      "type" : "string"
    },
    "newTotalFormatted" : {
      "type" : "string"
    },
    "productType" : {
      "$ref" : "#/definitions/productTypeDomain"
    },
    "rateInfo" : {
      "$ref" : "#/definitions/lodgingPriceDetailsDomain"
    }
  }
}'
        }
    ]},
    "changeErrorResponseDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "serviceErrorCode" : {
      "type" : "string"
    },
    "userErrorMessage" : {
      "$ref" : "#/definitions/userErrorMessageDomain"
    },
    "priceChangeResponse" : {
      "$ref" : "#/definitions/priceChangeResponseDomain"
    }
  }
}'
        }
    ]},
    "errorDomain": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errorCode" : {
      "type" : "integer",
      "format" : "int32"
    },
    "message" : {
      "type" : "string"
    },
    "stackTrace" : {
      "type" : "string"
    },
    "errorCategory" : {
      "type" : "string"
    },
    "errorType" : {
      "type" : "string"
    },
    "fields" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "changeErrorResponse" : {
      "$ref" : "#/definitions/changeErrorResponseDomain"
    }
  }
}'
        }
    ]},
    "flightSearchResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "legs" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightLegJson"
      }
    },
    "offers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightOfferJson"
      }
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "searchCities" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/searchCityJson"
      }
    },
    "obFeesDetails" : {
      "type" : "string"
    },
    "activityId" : {
      "type" : "string"
    },
    "percentDelaysCancellationsURL" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "apiCreateTripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTrip"
    },
    "passengerCategories" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "totalPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "couponDiscount" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "details" : {
      "$ref" : "#/definitions/flightDetailJsonResponse"
    },
    "rules" : {
      "$ref" : "#/definitions/flightDetailedRulesJson"
    },
    "validFormsOfPayment" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/apiPaymentOptionJson"
      }
    },
    "rewardsPoints" : {
      "type" : "boolean"
    },
    "isCustomerTitleRequired" : {
      "type" : "string"
    },
    "expediaRewards" : {
      "$ref" : "#/definitions/expediaRewardsForTripJson"
    },
    "availableInsuranceProducts" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/insurance"
      }
    },
    "selectedInsuranceProduct" : {
      "$ref" : "#/definitions/insurance"
    },
    "coupon" : {
      "$ref" : "#/definitions/mobileCoupon"
    },
    "activityId" : {
      "type" : "string"
    },
    "tealeafTransactionId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "flightDetailJsonResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "offer" : {
      "$ref" : "#/definitions/flightOfferJson"
    },
    "productKey" : {
      "type" : "string"
    },
    "flightRules" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightRulesJson"
      }
    },
    "oldOffer" : {
      "$ref" : "#/definitions/flightOfferJson"
    },
    "priceChangeAmount" : {
      "type" : "string"
    },
    "changedPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "obFeeTotalAmount" : {
      "type" : "string"
    },
    "obFeePrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "legs" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightLegJson"
      }
    }
  }
}'
        }
    ]},
    "imageJsonResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "imageUrl" : {
      "type" : "string"
    },
    "cacheKey" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "airportDropDownDataResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "airport" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/airport"
      }
    },
    "routes" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/route"
      }
    }
  }
}'
        }
    ]},
    "apiCheckoutResponseFlightOkResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTripJson"
    },
    "orderId" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "totalCharges" : {
      "type" : "string"
    },
    "totalChargesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "activityId" : {
      "type" : "string"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    },
    "mobileAirAttachQualifier" : {
      "$ref" : "#/definitions/mobileAirAttachQualifier"
    }
  }
}'
        }
    ]},
    "apiCheckoutResponseFlightPriceChangeResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "flightDetailResponse" : {
      "$ref" : "#/definitions/flightDetailJsonResponse"
    }
  }
}'
        }
    ]},
    "jsonOpaqueHotelSearchResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "totalHotelCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "opaqueHotelList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonOpaqueHotel"
      }
    },
    "opaqueNeighborhoodList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonOpaqueNeighborhood"
      }
    },
    "errorMessage" : {
      "$ref" : "#/definitions/mobileError"
    }
  }
}'
        }
    ]},
    "hotelSearchResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "numberOfRoomsRequested" : {
      "type" : "string"
    },
    "filterUnavailableHotelsRequested" : {
      "type" : "string"
    },
    "totalHotelCount" : {
      "type" : "string"
    },
    "availableHotelCount" : {
      "type" : "string"
    },
    "searchRegionId" : {
      "type" : "string"
    },
    "hotelList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonHotel"
      }
    },
    "opaqueHotelResponse" : {
      "$ref" : "#/definitions/jsonOpaqueHotelSearchResponse"
    },
    "allNeighborhoodsInSearchRegion" : {
      "type" : "string"
    },
    "filteredSearchMatchedNoHotels" : {
      "type" : "string"
    },
    "amenityFilterOptions" : {
      "type" : "string"
    },
    "starOptions" : {
      "type" : "string"
    },
    "priceOptions" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelAmbiguousResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "numberOfMatches" : {
      "type" : "integer",
      "format" : "int32"
    },
    "cityList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonAmbiguousCityMatch"
      }
    }
  }
}'
        }
    ]},
    "jsonGetOfferResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "hotelTagline" : {
      "type" : "string"
    },
    "checkInDate" : {
      "type" : "string"
    },
    "checkOutDate" : {
      "type" : "string"
    },
    "numberOfRoomsRequested" : {
      "type" : "integer",
      "format" : "int32"
    },
    "numberOfNights" : {
      "type" : "string"
    },
    "tripAdvisorRating" : {
      "type" : "string"
    },
    "checkInInstructions" : {
      "type" : "string"
    },
    "shortDescription" : {
      "type" : "string"
    },
    "hotelRoomResponse" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonHotelOffer"
      }
    },
    "signedMapUrl" : {
      "type" : "string"
    },
    "airAttachExpirationTimeSeconds" : {
      "type" : "string"
    },
    "errors" : {
      "$ref" : "#/definitions/mobileError"
    },
    "hotelId" : {
      "type" : "string"
    },
    "hotelName" : {
      "type" : "string"
    },
    "localizedHotelName" : {
      "type" : "string"
    },
    "nonLocalizedHotelName" : {
      "type" : "string"
    },
    "hotelAddress" : {
      "type" : "string"
    },
    "hotelCity" : {
      "type" : "string"
    },
    "hotelStateProvince" : {
      "type" : "string"
    },
    "hotelCountry" : {
      "type" : "string"
    },
    "latitude" : {
      "type" : "string"
    },
    "longitude" : {
      "type" : "string"
    },
    "longDescription" : {
      "type" : "string"
    },
    "photos" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonPhoto"
      }
    },
    "hotelAmenities" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonValueAdd"
      }
    },
    "hotelStarRating" : {
      "type" : "string"
    },
    "hotelStarRatingCssClassName" : {
      "type" : "string"
    },
    "hotelGuestRating" : {
      "type" : "string"
    },
    "totalRecommendations" : {
      "type" : "string"
    },
    "totalReviews" : {
      "type" : "string"
    },
    "percentRecommended" : {
      "type" : "string"
    },
    "telesalesNumber" : {
      "type" : "string"
    },
    "deskTopOverrideNumber" : {
      "type" : "boolean"
    },
    "hotelRenovationText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelMandatoryFeesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelOverviewText" : {
      "$ref" : "#/definitions/textSection"
    },
    "firstHotelOverview" : {
      "type" : "string"
    },
    "hotelAmenitiesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelPoliciesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelFeesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "isVipAccess" : {
      "type" : "boolean"
    },
    "locationDescription" : {
      "type" : "string"
    },
    "locationId" : {
      "type" : "string"
    },
    "regions" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/region"
      }
    },
    "allowedToDisplayRatingAsStars" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonCreateTripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "error" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "warnings" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "tripId" : {
      "type" : "string"
    },
    "userId" : {
      "type" : "string"
    },
    "originalHotelProductResponse" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "newHotelProductResponse" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "airAttachedProductResponse" : {
      "$ref" : "#/definitions/jsonGetProductResponse"
    },
    "loyaltyPoints" : {
      "$ref" : "#/definitions/jsonLoyaltyPoints"
    },
    "expediaRewards" : {
      "$ref" : "#/definitions/expediaRewardsForTripJson"
    },
    "coupon" : {
      "$ref" : "#/definitions/mobileCoupon"
    },
    "userCoupons" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileCoupon"
      }
    },
    "tealeafTransactionId" : {
      "type" : "string"
    },
    "validFormsOfPayment" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/apiPaymentOptionJson"
      }
    }
  }
}'
        }
    ]},
    "apiCheckoutResponseHotelResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTripJson"
    },
    "orderId" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "totalCharges" : {
      "type" : "string"
    },
    "totalChargesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "activityId" : {
      "type" : "string"
    },
    "checkoutResponse" : {
      "$ref" : "#/definitions/checkout"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "apiFieldsResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "paymentFields" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelCancelEnquiryResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "amountPaid" : {
      "type" : "integer",
      "format" : "int32"
    },
    "amountRefund" : {
      "type" : "integer",
      "format" : "int32"
    },
    "hotelRules" : {
      "$ref" : "#/definitions/hotelCancelRules"
    }
  }
}'
        }
    ]},
    "hotelCancelEnquiryV2Response": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "cancelEnquiryInfoList" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/hotelCancelEnquiryInfo"
      }
    },
    "activityId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonGetProductResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "checkInDate" : {
      "type" : "string"
    },
    "checkOutDate" : {
      "type" : "string"
    },
    "adultCount" : {
      "type" : "integer",
      "format" : "int32"
    },
    "numberOfNights" : {
      "type" : "string"
    },
    "numberOfRooms" : {
      "type" : "string"
    },
    "hotelId" : {
      "type" : "string"
    },
    "hotelName" : {
      "type" : "string"
    },
    "localizedHotelName" : {
      "type" : "string"
    },
    "nonLocalizedHotelName" : {
      "type" : "string"
    },
    "largeThumbnailUrl" : {
      "type" : "string"
    },
    "thumbnailUrl" : {
      "type" : "string"
    },
    "hotelAddress" : {
      "type" : "string"
    },
    "latitude" : {
      "type" : "string"
    },
    "longitude" : {
      "type" : "string"
    },
    "hotelCity" : {
      "type" : "string"
    },
    "hotelStateProvince" : {
      "type" : "string"
    },
    "hotelCountry" : {
      "type" : "string"
    },
    "hotelStarRating" : {
      "type" : "string"
    },
    "hotelRoomResponse" : {
      "$ref" : "#/definitions/jsonHotelOffer"
    },
    "supplierType" : {
      "type" : "string"
    },
    "accessibilityAmenities" : {
      "type" : "array"
    },
    "isVipAccess" : {
      "type" : "boolean"
    },
    "tealeafTransactionId" : {
      "type" : "string"
    },
    "bigImageUrl" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonOpaqueGetProductResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "checkInDate" : {
      "type" : "string"
    },
    "checkOutDate" : {
      "type" : "string"
    },
    "adultCount" : {
      "type" : "string"
    },
    "numberOfNights" : {
      "type" : "string"
    },
    "numberOfRoomsRequested" : {
      "type" : "integer",
      "format" : "int32"
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "hotelRoomResponse" : {
      "$ref" : "#/definitions/jsonOpaqueHotelSearchResponse"
    }
  }
}'
        }
    ]},
    "jsonHotelInformationResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "hotelId" : {
      "type" : "string"
    },
    "hotelName" : {
      "type" : "string"
    },
    "localizedHotelName" : {
      "type" : "string"
    },
    "nonLocalizedHotelName" : {
      "type" : "string"
    },
    "hotelAddress" : {
      "type" : "string"
    },
    "hotelCity" : {
      "type" : "string"
    },
    "hotelStateProvince" : {
      "type" : "string"
    },
    "hotelCountry" : {
      "type" : "string"
    },
    "latitude" : {
      "type" : "string"
    },
    "longitude" : {
      "type" : "string"
    },
    "longDescription" : {
      "type" : "string"
    },
    "photos" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonPhoto"
      }
    },
    "hotelAmenities" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonValueAdd"
      }
    },
    "hotelStarRating" : {
      "type" : "string"
    },
    "hotelStarRatingCssClassName" : {
      "type" : "string"
    },
    "hotelGuestRating" : {
      "type" : "string"
    },
    "totalRecommendations" : {
      "type" : "string"
    },
    "totalReviews" : {
      "type" : "string"
    },
    "percentRecommended" : {
      "type" : "string"
    },
    "telesalesNumber" : {
      "type" : "string"
    },
    "deskTopOverrideNumber" : {
      "type" : "boolean"
    },
    "hotelRenovationText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelMandatoryFeesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelOverviewText" : {
      "$ref" : "#/definitions/textSection"
    },
    "firstHotelOverview" : {
      "type" : "string"
    },
    "hotelAmenitiesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelPoliciesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "hotelFeesText" : {
      "$ref" : "#/definitions/textSection"
    },
    "isVipAccess" : {
      "type" : "boolean"
    },
    "locationDescription" : {
      "type" : "string"
    },
    "locationId" : {
      "type" : "string"
    },
    "regions" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/region"
      }
    },
    "allowedToDisplayRatingAsStars" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "hotelConfirmCancelResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "statusResponse" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "jsonCancellationRoomResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "refundPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "penaltyPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "error" : {
      "$ref" : "#/definitions/mobileError"
    }
  }
}'
        }
    ]},
    "jsonCancellationResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "guidToResponseMap" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/jsonCancellationRoomResponse"
      }
    }
  }
}'
        }
    ]},
    "packageHotelOfferResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ }'
        }
    ]},
    "packageFlightJsonResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ }'
        }
    ]},
    "packageCreateTripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{ }'
        }
    ]},
    "apiCheckoutResponsePackageResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTripJson"
    },
    "orderId" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "totalCharges" : {
      "type" : "string"
    },
    "totalChargesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "packagePricing" : {
      "$ref" : "#/definitions/packageTripPricing"
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "activityId" : {
      "type" : "string"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "tripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "apiVersion" : {
      "type" : "string"
    },
    "responseType" : {
      "type" : "string"
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/errorDomain"
      }
    },
    "responseData" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/simplifiedTripDomain"
      }
    }
  }
}'
        }
    ]},
    "tripTitleDescriptionUpdateResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "status" : {
      "type" : "string"
    },
    "errorMessage" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "signInResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "tuid" : {
      "type" : "integer",
      "format" : "int32"
    },
    "expUserId" : {
      "type" : "integer",
      "format" : "int32"
    },
    "email" : {
      "type" : "string"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    },
    "success" : {
      "type" : "boolean"
    },
    "errors" : {
      "$ref" : "#/definitions/mobileError"
    },
    "detailedStatus" : {
      "type" : "string"
    },
    "detailedStatusMsg" : {
      "type" : "string"
    },
    "phoneNumbers" : {
      "$ref" : "#/definitions/jsonPhone"
    },
    "storedCreditCards" : {
      "$ref" : "#/definitions/jsonUserCreditCardInformation"
    },
    "homeAddress" : {
      "$ref" : "#/definitions/jsonAddress"
    },
    "loyaltyMembershipNumber" : {
      "type" : "string"
    },
    "loyaltyMembershipActive" : {
      "type" : "boolean"
    },
    "loyaltyPointsAvailable" : {
      "type" : "boolean"
    },
    "loyaltyPointsPending" : {
      "type" : "boolean"
    },
    "loyaltyMembershipName" : {
      "type" : "string"
    },
    "membershipTierName" : {
      "type" : "string"
    },
    "loyaltyTierCredits" : {
      "type" : "string"
    },
    "frequentGuestMembership" : {
      "$ref" : "#/definitions/jsonFrequentGuestMembership"
    },
    "isSmokingPreferred" : {
      "type" : "boolean"
    },
    "passports" : {
      "$ref" : "#/definitions/jsonPassport"
    },
    "tsaDetails" : {
      "$ref" : "#/definitions/jsonTsaDetails"
    },
    "seatPreference" : {
      "type" : "string"
    },
    "specialAssistance" : {
      "type" : "string"
    },
    "emergencyContact" : {
      "$ref" : "#/definitions/jsonEmergencyContact"
    },
    "frequentFlyerMemberships" : {
      "$ref" : "#/definitions/jsonFrequentFlyerMembership"
    },
    "associatedTravelers" : {
      "$ref" : "#/definitions/jsonAssociatedTraveler"
    },
    "activityId" : {
      "type" : "string"
    },
    "travelocityItinPath" : {
      "type" : "string"
    },
    "userCoupons" : {
      "type" : "string"
    },
    "loyaltyBonusPoints" : {
      "type" : "integer",
      "format" : "int32"
    }
  }
}'
        }
    ]},
    "createUserResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "tuid" : {
      "type" : "string"
    },
    "email" : {
      "type" : "string"
    },
    "firstName" : {
      "type" : "string"
    },
    "middleName" : {
      "type" : "string"
    },
    "lastName" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "updateTravelerResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "succeeded" : {
      "type" : "boolean"
    },
    "tuid" : {
      "type" : "string"
    },
    "activityId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "associateUserToTripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTripJson"
    },
    "rewardsPoints" : {
      "type" : "string"
    },
    "activityId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carSearchResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "pickupTime" : {
      "type" : "string"
    },
    "dropOffTime" : {
      "type" : "string"
    },
    "offers" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/rentalOffer"
      }
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "activityId" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "carCreateTripResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "tripId" : {
      "type" : "string"
    },
    "itineraryNumber" : {
      "type" : "integer",
      "format" : "int32"
    },
    "newTotalPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "carProduct" : {
      "$ref" : "#/definitions/rentalProduct"
    },
    "oldCarProduct" : {
      "$ref" : "#/definitions/rentalProduct"
    },
    "activityId" : {
      "type" : "string"
    },
    "validFormsOfPayment" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/apiPaymentOptionJson"
      }
    }
  }
}'
        }
    ]},
    "apiCheckoutResponseCarsResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "newTrip" : {
      "$ref" : "#/definitions/apiNewTripJson"
    },
    "orderId" : {
      "type" : "string"
    },
    "currencyCode" : {
      "type" : "string"
    },
    "totalCharges" : {
      "type" : "string"
    },
    "totalChargesPrice" : {
      "$ref" : "#/definitions/mobilePrice"
    },
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/mobileError"
      }
    },
    "activityId" : {
      "type" : "string"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
    "apiErrorJsonResponse": { "all": [
        {
          "header": "Raw JSON Model",
          "syntax": "javascript",
          "content": '{
  "properties" : {
    "errors" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/flightServiceError"
      }
    },
    "activityId" : {
      "type" : "string"
    },
    "debugTealeafInfo" : {
      "type" : "string"
    }
  }
}'
        }
    ]},
  }
}
