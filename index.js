const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

function superBowlWin(record){
    const result = record.find(result)

    if(result === "W"){
        return record.year
    }
}
