// A class to represent a Point in 2D plane
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

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

  let mid = n / 2;
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

const points = [
  new Point(2, 3), new Point(12, 30),
  new Point(40, 50), new Point(5, 1),
  new Point(12, 10), new Point(3, 4)
];

console.log(`The smallest distance is ${closest(points)}`);
