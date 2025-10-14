const str = "xyz";

for (let i = 0; i <= str.length - 1; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        console.log(str.slice(i, j));
    }
}