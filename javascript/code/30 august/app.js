var boys = ["aslam", "salman", "shoaib"]

var pappa = "afzal"

var salmanPappa = "Zeeshan"

var boysWithPappa = []

for (i = 0; i < boys.length; i++) {
    if (boys[i] == "salman") {
        continue
    }
    // boysWithPappa.push(boys[i] + " " + pappa)
    boysWithPappa = `${boys[i]} ${pappa}`
}