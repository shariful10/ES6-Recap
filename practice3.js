let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}

const result1 = activities.activity1[0].song_list.song_1;
const result2 = activities.activity1[1].song_list.song_2;
console.log(result1);
console.log(result2);