#!/bin/bash

sudo apt update && sudo apt install -y nodejs npm python3 python3-pip

cd server
pip3 install -r requirements.txt
python3 server.py &
server=$!
cd ..

cd client
npm install
npm run start
cd ..

kill -TERM "$server" 2>/dev/null
