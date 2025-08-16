// const day = 'Wednesday'

// switch (day) {
//     case 'Monday':
//         console.log("Sad Monday, Welcome to the Office")
//         break;
//     case 'Tuesday':
//         console.log("Week started going on")
//         break;
//     case 'Wednesday':
//         console.log("Half of the week ended")
//         break;
//     case 'Thursday':
//         console.log("Only 2 days left in weekend")
//         break;
//     case 'Friday':
//         console.log("Hurray.... tomorrow is weeked")
//         break;
//     case 'Saturday':
//         console.log("So k barbaad kardiya")
//         break;
//     case 'Sunday':
//         console.log("Yeh kab khatam huwa??")
//         break;

//     default:
//         console.log("Wrong input")
//         break;
// }

// if (day === 'Monday') {
//     console.log("Sad Monday, Welcome to the Office")
// } else if (day === 'Tuesday') {
//     console.log("Week started going on")
// } else if (day === 'Wednesday') {
//     console.log("Half of the week ended")
// } else if (day === "Thursday") {
//     console.log("Only 2 days left in weekend")
// } else if (day === "Friday") {
//     console.log("Hurray.... tomorrow is weeked")
// } else if (day === "Saturday") {
//     console.log("So k barbaad kardiya")
// } else if (day === "Sunday") {
//     console.log("Yeh kab khatam huwa??")
// } else {
//     console.log("Wrong input")
// }

const person1 = {
    name: "Alice",
    age: 34,
    status: "tourist"
};
const person2 = {
    name: "Salman",
    age: 26,
    status: "resident"
};

function eligibilityChecker(person) {
    if (person.age >= 18 && person.status == "resident") {
        console.log(`Yes Mr ${person.name} you are eligible to create CNIC`)
    } else {
        console.log(`Sorry Mr ${person.name} you are not eligible`)
    }
}

eligibilityChecker(person1)
eligibilityChecker(person2)