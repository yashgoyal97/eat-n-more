export const APP_DATA =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8760239&lng=77.6179861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const getResUrl = (restaurantId) => {
  return restaurantId
    ? `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8760239&lng=77.6179861&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    : null;
};

export const UPDATE_RES_DATA =
  "https://www.swiggy.com/dapi/restaurants/list/update";

export const REQ_PAYLOAD_SCROLL = {
  lat: "12.8760239",
  lng: "77.6179861",
  nextOffset: "COVCELQ4KICwip3RuIaDWjCnEzgD",
  widgetOffset: {
    NewListingView_category_bar_chicletranking_TwoRows: "",
    NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    Restaurant_Group_WebView_PB_Theme: "",
    Restaurant_Group_WebView_SEO_PB_Theme: "",
    collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "",
    inlineFacetFilter: "",
    restaurantCountWidget: "",
  },
  filters: {},
  seoParams: {
    seoUrl: "https://www.swiggy.com/",
    pageType: "FOOD_HOMEPAGE",
    apiName: "FoodHomePage",
  },
  page_type: "DESKTOP_WEB_LISTING",
  _csrf: "ywUdb89spXSt-3rBvXSQMNuDYKKMKhMYeMHetdrQ",
};
