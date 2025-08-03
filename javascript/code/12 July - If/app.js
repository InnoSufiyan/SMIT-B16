console.log("===>> javascript chal rahi hai")

var isBlind = prompt("Are you Blind???")

if (isBlind === 'Yes') {
    document.writeln("Hum aap sey mazirat khuwaan hai, aap ko hum license grant nahin kar saktey")
} else if (isBlind == "No") {
    const age = prompt("What is your age ???")
    //18
    if (age >= 18) {
        if (age <= 40) {
            document.writeln("Jee haaan aap license k liye eligible hain...")
        } else {
            document.writeln("Hamarey Mulak k preside MUhammad Shah boley hain k 40 sey uper wala banda kisi kaam ka nai....")
        }
    } else {
        document.writeln("Bachayyyyyy, baray ho k aao...")
    }


} else {
    alert("No Input from your side")
}

// const ammahSeyPoucha = prompt("Kya khaeyngi aap ???")

// if (ammahSeyPoucha == "biryani") {
//     document.writeln("Biryani k resturant chalo")
// } else if (ammahSeyPoucha == "tikka") {
//     document.writeln("Tikka lenay jaounga")
//     const konsaTikka = prompt("Konsa tikka laana hai, leg piece, ya chest piece")

//     if (konsaTikka === 'leg') {
//         document.writeln("BHaiyyaa ek leg piece ka tikka de do")
//     } else {
//         document.writeln("Bhaiyyaa ek chest piece ka tikka de do")
//     }
// } else {
//     document.writeln("Kuch bhi nahin lunga aur ghar chala jaounga")
// }