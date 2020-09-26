const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: "cc99cf1bc92c4d34bf2952f347776516",
               client_secret: "a60a679589ec4f59b0f30abc98ba6210",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;
