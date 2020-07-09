const apiKey =
  "ZuCtPrATZCADwg1y4P8wwIXH98VHDcWvLkrNO7_aDloBPlSG4bBsBv6GEMZUxggCIpJbQrznag3jjz7eObYNjyN60LtmHKwCe43LtJY8zrzyQDjNeCxuOEx-CVcGX3Yx";

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}');
    }
};