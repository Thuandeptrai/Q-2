var canFinish = function (numCourses, prerequisites) {
  const getDegree = new Array(numCourses).fill(0);

  for (const pre of prerequisites) {
    getDegree[pre[0]]++;
  }

  const zeroDegree = [];

  for (let i = 0; i < numCourses; i++) {
    if (getDegree[i] === 0) {
      zeroDegree.push(i);
    }
  }

  if (zeroDegree.length === 0) return false;

  while (zeroDegree.length) {
    const course = zeroDegree.pop();
    for (const pre of prerequisites) {
      if (course === pre[1]) {
        getDegree[pre[0]]--;
        if (getDegree[pre[0]] === 0) {
          zeroDegree.push(pre[0]);
        }
      }
    }
  }
  for (const num of getDegree) {
    if (num !== 0) return false;
  }
  return true;
};
console.log(canFinish(2, [[1, 0]]));
