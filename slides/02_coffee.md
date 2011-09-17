!SLIDE commandline wipe
# Installation

    $ npm install -g coffee-script

    # If you need node and npm 
    $ brew install node
    $ curl http://npmjs.org/install.sh | sh


!SLIDE commandline
# The `coffee` command

    $ coffee
    coffee> i*i for i in [1..6]
    [ 1, 4, 9, 16, 25, 36 ]


!SLIDE commandline
# The `coffee` command
    $ cat timer.coffee 
    printTime = ->
      console.log(new Date())

    setInterval(printTime, 1000)


    $ coffee app.coffee
    Sat, 17 Sep 2011 08:23:02 GMT
    Sat, 17 Sep 2011 08:23:03 GMT
    Sat, 17 Sep 2011 08:23:04 GMT
    ...

!SLIDE commandline
# The `coffee --compile` command

    # Compile all files in src to lib
    $ coffee --compile --output lib src

    $ tree src
    src
    `-- timer.coffee

    $ tree lib
    lib
    `-- timer.js

!SLIDE commandline
# The `coffee --watch` command

    # Watch files in src
    # Compile to lib when they change
    $ coffee --compile --watch --output lib src

    # Short form
    $ coffee -cwo lib src
    10:38:56 - compiled src/timer.coffee


