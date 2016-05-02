
## `OO.Pulse.JW7Plugin(jwPlayer, pulseHostSettings, onAdClickedCallback)`

Ooyala Pulse plugin for JW7. 

 * **Parameters:**
   * `jwPlayer` — JW7 player instance
   * `pulseHostSettings` — Pulse host settings : host URL, persistent ID and device container
   * `onAdClickedCallback` — called when an ad is clicked. If null the Plugin will automatically open the clickthrough URL and track the clickThrough event. The method will be given the clickthrough URL as parameter (see the [main README](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7) file for an eaxmple)
 * **Constructor**

## `player`

The JW player instance.

## `adPlayer`

The Ooyala Pulse ad player controller. To get the full ad player API, check out our [API documentation](http://pulse-sdks.ooyala.com/pulse-html5/latest/index.html).

## `initSession(sessionSettings)`

Initialize a new session. This is typically done in the "playlistItem" event listener.

 * **Parameters:** `sessionSettings` — `OO.Pulse.JW7Plugin.SessionSettings` — The session settings list is available in the [main README.md](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7) file.


## `addEventListener(event, callback)`

Add an event listener to the Pulse ad player.

 * **Parameters:**
   * `event` — to listen to
   * `callback` — function

## `removeEventListener(event, callback)`

Remove an event listener.

 * **Parameters:**
   * `event` — player event
   * `callback` — to remove

## `destroy()`

Destroy the plugin and the ad player.

## `stopSession()`

Stop the ad session. No more ads will be displayed in the video.

## `isInLinearAdMode()`

Know if the ad player is currently in a linear ad break

 * **Returns:** `boolean` 
