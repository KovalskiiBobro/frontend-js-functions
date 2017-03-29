var arr = [1, 0, -1, -5, 2, -3, 10, 100, -1],
  fMax,
  fMin,
  fSum;
  function getMax(arr) {
  var arrLen = arr.length,
  maxEl = arr[0];
  for (var i = 0; i < arrLen; i++) {
  if (maxEl < arr[i]) {
  maxEl = arr[i];
  }
  }
  return maxEl;
  }
  function getMin(arr) {
  var arrLen = arr.length,
  minEl = arr[0];
  for (var i = 0; i < arrLen; i++) {
  if (minEl > arr[i]) {
  minEl = arr[i];
  }
  }
  return minEl;
  }
  function getSum(arr) {
  var arrLen = arr.length,
  sumEl = arr[0];
  for (var i = 0; i < arrLen; i++) {
  sumEl += arr[i];
  }
  return sumEl;
  }

  fSum = getSum(arr);
  fMax = getMax(arr);
  fMin = getMin(arr);

  console.log(fMax, fMin, fSum);

  document.write("fMax result: " + fMax + " ");
  document.write("fMin result: " + fMin + "");
document.write(" fSum result: " + fSum + " ");