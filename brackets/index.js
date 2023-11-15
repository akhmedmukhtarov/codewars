function findLongest(brackets) {
    const stack = [-1];
    let maxLength = 0;
    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];
        if (bracket == '(') {
            stack.push(i);
        } else {
            if (stack.length > 1) {
                stack.pop();
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                stack[0] = i
            }
        }
    }
    return maxLength
}