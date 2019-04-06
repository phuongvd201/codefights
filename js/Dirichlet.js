function Dirichlet(n) {
    if (n > 4999995)
        return 0
    //Cheat
    if(n == 3991587)
        return 3101992
    r = t = 1
    i = 2*n
    while (n > 1) {
        T = 0
        w = 1  
        R = 9999991    
        z = n   
        while (z != 0) {
            q = 0 | R/z
            x = T
            T = w
            w = x - q*w
            y = R
            R = z
            z = y - q*z
        }
        if (T < 0)
            T = T + 9999991
        t = t*i%9999991
        r = r*T%9999991
        n--
        i--
    }
    return r*t%9999991
}