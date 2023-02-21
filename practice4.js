// 4. How will you display
// a. Petersburg
// b. Herry
let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
    
    "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

const result1 = students['2222'].address.city;
const result2 = students['3333'].name;
console.log(result1);
console.log(result2);