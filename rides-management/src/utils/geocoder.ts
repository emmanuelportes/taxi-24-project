import node_geocoder, { Providers }  from "node-geocoder";

const options : node_geocoder.Options = {
    provider: process.env.GEOCODER_PROVIDER as Providers,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = node_geocoder(options);


export default geocoder; 