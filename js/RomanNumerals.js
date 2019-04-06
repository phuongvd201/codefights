I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1e3
function RomanNumerals(s) {
    i = r = 0
    for (; u = eval(s[i++]);)
        r += u < eval(s[i]) ? -u : u
    return /^M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(s) ? r : -1
}