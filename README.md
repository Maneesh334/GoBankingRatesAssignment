# GoBankingRatesAssignment
 
1) goBanking.php -> PHP program takes two strings of same length as input from command line, and then calculates the minimum number of steps required to convert one string to an anagram of the other.
2) JS -> JavaScript application that returns random dad jokes. Clone JS2 directory and open index.html file on your browser.
3) Express2 -> CRUD Appplication for keeping track of racehorses at a horse race.
   How to run:
   1) Clone Express2 directory.
   2) npm init -y
   2) npm install express
   4) npm install nodemon (Optional)
   5) npm start (if nodemon installed) or node index.js

Once server is running:
1) Add a racehorse:
   
curl --location 'localhost:3000/horses' \
--header 'Content-Type: application/json' \
--data '{
  "horseName": "Chestnut",
  "jockeyName": "Dale Earnhardt Jr"
}'

2) Update a racehorse:
   
curl --location --request PUT 'localhost:3000/horses/1' \
--header 'Content-Type: application/json' \
--data '{
  "horseName": "Chestnut",
  "jockeyName": "Max Verstappen"
}'

3) Get a racehorses by id:

curl --location 'localhost:3000/horses/1' \
--data ''

4) Get all racehorses:

curl --location 'localhost:3000/horses' \
--data ''

5) Delete a racehorse:

curl --location --request DELETE 'localhost:3000/horses/1' \
--header 'Content-Type: application/json' \
--data '{
  "horseName": "Chestnut",
  "jockeyName": "Max Verstappen"
}'
