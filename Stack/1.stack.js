function isBalanced(str) {
    let s = [];

    for (i = 0; i < str.length; i++) {
        let x = str[i];

        if (x == '(' || x == '[' || x == '{') {
            s.push(x);
        }
        else { // for closing bracket
            if (s.length == 0)
                return false;
            else if (!matching(s[s.length - 1], x))
                return false;

            else
                s.pop();
        }
    }
    return (s.length==0); // if stack becomes empty then only returns true otherwise return false
}