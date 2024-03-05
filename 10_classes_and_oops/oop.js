const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user["username"]);
// user.getUserDetails();

// console.log(this);


function User(username,loginCount,isloggedin)
{
    this.username = username
    this.loginCount = loginCount
    this.isloggedin = isloggedin

    return this
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("chaiaurcode",12,true)
console.log(userOne);


