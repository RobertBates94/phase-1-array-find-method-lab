function criteria(object){
    return object.result === "W"
}
function superbowlWin(records){
    const result = records.find(criteria);
    if (result){
        return result.year;
    }
}
console.log(superbowlWin(records));
