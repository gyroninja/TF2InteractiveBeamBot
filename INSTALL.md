**Dependencies**

Install xdotool using your package manager
># apt-get install xdotool
># yum install xdotool
># ...

Install dependencies
>$ npm install

NOTE: for beam-interactive-node I had to update it to the latest version of bable. To do this install the es2015 preset
and add it to the .babelrc.

**Configuration**

Edit config.js to your information. If you don't know your channel ID you can find it at https://beam.pro/api/v1/users/current
Make sure that you are logged in before you go to that page. On that page look under channel.id for the value you need.

**Run**

I would recommend throwing up http://randomloadouts.appspot.com/ on a secondary monitor. Then run this bot by doing.
> # node index.js

If everything is ok it should boot up correctly and say that the handshake was successful. Every time someone randomizes
the loadout it will print Randomize in the console.