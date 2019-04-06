kBitsDigits = (n, k) => 
    r = [],
    for (i=0; i<Math.pow(2,n); i++) 
        if (i.toString(2).replace(/0/g,'').length == k) r.push(i),
    
    return r

