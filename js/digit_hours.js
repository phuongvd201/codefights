function digit_hours(f, t) {
r=[]
for(u in a='1 1 0     ')r[u]=0

f=new Date(a+f)/1e3
    
for(;f<=new Date(a+t)/1e3;)
  for(i in z=[f%60,f/60%60,f++/3600%24])
    r[z[i]%10|0]++,
    r[z[i]/10|0]++
    
  return r
}
