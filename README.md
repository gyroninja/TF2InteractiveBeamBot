**TF2 Interactive Beam Bot**

This bot responds to a single trigger (key 1024) and refreshes a webpage that has a random TF2 loadout.
I use http://randomloadouts.appspot.com/ for the website.

This bot should work on most *nix systems. This bot requires that you have xdotool installed.

Make sure that
># xdotool key --window $(xdotool search --onlyvisible --name Random) F5
is able to run properly before trying to get this bot running.