class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertice(vtx) {
        if(!this.adjList[vtx]) {
            this.adjList[vtx] = []
        }
    }

    addEdge(vtx1, vtx2) {
        if(!this.adjList[vtx1]) {
            this.adjList[vtx1] = [vtx2]
        }else {
            this.adjList[vtx1].push(vtx2)
        }
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentNode;

        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode);
            this.adjList[currentNode].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }

    dfs(start) {
        const stack = [start];
        const result = [];
        const visited = {}
        visited[start] = true;
        let currentNode;

        while(stack.length) {
            currentNode = stack.pop();
            result.push(currentNode);
            this.adjList[currentNode].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
}