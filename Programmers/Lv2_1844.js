//https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let distance = new Array(n).fill([]).map(() => new Array(m).fill(0));
  let answer = -1;

  //initial setup
  let willVisitQueue = [];
  willVisitQueue.push({ x: 0, y: 0 });
  distance[0][0] = 1;

  //bfs
  while (willVisitQueue.length > 0) {
    const { x, y } = willVisitQueue[0];
    willVisitQueue.shift();

    if (x === n-1 && y === m-1) {
      return distance[x][y];
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maps[nx][ny] === 0 || distance[nx][ny] !== 0) continue;
       distance[nx][ny] = distance[x][y] + 1;
       willVisitQueue.push({ x: nx, y: ny });
    }
  }
  return answer;
}
