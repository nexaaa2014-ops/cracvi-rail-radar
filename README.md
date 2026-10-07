# Cracvi Rail Radar

Live train tracking map for Indian Railways, built by Outer Media Group (OMG) under Nexora Games & Apps.

## Features
- Live train positions on an interactive map
- Arrows point in the train's direction of travel
- Search by train number or name
- Tap a train to see its current and next station
- Works on phones, no install needed

## How it works
- `index.html` is the whole app (HTML, CSS and JS in one file)
- `netlify/functions/trains.js` fetches live data from the RailRadar API and keeps the API key on the server
- `netlify/functions/config.js` sends the MapTiler map address to the app
- `netlify.toml` tells Netlify where the functions are

## Setup on Netlify
1. Import this repo into Netlify from GitHub
2. Add these environment variables in Site configuration:
   - `RAILRADAR_API_KEY`: your RailRadar API key
   - `MAPTILER_KEY`: your MapTiler API key
3. Deploy. If you add or change a variable, trigger a new deploy

## Notes
- Live data is cached for 15 minutes to protect the RailRadar request limit
- In your MapTiler dashboard, restrict the key to your site's address
- Without keys, the app falls back to demo trains and the free OpenStreetMap map

## Credits
Rail data: RailRadar. Map: MapTiler and OpenStreetMap contributors.
