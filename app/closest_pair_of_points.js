// A class to represent a Point in 2D plane
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let point;

// Find distance between two points
const dist = (p1, p2) => {
  return Math.sqrt(
    (p1.x - p2.x) *
    (p1.x - p2.x) +
    (p1.y - p2.y) *
    (p1.y - p2.y)
  );
}

// A Brute Force method to return the
// smallest distance between two points
const bruteForce = (points) => {
  let minVal = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (dist(points[i], points[j]) < minVal) {
        minVal = dist(points[i], points[j]);
        point = { origin: points[i], destionation: points[j] };
      }
    }
  }
  return minVal;
}

// A utility function to find the
// distance beween the closest points of
// strip of given size. All points in
// strip[] are sorted accordint to 
// y coordinate. They all have an upper
// bound on minimum distance as d.
// Note that this method seems to be
// a O(n^2) method, but it's a O(n)
// method as the inner loop runs at most 6 times
const stripClosest = (strip, d) => {
  let minVal = d;

  for (let i = 0; i < strip.length; i++) {
    let j = i + 1;
    while (j < strip.length && ((strip[j].y - strip[i].y) < minVal)) {
      minVal = dist(strip[i], strip[j]);
      point = { origin: strip[i], destionation: strip[j] };
      j += 1;
    }
  }

  return minVal;
}

// A recursive function to find the
// smallest distance. The array P contains
// all points sorted according to x coordinate
const closestUtil = (P, Q, n) => {
  if (n <= 3) {
    return bruteForce(P);
  }

  let mid = Math.floor(n / 2);
  let midPoint = P[mid];

  let dl = closestUtil(P.slice(0, mid), Q, mid);
  let dr = closestUtil(P.slice(mid, P.length), Q, n - mid);

  let d = Math.min(dl, dr);

  let strip = [];
  for (let i = 0; i < n; i++) {
    if (Math.abs(Q[i].x - midPoint.x) < d) {
      strip.push(Q[i]);
    }
  }

  return Math.min(d, stripClosest(strip, d));
}

// The main function that finds the smallest distance
// This method mainly uses closestUtil()
const closest = (points) => {
  let P = points.sort((a, b) => a.x - b.x);
  let Q = points.sort((a, b) => a.y - b.y);

  return closestUtil(P, Q, points.length);
}

const CANVAS_SIZE = 500;
const POINT_SIZE = 2;
const POINTS_QUANTITY = 15;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomPoint = () => {
  return new Point(getRandomInt(CANVAS_SIZE), getRandomInt(CANVAS_SIZE));
}

const draw = (x, y, canvas) => {
  canvas.beginPath();
  canvas.arc(x, y, POINT_SIZE, 0, Math.PI * 2, true);
  canvas.fill();
}

const line = (O, D, canvas) => {
  canvas.moveTo(O.x, O.y);
  canvas.lineTo(D.x, D.y);
  canvas.stroke();
}

window.onload = () => {
  const canvas = document.getElementById('canvas').getContext('2d');

  const points = [...new Array(POINTS_QUANTITY)].map(() => getRandomPoint());

  points.forEach(point => {
    draw(point.x, point.y, canvas);
  });

  const distance = closest(points);
  console.log(distance);

  line(point.origin, point.destionation, canvas);
}