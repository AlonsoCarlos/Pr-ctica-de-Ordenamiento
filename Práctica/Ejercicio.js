let arr = ([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
      
for(let i = 0; i < arr.length; i++) {
    let min=i;
    for(let x = i + 1; x < arr.length; x++) {            
        if (arr[min] > arr[x]) {              
            min = x;
        }            
    }
    a(arr, i, min);
}

function a(arr, f, s) {
    console.log(arr.toString());
    var temp = arr[f];
    arr[f] = arr[s];
    arr[s] = temp;    
}