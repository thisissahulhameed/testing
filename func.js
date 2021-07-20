var newData = [];

function displayData(data) {
  for (let i of data) {
    newData.push(i);
  }
  return newData;
}


module.exports = { displayData };
