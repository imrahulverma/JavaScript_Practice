let input=30;

console.log("prime number upto "+input+ " are:")

for (j = 2; j <=input; j++) {

    let count = 0;

    for (i = 2; i < j; i++) {
        if (j % i == 0) {
            count++;

        }

    }
    if (count== 0) {
        console.log(j);
    }
    
}
