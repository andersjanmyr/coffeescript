!SLIDE execute
# Strings (')
    @@@coffeescript
    pi = 'π'
    result = '#{22/7} is approximately #{pi}'

!SLIDE execute
# Strings (")
    @@@coffeescript
    pi = "π"
    result = "#{22/7} is approximately #{pi}"

!SLIDE execute small
# Strings (multiline)
    @@@coffeescript
    result = "Call me Ishmael. Some years ago --
    never mind how long precisely -- having little
    or no money in my purse, and nothing particular
    to interest me on shore, I thought I would sail
    about a little and see the watery part of the
    world..."

!SLIDE execute small
# Strings (")
    @@@coffeescript
    result = "Call me Ishmael. Some years ago --
    never mind how long precisely -- having little
    or no money in my purse, and nothing particular
    to interest me on shore, I thought I would sail
    about a little and see the watery part of the
    world..."

!SLIDE 
# Functions

    @@@coffeescript
    # Declare a function
    square = (x) -> x * x
   
    # jQuery with an anonymous function
    $('button').click ->
      console.log 'Button clicked: ', this

!SLIDE 
# Parameters

    @@@coffeescript
    # Default parameters
    sleep = (callback, millis = 1000) ->
      setTimeout(callback, millis)

    # Splats (varargs)
    moveFiles = (dir, files...) ->
      moveFile(dir, file) for file in files


!SLIDE 
# Objects

    @@@coffeescript
    phone =
      id: 'arc'
      name: 'Xperia Arc'
      camera:
        name: 'MagPix'
        resolution: '88 megapix'
      weight: '28 grams'


!SLIDE small
# Lexical Scoping 

    @@@coffeescript
    # No var declarations
    outer = 1
    changeNumbers = ->
      inner = -1
      outer = 10
    inner = changeNumbers()

    # Compiles to
    var changeNumbers, inner, outer;
    outer = 1;
    changeNumbers = function() {
      var inner;
      inner = -1;
      return outer = 10;
    };
    inner = changeNumbers();
    


!SLIDE 
# If, Else, Unless, Or=
    
    @@@coffeescript
    if happy and knowsIt
      clapsHands()
      chaChaCha()
    else
      showIt()

    mood = 'sad' unless singing

    date = if friday then sue else jill

    options or= defaults


!SLIDE execute
# Array Comprehensions

    @@@coffeescript
    result = i*i for i in [1..6]


!SLIDE execute
# Array Comprehensions (map)

    @@@coffeescript
    result = (i*i for i in [1..6])

!SLIDE execute
# Array Comprehensions (by)

    @@@coffeescript
    result = (i*i for i in [1..9] by 2)


!SLIDE execute small
# Array Comprehensions (when)

    @@@coffeescript
    hasDigit = (digit, num) ->
      "#{num}".indexOf("#{digit}") > -1

    result = (i for i in [1..20] when hasDigit(2, i))

!SLIDE execute

# Object Comprehensions (of)

    @@@coffeescript
    phone =
      id: 'arc'
      name: 'Xperia Arc'
      camera:
        name: 'MagPix'
        resolution: '88 megapix'
      weight: '28 grams'

    result = (key for key of phone)


!SLIDE execute small

# Object Comprehensions (of, value)

    @@@coffeescript
    phone =
      id: 'arc'
      name: 'Xperia Arc'
      camera:
        name: 'MagPix'
        resolution: '88 megapix'
      weight: '28 grams'

    result = (value for key, value of phone)


