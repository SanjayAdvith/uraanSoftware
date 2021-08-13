import React from 'react'

const Test = () => {

    var arr = [
        { id: 1, username: 'fred', number: 145 },
        { id: 2, username: 'bill', number: 47 },
        { id: 3, username: 'ted', number: 85 }
    ];

    // function userExists(username) {
    //     return arr.some(function (el) {
    //         return el.username === username;
    //     });
    // }
    // //console.log(userExists('fred')); // true



    const result = arr.some((e) => e.username === 'fred')
    console.log(result);


    return (
        <div>
            {result}
        </div>
    )
}

export default Test
