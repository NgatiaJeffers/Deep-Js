var say_hi = function() {
    console.log('hi')
}

var greeter = say_hi

say_hi()
greeter()

say_hi = function() {
    console.log('meh')
}

say_hi()
greeter()


// PAssing arguments to other functions
var runner = function(fn) {
    console.log('Invoking a function now!')
    // fn()
}

runner(function(){
    console.log('okay')
})

runner(say_hi)
runner(greeter)

runner(say_hi());

// answer_logger(function() {
//     return "I should appear in dix#answe!"
// })

var fn1 = function() {
    return "this should be the first value in results array"
}

// answer_collector([fn1, function() { return "this should be the second value in result array"}])


var returns_a_func = function() {
    return function(){
        console.log('BOOP!')
    }
}

var booper = returns_a_func();

booper()

var word = 'original'
var phrase = " is the word"

var word_changer = function(new_word) {
    var word = new_word
    console.log(word + phrase);
}

console.log(word + phrase);
word_changer('changed')
console.log(word + phrase)

var leaky_word_changer = function (new_word) {
    word = new_word
    console.log(word + phrase)
}

leaky_word_changer('changed')
console.log(word + phrase)


// A Closure

var returns_a_fun = function() {
    var word = "I can see inside "
    function sentence() {
        var word2 = 'I can also see outside. '
        console.log(word + 'and ' + word2)
    }
    return sentence;
}

var finalSentence = returns_a_fun();


// Wednesday Content
var nbo = {
    name: "Nairobi"
}

var mba = {
    name: "Mombasa"
}

var kis = {
    name: "Kisumu"
}

var qsi = {
    name: "Moshi"
}

var dar = {
    name: "Dar Es Salaam"
}

var kenya = {
    name:"Kenya",
    cities: [nbo, mba, kis]
};

var tanzania = {
    name: "Tanzania",
    cities: [qsi, dar]
};

var rwanda = {
    name: "Rwanda",
    cities: []
};

kenya.cities.forEach(function(city) {
    console.log("Lets go to " + city.name + "!");
});

var kgl = {
    name: "Kigali"
}

rwanda.cities.push(kgl);

console.log(rwanda);

var tomatoes = {
    name: "Tomatoes",
    price: 300
};

var potatoes = {
    name: "Potatoes",
    price: 150
};

var onions = {
    name: "Onions",
    price: 100
};

var groceryStore = {
    name: "Mama's Corner Market",
    products: [tomatoes, potatoes, onions]
};

var iphone = {
    name: "Iphone",
    price: 699
}

var android = {
    name: "Android",
    price: 499
}

var windowsPhone = {
    name: "Nokia",
    price: 399
};

var phoneStore = {
    name: "RadioShack",
    products: [iphone, android, windowsPhone]
};

var stores = [groceryStore, phoneStore];

stores.forEach(function(store) {
    console.log(store.name + " sells:");
    store.products.forEach(function(product) {
        console.log(product.name);
    })
    console.log("\n")
});

// Address Book

function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

var jeff = new Contact("Jeff", "Dev");

function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
}

var home = new Address("671, Ngong Road", "Nairobi", "Nairobi");


jeff.addresses.push(home);

console.log(jeff.addresses[0].street);
console.log(jeff.addresses[0].city);
console.log(jeff.addresses[0].county);
