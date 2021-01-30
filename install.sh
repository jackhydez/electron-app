#!/bin/bash

sudo apt update && sudo apt install -y nodejs npm python3 python3-pip

cd server
pip3 install -r requirements.txt
cd ..

cd client
npm install
cd ..
