## SET-UP
In order to run this web app, run `npm i`, `npm i -g serve`, then
`serve -s build`.

This app displays a number of film/TV listings drawn from the OMBb API.

Users can select individual listings to view them in more detail, and
can 'favourite' these in order to add them to a list of favourites.
These can then be viewed using the 'star' icon in the listings view.
Users are instructed about this if they try to use the feature without
having favourited any films/TV shows.

Users can also search film/TV titles, and the results will display in
the listings view. Individual results can be added to the listings by selecting them from the list of results and then 'favouriting' them.
Otherwise, search results are lost once a new search is performed.
