c = '	 	 	 	 	 	 	 	 			 	 	 	 	 	 	 	 			 	 	 	 	 	 	 	 			 	 	 	 	 	 	 	 		'.split``
            
C = a => c[a] > '	' && 1 + C(a + 1, c[a] = 0) + C(a + 9) + C(a - 9) + C(a - 1)

m = ChessboardShapes = s => {
    for (e of s)
        c[e.charCodeAt(0) - 25 - 9*e[1]] = 1
    for (i in c)
        x = C(+i),
        m = m > x ? m : x
    return m
}
/*
//Create chessboard
c = []
for (j = 8; j--;)
    for (c[j] = [],i = 8; i--;)
        c[j][i] = (i + j)%2
 
//Search and destroy
C = (a, b) => c[a] && c[a][b] ? (c[a][b] = 0, 1 + C(a + 1, b) + C(a, b + 1) + C(a - 1, b) + C(a, b - 1)) : 0

m = ChessboardShapes = s => {
    //Fill chessboard
    for (e of s)
        c[8-e[1]][e.charCodeAt(0)-97] = 1
    
    //Count and find max
    for (i in c)
        for (j in c[i])
            x = C(+i, +j),
            m = m > x ? m : x
    return m
}
