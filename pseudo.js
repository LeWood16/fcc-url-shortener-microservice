// URL Shortener Microservice


/* User Stories: 

-I can pass a URL as a parameter and I will receive a shortened URL 
in the JSON response.
    -make /new/ route (return error if not this route)
    -pass in parameter in request, get back parameter in response
    -pass in parameter, returns whether or not in proper format
    -pass in parameter in proper format, returns json 
    {"original_url": "paramater_url"}
    -pass in parameter in proper format, returns json 
    {"original_url": "paramater_url", "short_url": "short_version_of_parameter_url"}

-If I pass an invalid URL that doesn't follow the valid http://www.example.com 
format, the JSON response will contain an error instead.
    -
    
-When I visit that shortened URL, it will redirect me to my original link.
    -
    
    
    
*/