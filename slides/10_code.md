!SLIDE execute
# Strings (')
    @@@coffeescript
    pi = 'π'
    result = '#{22/7} is approximately #{pi}'

!SLIDE execute
# Strings (") interpolation
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
# Here docs (''' or """)
    @@@coffeescript
      result = """
        Whitespace matters and I can use quotes (')
        and double quotes (") as I like in the text.
        """

!SLIDE 
# Functions

    @@@coffeescript
    # Declare a function
    square = (x) -> x * x
   
    # jQuery with an anonymous function
    $('button').click ->
      console.log 'Button clicked: ', this

!SLIDE 
# Default Parameters

    @@@coffeescript
    # Default parameters
    sleep = (callback, millis = 1000) ->
      setTimeout(callback, millis)

!SLIDE 
# Splats (varargs)
    
    @@@coffeescript
    # Declaration
    moveFiles = (dir, files...) ->
      moveFile(dir, file) for file in files

    # Invocation
    files = [ 'lib', 'a.js', 'b.js', 'c.js']
    moveFiles files...
    

!SLIDE 
# Function Binding (=>)

    @@@coffeescript
    Account = (customer, cart) ->
      @customer = customer
      @cart = cart
      
      # var self = this;
      # self.customer.purchase ...
      $('.shopping_cart').click (event) =>
        @customer.purchase @cart

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

!SLIDE execute small

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


!SLIDE execute small
# Object Comprehensions (own of)

    @@@coffeescript
    phone =
      id: 'arc'
      name: 'Xperia Arc'

    newPhone = Object.create(phone)
    newPhone.color = 'blue'
    # *own* checks hasOwnProperty
    result = (key for own key of newPhone)

!SLIDE small
# do

    @@@coffeescript
    for filename in list
      do (filename) ->
        fs.readFile filename, (err, contents) ->
          compile filename, contents.toString()

!SLIDE execute small
# Array Slicing (ranges)
    @@@coffeescript
    numbers = [0, 10, 20, 30]

    inclusive  = numbers[1..3]
    exclusive  = numbers[1...3]

    result = [inclusive, exclusive]


!SLIDE small
# Operators and Aliases

<table>
<tr>
<th>CoffeeScript</th><th>JavaScript</th>
</tr>
<tr>
<td>is</td><td>===</td>
</tr>
<tr>
<td>isnt</td><td>!==</td>
</tr>
<tr>
<td>not</td><td>!</td>
</tr>
<tr>
<td>and</td><td>&amp;&amp;</td>
</tr>
<tr>
<td>or</td><td>||</td>
</tr>
<tr>
<td>true, yes, on</td><td>true</td>
</tr>
<tr>
<td>false, no, off</td><td>false</td>
</tr>
<tr>
<td>@, this</td><td>this</td>
</tr>
<tr>
<td>of</td><td>in</td>
</tr>
<tr>
<td>in</td><td>no JS equivalent</td>
</tr>
</table>

!SLIDE small
# Operators Example
    @@@coffeescript
    launch() if ignition is on

    volume = 10 if band isnt SpinalTap

    letTheWildRumpusBegin() unless answer is no

    if car.speed < limit then accelerate()

    winner = yes if pick in [47, 92, 13]



!SLIDE small
# The existential operator (?)
    
    @@@coffeescript
    solipsism = true if mind? and not world?

    speed ?= 75

    footprints = yeti ? "bear"

!SLIDE small 
# The accessor existential operator (?.)
    @@@coffeescript
    lottery = {}
    zipcodeOfWinner =
      lottery.drawWinner?().address?.zipcode

!SLIDE execute small 
# Classes

    @@@coffeescript
    class Animal
      constructor: (@name) ->

      move: (meters) ->
        @name + " moved #{meters}m."
    
    # Create an animal and invoke move.
    animal = new Animal('Hugo')
    result = animal.move 10


!SLIDE execute small 
# Inheritance, and Super

    @@@coffeescript
    class Animal
      constructor: (@name) ->
      move: (meters) ->
        @name + " moved #{meters}m."
    
    class Snake extends Animal
      move: ->
        alert "Slithering..."
        super  

    snake = new Snake 'Anders'
    result = snake.move 22

!SLIDE execute small
# Destructuring Assignment

    @@@coffeescript
    futurists =
      sculptor: "Umberto Boccioni"
      painter:  "Vladimir Burliuk"
      poet:
        name:   "F.T. Marinetti"
        address: [
          "Via Roma 42R"
          "Bellagio, Italy 22021"
        ]

    {poet: {name, address: [street, city]}} = futurists
    result = [name, street, city]

!SLIDE execute small
# Switch/When/Else

    @@@coffeescript
    day = 'Fri'
    switch day
      when "Mon" then alert('work')
      when "Thu" then alert('iceFishing')
      when "Fri", "Sat"
          alert('dancing')
      else alert('sleep')

!SLIDE small
# while, until

    @@@coffeescript
    if this.studyingEconomics
      buy()  while supply > demand
      sell() until supply > demand

!SLIDE execute small
# Chained Comparisons

    @@@coffeescript
    cholesterol = 127

    result = 200 > cholesterol > 60

!SLIDE execute small
# Embedded Javascript

    @@@coffeescript
    # Javascript can be embedded with backticks (`)
    hi = `function() {
      return [document.title, "Hello JavaScript"].join(": ");
    }`
    result = hi()

