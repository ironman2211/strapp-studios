function minPlanesToDestination(fuel) {
    const N = fuel.length; // number of airports
    
    // Edge case: starting airport has zero fuel
    if (fuel[0] === 0) return -1;
    
    // BFS setup
    let queue = [0]; // queue of airports to process
    let visited = new Array(N).fill(false); // visited array
    visited[0] = true;
    let planes = new Array(N).fill(Infinity); // planes[i] will store the minimum planes needed to reach airport i
    // console.log(planes);
    planes[0] = 0;
    
    // BFS loop
    while (queue.length > 0) {
        let current = queue.shift();
        
        // Try to fly from current airport to all reachable airports
        for (let i = current + 1; i <= Math.min(current + fuel[current], N - 1); i++) {
            if (!visited[i]) {
                visited[i] = true;
                planes[i] = planes[current] + 1;
                queue.push(i);
                
                // If we reach the last airport, return the number of planes used
                if (i === N - 1) {
                    return planes[i];
                }
            }
        }
    }
    
    // If we exhaust the BFS without reaching the last airport
    return -1;
}

// Example usage:
console.log(minPlanesToDestination([2,1,2,3,1])); // Output: 2
console.log(minPlanesToDestination([1,6,3,4,5,0,0,0,6])); // Output: 3
