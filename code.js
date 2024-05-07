/*
DISCLAIMER: I worked with Howard Shaw on this assignment. We both contributed to the implementation, testing code, and runtime analysis.
*/

function depthFirstSearch(graph, node, visited, stack) {
  visited.push(node);
  stack.push(node);

  let neighbors = graph[node];
  for (let neighbor of neighbors) {
    if (stack.includes(neighbor)) {
      return true;
    }

    if (visited.includes(neighbor) == false) {
      let hasCycle = depthFirstSearch(graph, neighbor, visited, stack);
      if (hasCycle == true) {
        return true;
      }
    }
  }
  stack.pop();
  return false;
}

function hasCycle(graph) {
  let visited = [];
  let stack = [];

  for (let node in graph) {
    if (visited.includes(node) == false) {
      let hasCycle = depthFirstSearch(graph, node, visited, stack);
      if (hasCycle == true) {
        return true;
      }
    }
  }
  return false;
}