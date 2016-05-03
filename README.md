# Ooyala Pulse plugin for JW7


# Introduction
The JW7 Pulse plugin lets you easily use JW7 with the [HTML5 Ooyala Pulse SDK](http://pulse-sdks.ooyala.com).


## Build
    npm install
    grunt

## Getting started

Create a new instance of the plugin, passing the JW player instance and your Pulse global settings as parameters.

```
var myJW7Plugin = new OO.Pulse.JW7Plugin(myJWPlayer, { pulseHost: "http://my-pulse-host.videoplaza.tv", deviceContainer: deviceContainer, persistendId: persistentId});
```

To initialise a new ad session, use the `initSession` method to associate ads with the content being played by the ad player. This call can typically be in the `playlistItem` event callback of the JW player. The session settings include the tags, categories of your ads. (See the Session Settings section)
 
 ```
 myJWPlayer.on("playlistItem", function () {
                myJW7Plugin.initSession(sessionSettings);
            });
 ```

The [Pulse HTML5 ad player](http://pulse-sdks.ooyala.com/pulse-html5/latest/OO.Pulse.AdPlayerController.html) is a public property of the the plugin, it can be controlled directly
```
myJW7Plugin.adPlayer.pause();
```
    
By default, the plugin will automatically pause the ad player and open the click through link when it is clicked. However, if you want to override that behaviour, a callback can be given
to the plugin when it is created:
```
var myJW7Plugin = new OO.Pulse.JW7Plugin(myJWPlayer, pulseSettings, function(clickThroughURL){ console.log("the ad was clicked!"});
```
If you open the clickthrough URL, be sure to call `adClickThroughOpened` on the plugin's `adPlayer` object so correct tracking can be done.
```
myJW7Plugin.adPlayer.adClickThroughOpened();
```
## Session settings


* `category` : \<string\> content category is used by Ooyala Pulse to target ads and determine
    the ad insertion policy. The content category can be represented by either its unique id or one
    of its aliases set in Ooyala Pulse.
* `contentForm` : \<[OO.adrequest.AdRequester.ContentForm](http://pulse-sdks.ooyala.com/html5_2/latest/videoplaza.adrequest.AdRequester.html#toc4__anchor)>  Content form is used to determine the ad insertion policy.
* `id` : \<string>  Ooyala Pulse content id. Id is used to identify the content to third parties.
* `contentPartner`: \<string>  Ooyala Pulse content partner. Content partners can be used by
    Ooyala Pulse to target ads. The content partner can be represented by either its unique id or one of its
    aliases set in Ooyala Pulse.
* `duration`: \<number>  This value cannot be negative.
* `flags` : \<string[]>  Ooyala Pulse flags. Since flags override Ooyala Pulse's ad insertion policy, they
    should be used with caution. For more information talk to your contact at Ooyala. Supported flags:
    nocom, noprerolls, nomidrolls, nopostrolls, nooverlays, noskins.
* `tags` : \<string[]>   Ooyala Pulse content tags, used to target specific ads.
* `customParameters`: \<object>  The Custom parameters to add to the
    session request. Parameters with names containing invalid characters are omitted.
    These custom parameters are added to the adserver request URL in the style
    of "cp.[parameter_name]=[parameter_value]".
* `height` : \<number>  Height in pixels of the video area where ads should be shown.
* `maxBitRate` : \<number>  The maximum bitrate of the media files in the ad response.
* `linearPlaybackPositions` : \<number[]> An Array of numbers which define at what points in time linear ads should be shown.
* `nonlinearPlaybackPositions`: \<number[]>  An Array of numbers which define at what points in time non-linear ads should be shown.
* `insertionPointFilter` : \<[OO.adrequest.AdRequester.InsertionPointType](http://pulse-sdks.ooyala.com/html5_2/latest/videoplaza.adrequest.AdRequester.html#toc5__anchor)>  If not set, the request is for every kind of insertion point. If set, only the types provided are requested.
* `width` : \<number>  Width in pixels of the video area where ads should be shown.
* `referrerUrl` : \<string>  Overrides the HTTP header's referrer property.
* `linearSlotSize` : \<number>  Overrides the number of linear ads per slot.
    Using this affects the predictability of the Ooyala Pulse forecast functionality. Use with caution.



The sessionSettings object is a combination of contentMetadata and requestSettings, used by the Pulse SDK. You can see their description [here](http://pulse-sdks.ooyala.com/pulse-html5/latest/OO.Pulse.html)
# API Docs
The full API docs are available in the [wiki](https://github.com/ooyala/pulse-sdk-html5-2.x-plugin-jw7/wiki/Pulse-JW7-plugin-API-documentation).