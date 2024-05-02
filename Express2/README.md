Run the following commands to get started:

1) npm init -y
2) npm install express
3) npm install nodemon (Optional)
4) npm start (if nodemon installed) or node index.js

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

3) Get a racehorses by id
curl --location 'localhost:3000/horses/1' \
--data ''

4) Get all racehorses
curl --location 'localhost:3000/horses' \
--data ''

5) Delete a racehorse
curl --location --request DELETE 'localhost:3000/horses/1' \
--header 'Content-Type: application/json' \
--data '{
  "horseName": "Chestnut",
  "jockeyName": "Max Verstappen"
}'
