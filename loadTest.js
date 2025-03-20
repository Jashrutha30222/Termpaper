import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // Virtual users
  duration: '30s', // Test duration
};

export default function () {
  let res = http.get('https://test-api.example.com'); // Replace with your app URL
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
