function getNthFib(n) {
    let lastTwo = [0, 1];
 
    for(let fibCounter = 3; fibCounter <= n; fibCounter++)
      lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];
 
    return n == 1 ? lastTwo[0] : lastTwo[1];
 }
 