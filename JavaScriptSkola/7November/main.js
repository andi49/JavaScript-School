// /// SCOPE

// const scope = 'Global'

// function func() {

//     const scope2 = 'Function'

//     {
//         const scope3 = 'Block'
//     }
//     console.log(scope3) // Fel meddelande
// }

// func()

//  console.log(scope) // Global
//   console.log(scope2) // Fel meddelande
//    console.log(scope3) // Fel meddelande



//    for (var i = 0; i < 3; i++) {
//     console.log(i)
//    }

    //    console.log(i)

    function fuc (num) {
        let counter = 0
        counter += num; 

        console.log(counter)
    }

    fuc(3)
    