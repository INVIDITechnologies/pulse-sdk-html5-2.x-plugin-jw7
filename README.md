# Pulse plugin for JW7


# Introduction
The JW7 Pulse plugin makes it easy to create an integration between the Pulse ad server and your JW7 player. The plugin is built on top of the Pulse HTML5 ad player, which is part of INVIDI's HTML5 Pulse SDK.


## Build
    npm install
    grunt

## Getting started

>:warning: To integrate, you must have a JW Player version 7.x up and running on your site, a Pulse account and a unique ID (pulseHost).

1. Load the HTML5 Pulse SDK on the page with your JW player.

 ```
 <script type="text/javascript" src="http://service.videoplaza.tv/proxy/pulse-sdk-html5/2.1/latest.min.js"></script>
 ```
 >:bulb: You can download and host this javascript library yourself, but it is recommended to load it from the described location to get all bug fixes and latest versions automatically.

1. Load the Pulse JW7 plugin after the HTML5 Pulse SDK on the page with your JW player. Use the jw7-pulse.js file in the src folder directly, or build the project first to use the minified version (pulse-jw7-x.x.x.min.js, where x.x.x is the version number) in the dist folder.

  ```
  <script type="text/javascript" src="http://your_hosting_location/jw7-pulse.js"></script>
  ```
  or
  ```
  <script type="text/javascript" src="http://your_hosting_location/pulse-jw7-x.x.x.min.js"></script>
  ```

1. Optionally, load the skin.js file on the page with your JW player, to show a default skin containing control buttons for the ad player.
  ```
  <script type="text/javascript" src="http://your_hosting_location/js/skin.js"></script>
  ```
  The skin for the ad player is located at [HTML5 Ad Player Skins](https://github.com/INVIDITechnologies/pulse-sdk-html5-2.x-skins), and all resources must be hosted on your site to use the skin.

1. Create a new instance of the plugin, passing the JW player instance and your Pulse global settings as parameters.

 ```
 var myJW7Plugin = new OO.Pulse.JW7Plugin(myJWPlayer, { pulseHost: "http://my-pulse-host.videoplaza.tv",  deviceContainer: deviceContainer, persistendId: persistentId});
 ```

1. Use `initSession` to initialize a new ad session and associate ads with the content selected for playback by the viewer. This call is typically done in the `playlistItem` event listener of the JW player. The session settings include the tags and categories of your ads. (See the [Session Settings](#session-settings) section).

 ```
 myJWPlayer.on("playlistItem", function () {
                myJW7Plugin.initSession(sessionSettings);
            });
 ```

## Handling ad clickthrough behavior

By default, the plugin automatically pauses the ad player and opens the click through link when an ad is clicked by the viewer. However, if you want to override that behavior, a callback can be given to the plugin when it is created:
```
var myJW7Plugin = new OO.Pulse.JW7Plugin(myJWPlayer, pulseSettings, function(clickThroughURL){ console.log("the ad was clicked!"});
```

If you open the clickthrough URL, be sure to call `adClickThroughOpened` on the plugin's `adPlayer` object to correctly track the event in Pulse.
```
myJW7Plugin.adPlayer.adClickThroughOpened();
```

## Controlling the ad player

The [Pulse HTML5 ad player](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.AdPlayerController.html) is a public property of the the plugin and can be controlled directly. For example:
```
myJW7Plugin.adPlayer.pause();
```

## Session settings

The sessionSettings object in the JW7 plugin is a combination of contentMetadata and requestSettings, used by the Pulse SDK. You can see the description of these objects  [here](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.html).

* `category` : <string\> Content category is used by Pulse to target ads and determine
    the ad insertion policy. The content category is represented by either its unique id or one
    of its aliases set in Pulse.
* `contentForm` : <[OO.Pulse.ContentForm](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.html#.ContentForm)\>  Content form is used to determine the ad insertion policy.
* `id` : <string\>  Pulse content id. Id is used to identify the content to third parties.
* `contentPartner`: <string\>  Pulse content partner. Content partners can be used by
    Pulse to target ads. The content partner is represented by either its unique id or one of its
    aliases set in Pulse.
* `duration`: <number\>  The duration of the content selected by the viewer. This value cannot be negative.
* `flags` : <string[]\>  Pulse flags. Because flags override Pulse's ad insertion policy, they
    should be used with caution. For more information talk to your contact at INVIDI. Supported flags:
    nocom, noprerolls, nomidrolls, nopostrolls, nooverlays, noskins.
* `tags` : <string[]\>   Pulse content tags, used to target specific ads.
* `customParameters`: <object\>  The custom parameters to add to the
    session request. Parameters with names containing invalid characters are omitted.
    These custom parameters are added to the ad server request URL in the style
    of "cp.[parameter_name]=[parameter_value]".
* `height` : <number\>  Height in pixels of the video area where ads should be shown.
* `maxBitRate` : <number\>  The maximum bitrate of the media files in the ad response.
* `maxLinearBreakDuration`: <number\>  The maximum duration in seconds of linear ad breaks.
* `linearPlaybackPositions` : <number[]\> An array of numbers which defines at what points in time linear ads should be shown.
* `nonlinearPlaybackPositions`: <number[]\>  An array of numbers which defines at what points in time non-linear ads should be shown.
* `insertionPointFilter` : <[OO.Pulse.InsertionPointType](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.html#.InsertionPointType__anchor)[]\>  If not set, the response may include every kind of insertion point. If set, only the types provided are requested.
* `width` : <number\>  Width in pixels of the video area where ads should be shown.
* `referrerUrl` : <string\>  Overrides the HTTP header's referrer property.
* `linearSlotSize` : <number\>  Overrides the number of linear ads per slot. Using this affects the predictability of the Pulse forecast functionality. Use with caution.
* `enforceCacheBusting` : <boolean\> If set to false, a randomized cache busting parameter is not added to VAST 2.0 tracking URLs which are missing the [CACHEBUSTING] macro. If not set, or set to true (default), the parameter is added.
* `useVASTSkipOffset` : <boolean\> If set to true, skip offset information provided in third party VAST tickets determines the skip behaviour of third party ads. If not set, or set to false (default), the insertion policy configured in Pulse determines the skip behaviour instead.
* `seekMode` : <[OO.Pulse.SeekMode](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.html#.SeekMode)\> Determines how the ad session behaves when the viewer seeks past one or more ad breaks. If not provided, it defaults to `IGNORE.
* `preferredMediaFormat` : <[OO.Pulse.PreferredMediaFormat](http://pulse-sdks.videoplaza.com/pulse-html5/latest/OO.Pulse.html#.PreferredMediaFormat)\> If set, the media file with the preferred media format is ranked at the top of the list of the ad's eligible media files.

# Disclaimer
_Provision of the plugin is limited to delivery and integration of the plugin, and does not include any approvals, licenses, consents, permissions (collectively, “Third Party Rights”), and/or related fees (“Third Party Fees”) that may be necessary for use of and integration with JW Player. Company is responsible for obtaining and maintaining Third Party Rights and paying Third Party Fees, if any, for use of and integration with JW Player._
