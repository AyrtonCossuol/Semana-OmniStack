module.exports = function parseStringAsArray(arraysAsString){
    return arraysAsString.split(',').map(tech => tech.trim());
}