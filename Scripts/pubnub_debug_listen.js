// Generated by CoffeeScript 1.7.1

/*
  NOTE: this is just a nodejs script for receiving messages from PubNub
 */

(function() {
  var channel, pubnub;

  channel = process.argv[2];

  pubnub = require("pubnub").init({
    publish_key: "pub-c-f628756e-3c83-4331-884f-f3bc1c4da7c0",
    subscribe_key: "sub-c-2a902b72-04f7-11e6-bbd9-02ee2ddab7fe",
    uuid: "Luz" + Math.floor(Math.random() * 1000)
  });

  pubnub.subscribe({
    channel: channel,
    message: function() {
      return console.log(JSON.stringify(arguments));
    }
  });

}).call(this);
