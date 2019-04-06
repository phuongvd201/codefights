xSaved=(o, n)=>{
    
    a = o.length
    b = o[0].length
    w=(r,c)=>(r>=0)&&(r<a)&&(c>=0)&&(c<b)
    l={"<":"j--",">":"j++","^":"i--","v":"i++"}
    
    for (r=0;r<a;r++) {
        for (c=0;c<b;c++) {
            if (o[r][c]=="x") x = [r,c]
                
            if (l[o[r][c]]) { 
                
                i = r
                j = c
                while (eval(l[o[r][c]]),w(i,j)&&!l[o[i][j]]) {
                    if (o[i][j]=="x") x = [i,j]
                    o[i][j]="."
                }
            }
           
        }
    }
    
    for (v in l) {
        i = x[0]
        j = x[1]
        s = 0
        while(w(i,j)&&s<=n&&!l[o[i][j]]) {
            if (/[ x]/.test(o[i][j])) return 1
            eval(l[v])
            s++
        }
    }

}
