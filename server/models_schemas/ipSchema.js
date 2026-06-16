const { Schema } = require('mongoose');

const ipSchema = new Schema({
  ip: String,
  note: String,
  flagged: {
    type: Boolean,
    default: false
  },
  threat_score: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  city: String,
  country_code: String,
  subdivision: String,
  latitude: Number,
  longitude: Number,
  is_anycast: Boolean,
  is_satellite: Boolean,
  asn: {
    asn: String,
    route: String,
    netname: String,
    name: String,
    country_code: String,
    domain: String,
    type: String,
    rir: String
  },
  privacy: {
    is_abuser: Boolean,
    is_anonymous: Boolean,
    is_bogon: Boolean,
    is_hosting: Boolean,
    is_icloud_relay: Boolean,
    is_proxy: Boolean,
    is_tor: Boolean,
    is_vpn: Boolean
  },
  hosting: {
    provider: String,
    domain: String,
    network: String
  },
  company: {
    name: String,
    domain: String,
    country_code: String,
    type: String
  },
  abuse: {
    address: String,
    country_code: String,
    email: String,
    name: String,
    network: String,
    phone: String
  }
});

module.exports = { ipSchema };