const fs = require("fs");
const path = require("path");

// ERROR: in reading file
const FILE_NAME = path.join(__dirname, "data.json");
const coinsListData = fs.readFileSync(FILE_NAME).toString();

export const coinsList = JSON.parse(coinsListData);
