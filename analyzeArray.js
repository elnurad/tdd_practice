function average_value(ob){
    const sum_of_array = ob.reduce((prev, cur)=> prev + cur)
    return sum_of_array/ob.length;
}

function analyzeArray(ob){
    return {average: average_value(ob),
            min: Math.min(...ob),
            max: Math.max(...ob),
            length: ob.length
    }
};

module.exports = analyzeArray;