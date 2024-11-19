const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const PropertiesReader = require("properties-reader");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express(); // create express instance
const port = 3000; // port number   
let propertiesPath = path.resolve // read properties file
const uri = properties.get("uri"); // get uri from properties file
const client = new MongoClient(uri, { useUnifiedTopology: true }); // create mongo client

app.use(cors()); // enable cors
app.use(morgan("dev")); // enable morgan
app.use(express.json()); // enable json
app.use(express.urlencoded({ extended: true })); // enable urlencoded
