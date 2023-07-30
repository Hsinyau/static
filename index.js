const axios = require('axios');
const fs = require('fs');

const apiUrl = `https://memos.hsinyau.cc/api/v1/memo?openId=${process.env.OPEN_ID}`;
const outputFilePath = 'data.json';

async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    const jsonData = response.data;
    fs.writeFile(outputFilePath, JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      console.log(`Data saved to ${outputFilePath}`);
    });
  } catch (err) {
    console.error(`Error retrieving data: ${err.message}`);
  }
}

fetchData();
