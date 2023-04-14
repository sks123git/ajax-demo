const { error } = require('console');

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function makePromiseCall(methodType, url, async = true, data = null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      console.log(
        'State changed called ready state: ' +
          xhr.readyState +
          ' Status:' +
          xhr.status
      );
      if (xhr.status.toString().match('^[2][0-9]{2}$')) {
        resolve(xhr.responseText);
      } else if (xhr.status.toString().match('^[4,5][0-9]{2}$')) {
        reject({ status: xhr.status, statusText: xhr.statusText });
        console.log('xhr failed');
      }
    };

    xhr.open(methodType, url, async);
    if (data) {
      console.log(JSON.stringify(data));
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType + ' request sent to server');
  });
}

// const getURL = 'http://localhost:3000/employees';
// makePromiseCall('GET', getURL, true)
//   .then((responseText) => {
//     console.log('Get user data: ' + responseText);
//   })
//   .catch((error) => console.log('error is: ' + JSON.stringify(error)));

// const delURL = 'http://localhost:3000/employees/4';
// makePromiseCall('DELETE', delURL, false)
//   .then((responseText) => {
//     console.log('data deleted ' + responseText);
//   })
//   .catch((error) => {
//     console.log('Delete error status: ' + JSON.stringify(error));
//   });
const postURL = 'http://localhost:3000/employees';
const newDetail = { name: 'Suzy', salary: '6000' };
makePromiseCall('POST', postURL, true, newDetail)
  .then((responseText) => {
    console.log('data is inserted: ' + responseText);
  })
  .catch((error) => {
    console.log('Post error caught: ' + error);
  });
