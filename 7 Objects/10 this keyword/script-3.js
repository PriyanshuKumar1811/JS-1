const user2 = {
    name: "Prakash",
    showName: function() {
        console.log(this.name);
        function showMessage() {
            console.log(this.name);
            console.log(this);
        }
        showMessage();
    }
};
user2.showName();