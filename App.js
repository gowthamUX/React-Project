import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Seacrh
 * - RestaurantContainer
 *   - RestaurantCard
 *      -image
 *      -name of res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Contact
 */

const Header = () => {
    return(
        <div className="header">
            <div className ="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {

    const {resData} = props

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="res-logo" 
            alt= "res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4> {rcostForTwo}</h4>
            <h4> {avgRating}</h4>
        </div>  
    )
}

const resList = [
    {
        info: {
            id: "711710",
            name: "Satti Babu Biryani",
            cloudinaryImageId: "ab9be6f903ec7e41ebe7ad996a90189b",
            locality: "KPHB Phase",
            areaName: "Kukatpally",
            costForTwo: "₹350 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Andhra"
            ],
            avgRating: 3.7,
            feeDetails: {
                restaurantId: "711710",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2600
            },
            parentId: "254591",
            avgRatingString: "3.7",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 12,
                lastMileTravel: 0.9,
                serviceability: "SERVICEABLE",
                slaString: "12 mins",
                lastMileTravelString: "0.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-17 23:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/satti-babu-biryani-kphb-phase-kukatpally-hyderabad-711710",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "647386",
            name: "Meghana Foods",
            cloudinaryImageId: "e9c9a3800fa5c5e45b6045b0c7ed5214",
            locality: "Allwyn Colony",
            areaName: "Kukatpally",
            costForTwo: "₹600 for two",
            cuisines: [
                "Ice Cream",
                "Beverages",
                "Biryani",
                "Chinese",
                "Indian"
            ],
            avgRating: 2.4,
            feeDetails: {
                restaurantId: "647386",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 5100
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5100
            },
            parentId: "635",
            avgRatingString: "2.4",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-18 08:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/meghana-foods-allwyn-colony-kukatpally-hyderabad-647386",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "151511",
            name: "Sree Harsha Delux Mess",
            cloudinaryImageId: "yljlambpvjtgidnagdzz",
            locality: "Housing Board Colony",
            areaName: "Kukatpally",
            costForTwo: "₹250 for two",
            cuisines: [
                "South Indian",
                "Biryani"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "151511",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2600
            },
            parentId: "19618",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 13,
                lastMileTravel: 1.1,
                serviceability: "SERVICEABLE",
                slaString: "13 mins",
                lastMileTravelString: "1.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-17 16:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/sree-harsha-delux-mess-housing-board-colony-kukatpally-hyderabad-151511",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "489242",
            name: "Big Bowl",
            cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
            locality: "Metro Station",
            areaName: "Kukatpally",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            avgRating: 3.5,
            feeDetails: {
                restaurantId: "489242",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 3800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3800
            },
            parentId: "434792",
            avgRatingString: "3.5",
            totalRatingsString: "500+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 4.7,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "4.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-18 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/big-bowl-metro-station-kukatpally-hyderabad-489242",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "433768",
            name: "Great Indian Khichdi by EatFit",
            cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
            locality: "HYDERNAGAR VILLAGE",
            areaName: "Kukatpally",
            costForTwo: "₹200 for two",
            cuisines: [
                "Home Food",
                "Indian",
                "North Indian",
                "Healthy Food",
                "Snacks",
                "Desserts",
                "Rajasthani",
                "South Indian",
                "Maharashtrian",
                "Sweets"
            ],
            avgRating: 4,
            veg: true,
            feeDetails: {
                restaurantId: "433768",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2600
            },
            parentId: "319582",
            avgRatingString: "4.0",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "20 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-17 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ],
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-hydernagar-village-kukatpally-hyderabad-433768",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "34633",
            name: "Srikanya",
            cloudinaryImageId: "xvk2jlbijyejf09fdqkp",
            locality: "Opposite Aparna Towers",
            areaName: "Hanuman Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Biryani",
                "Andhra"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "34633",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 5800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5800
            },
            parentId: "7317",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-17 22:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/srikanya-opposite-aparna-towers-hanuman-nagar-hyderabad-34633",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "390164",
            name: "NH1 Bowls - Highway To North",
            cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
            locality: "Kukatpally",
            areaName: "RAJU NAGAR",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "390164",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 3200
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 3200
            },
            parentId: "22452",
            avgRatingString: "4.0",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "23-33 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-18 02:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-kukatpally-raju-nagar-hyderabad-390164",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "290680",
            name: "Chutneys hub",
            cloudinaryImageId: "r3nsfltko8u1uj9r81gf",
            locality: "Kphb 9th phase",
            areaName: "Kukatpally",
            costForTwo: "₹250 for two",
            cuisines: [
                "Indian",
                "Biryani"
            ],
            avgRating: 3.9,
            feeDetails: {
                restaurantId: "290680",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2600
            },
            parentId: "19382",
            avgRatingString: "3.9",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 13,
                lastMileTravel: 1,
                serviceability: "SERVICEABLE",
                slaString: "13 mins",
                lastMileTravelString: "1.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-18 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/chutneys-hub-kphb-9th-phase-kukatpally-hyderabad-290680",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "696827",
            name: "Leon's - Burgers & Wings (Leon Grill)",
            cloudinaryImageId: "f5d51ef6af9b698ec1265b389f80b75c",
            locality: "Nexus Hyderabad Mall, Balnagar",
            areaName: "Kukatpally",
            costForTwo: "₹500 for two",
            cuisines: [
                "American",
                "Snacks"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "696827",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 2600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 2600
            },
            parentId: "371281",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 16,
                lastMileTravel: 0.8,
                serviceability: "SERVICEABLE",
                slaString: "16 mins",
                lastMileTravelString: "0.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-10-17 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {
            context: "seo-data-c18936f6-3670-4b3b-bd78-2ca127fa6e7c"
        },
        cta: {
            link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-nexus-mall-balnagar-kukatpally-hyderabad-696827",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Seacrh</div>

            <div className="res-conatainer">

                <RestaurantCard resData = {resList[0]}/>

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">

            <Header/>

            <Body/>
          
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
