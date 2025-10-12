console.log("==>> javascript is running")

function foo(num) {

    if (num < 0 || num > 100000) return "Invalid Number"

    if (num == 0) return "Zero"

    const arr = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen", "Twenty"]

    const baraArr = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty", "Hundred"]

    // const aurBaraArr = ["", "One Hundred", "Two Hundred", "Three Hundred", "Four Hundred", "Five Hundred", "Six Hundred", "Seven Hundred", "Eight Hundred", "Nine Hundred", "One Thousand"]

    function numbersLessThan100(numm) {
        return baraArr[Math.floor(numm / 10)] + " " + arr[numm % 10]
    }

    function numbersLessThanThousand(numm) {
        return arr[Math.floor(numm / 100)] + " hundred and " + numbersLessThan100(numm % 100)
    }
    function numbersLessThanTenThousand(numm) {
        if ((numm % 1000) < 100) {
            return arr[Math.floor(numm / 1000)] + " thousand and " + numbersLessThan100(numm % 1000)

        } else {
            return arr[Math.floor(numm / 1000)] + " thousand and " + numbersLessThanThousand(numm % 1000)
        }
    }

    if (num < 20) {
        return arr[num]
    }

    if (num <= 100) {
        return numbersLessThan100(num)
    }

    if (num < 1000) {
        return numbersLessThanThousand(num)
    }

    if (num < 10000) {
        return numbersLessThanTenThousand(num)
    }
    if (num < 100000) {
        return arr[Math.floor(num / 10000)] + " thousand and " + numbersLessThanTenThousand(num % 10000)
    }

    if (num == 100000) {
        return "One Lac"
    }
}

foo(1213)

// 100000
// 100000