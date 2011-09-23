!SLIDE 
# Coffeescript #
### anders.janmyr@jayway.com
### http://anders.janmyr.com
### @andersjanmyr


!SLIDE small
# An Example

    @@@coffeescript
    pingHost = (url) ->
      console.log "Making request to #{url}"
      request url, (error, response, body) ->
        Pings.pop() while Pings.length > 100
        Pings.unshift [url, response.statusCode]
        if response.statusCode isnt 200
          sendEmail("#{url} failed") 

!SLIDE bullets
# Coffee What?

* Coffescript
* Compiles to Javascript
* Exposes the good parts
* In a simple way





