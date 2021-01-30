#!/bin/bash

cd server
python3 server.py &
server=$!
cd ..

cd client
npm run start
cd ..

kill -TERM "$server" 2>/dev/null
