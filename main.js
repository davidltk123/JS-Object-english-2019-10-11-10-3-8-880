//Question 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

//Question2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var count = 0;
for (var f in fruit){
    count = count + fruit[f];
}
console.log(count);

