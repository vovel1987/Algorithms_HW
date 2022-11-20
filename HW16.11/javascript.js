hanoi(3, 1, 3, 2);

function hanoi(n, fr, tr, ar) {
    if (n === 1) {
      console.log(`  Move 1 from rod ${fr} to rod ${tr}`);
      return;
    }
  
    hanoi(n - 1, fr, ar, tr);
    console.log(`Move ${n} from rod${fr} to rod ${tr} with rod ${ar}`);
    hanoi(n - 1, ar, tr, fr);
  }

