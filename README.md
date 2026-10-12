# Platform 9 — A little Japan rail adventure

A small, no-build browser game about wandering a simplified Japanese rail map, taking short train rides, and collecting station stamps along the way.

## Run it

Open `index.html` in a modern browser, or serve this folder locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## How to play

- Start in Tokyo and choose one of the connected stations from the map or the **Next stops** list.
- Ride one station at a time; every new stop earns a station stamp.
- Your current station and stamps are saved in your browser. Use **Start over** to clear your collection and return to Tokyo.

This is a playful, simplified map. It does not show real timetables, fares, or exact operating routes. The fonts are loaded from Google Fonts when a network connection is available; the app still works with system fonts offline.
