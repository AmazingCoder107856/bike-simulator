## The simulation engine
The simulation app resides in [bike-sim/](bike-sim/). At startup, the database is cleared and filled with data described in [data/db_data.mjs](bike-sim/data/db_data.mjs). Some of the data is randomized, such as bike positions, battery level, and user names and account balance. Parts of the simulation are controlled by settings in [data/config.js](bike-sim/data/config.js), such as number of users and bikes in the simulation.

A few parameters controlling the simulation are currently hard-coded, e.g. the bike positions in each city are updated every 2100 ms, so that, with three cities, an update takes place once per 700 ms.

At startup, the number of bike rides is ramped up, with 10 % of the desired number of rides for each city update, so it takes some minute to reach the desired level.

After a configurable amount of time, rides are finished at a chance of 5 % for each city update. New rides are started to keep the desired number of rides.

An individual bike ride involves a user and a bike. The bike travels in a straight path in a random direction, and with a random constant speed. At city borders, the direction changes, so as to keep the bike inside the city, (cf. the Pong game).

At ride finish, the cost of the ride is computed, and the user's balance is withdrawn. There is a reduced fee if the ride starts outside a p-zone and finishes inside a p-zone, and there is an extra fee if the ride finishes outside a p-zone. A user's balance may go negative.

The execution time of a city update is measured and output to the console. For some hundred bikes in motion, the executions time is of the order of tens of milliseconds, so there seems to be room for even more bikes in the simulation.

