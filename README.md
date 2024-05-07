# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Answer

#### TL;DR

`hasCycle` $\in \mathrm{\Theta}(|V|(|V| + |E|))$

#### Reasoning

Our implementation of `hasCycle` uses `depthFirstSearch` as a helper function. We know from previous discussions in lecture, as well as the Graph Search exercise, that the runtime complexity of depth-first search when using adjacency *lists* is $\mathrm{\Theta}(|V| + |E|)$. In fact, `depthFirstSearch` does most of the work in this exercise, and the only additional *(non-constant)* work within the `hasCycle` function is the `for...in` loop.

The `for...in` loop within `hasCycle` simply calls the `depthFirstSearch` helper function for every **vertex** in the input graph. Naturally, that will take $\mathrm{\Theta}(|V|)$ to complete in the worst case because the `for...in` loop would have to parse through every vertex in the input graph. However, since it is also calling `depthFirstSearch` per-vertex being considered, we would have an actual worst-case runtime complexity $\mathrm{\Theta}(|V|(|V| + |E|)) \equiv \mathrm{\Theta}((|V|^{2}) + (|V| * | E|))$. That is because in the worst case `depthFirstSearch` must consider every edge in the graph, which inherently means that it will consider every vertex sequentially since we are using adjacency lists. Moreover, `depthFirstSearch` is called per vertex via the `hasCycle` function, hence the leading coefficient of $|V|$.
