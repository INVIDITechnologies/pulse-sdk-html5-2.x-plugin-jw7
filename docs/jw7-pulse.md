
## Class `OO.Pulse.JW7Plugin(jwPlayer, pulseHostSettings, onAdClickedCallback)`

Ooyala Pulse plugin for JW7.

 * **Parameters:**
   * `jwPlayer` — JW7 player instance
   * `pulseHostSettings` — Pulse host settings: host URL, persistent ID and device container
   * `onAdClickedCallback` — called when an ad is clicked. If null the Plugin automatically opens the clickthrough URL and tracks the clickThrough event. The  clickthrough URL is passed as parameter in the method (see the [main README](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7) file for an example)
 * **Constructor**

## Properties

### `player`

The JW7 player instance.

### `adPlayer`

The Ooyala Pulse ad player controller. To get the full ad player SDK, check out the [SDK documentation](http://pulse-sdks.ooyala.com/pulse-html5/latest/index.html).

## Methods

### `initSession(sessionSettings)`

Initialize a new session. This is typically done in the `playlistItem` event listener of the JW player.

 * **Parameters:** `sessionSettings` — `OO.Pulse.JW7Plugin.SessionSettings` — The session settings list is available in the [main README](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7) file.


### `addEventListener(event, callback)`

Add an event listener to the Pulse ad player to access event data or to add your own logic to the event handling. All ad player events are listed [here](http://pulse-sdks.ooyala.com/pulse-html5/latest/OO.Pulse.AdPlayer.Events.html).

 * **Parameters:**
   * `event` — event to listen to
   * `callback` — function

For example:
```
myJW7Plugin.addEventListener(OO.Pulse.AdPlayer.Events.LINEAR_AD_STARTED, function(event, eventData){
 var currentAd = eventData.ad;
 });
```

### `removeEventListener(event, callback)`

Remove an event listener.

 * **Parameters:**
   * `event` — player event
   * `callback` — callback to remove

### `destroy()`

Destroy the plugin and the ad player. Call this method in case the page is also used to display other content where you no longer need the JW7 player and the player is removed from the page.

### `extendSession(sessionSettings, onCompleteCallback)`

Extend the existing ad session. This enables ad-hoc ad calls (such as dynamically inserting midrolls, for example).

* **Parameters:**
  * `sessionSettings` — `OO.Pulse.JW7Plugin.SessionSettings` — The session settings list is available in the [main README](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7) file.
  * `onCompleteCallback`- `function` - Callback called when the session has been extended.
   
### `stopSession()`

Stop the ad session. No more ads will be displayed in the video.

### `isInLinearAdMode()`

Know if the ad player is currently in a linear ad break

 * **Returns:** `boolean`
