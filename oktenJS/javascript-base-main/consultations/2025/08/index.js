// function asd() {
//     let x = 'okten';
//
//     function qwe() {
//         console.log(x);
//     }
//
//     return qwe;
//
// }
//
// const factQweFunctionFromAsd = asd();
// factQweFunctionFromAsd();


function userBuilder(id, name) {
    const user = {
        id, name, greeting: function () {
            console.log('hello')
        }
    };
    return user


}

const vasya = userBuilder(1, 'vasya');

console.log(vasya);
vasya.greeting();


const petya = userBuilder(2, 'petya');
console.log(petya);
petya.greeting();
petya.id = -100500;
console.log(petya);


function userBuilderWrapper(id, name) {
    const user = {
        id, name
    };

    return {
        getId: function () {
            console.log(user.id);
        }, setId: function (newId) {
            if (newId > 0) {
                user.id = newId;
            }
        }
    }

}

const foo = userBuilderWrapper(1, 'petya');

foo.getId()
foo.id = -100500

foo.setId(100500);
foo.getId()










