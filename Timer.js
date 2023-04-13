function showTime() {
  const date = new Date();
  return (
    date.getHours() +
    'hrs:' +
    date.getMinutes() +
    'Mins:' +
    date.getSeconds() +
    'Secs:'
  );
}

function showSessionExpire() {
  console.log('Session expired');
}

console.log('Session A: activating b at' + showTime());
setTimeout(showSessionExpire, 5000);
console.log('Activity B will trigger after 4 seconds');
