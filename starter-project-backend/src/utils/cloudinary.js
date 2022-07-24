const cloudinary = require("cloudinary").v2;
const cloud_name = "personalimageupload";
const api_key = "432777427965455";
const api_secret = "uFcUbzerNMOfXr_cs1m3xzVSSyU";

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

module.exports = cloudinary;
