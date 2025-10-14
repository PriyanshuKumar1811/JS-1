const user1 = {
    name: "Prakash",
    showName: () => {
        console.log(this.name);
        console.log(user1.name);
    }
};
user1.showName();

const displayName = () => {
    console.log(this);
}
displayName();