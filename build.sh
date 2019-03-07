#!/bin/sh
mkdir -p build
rm -rf build/*
zip -1 build/unixtime@kidneybone.com.xpi manifest.json sidebar.html sidebar.js sidebar.css
