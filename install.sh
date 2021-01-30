#!/bin/bash

apt update && apt install -y nodejs npm python3 python3-pip

pip3 install -r requirements.txt

npm install
