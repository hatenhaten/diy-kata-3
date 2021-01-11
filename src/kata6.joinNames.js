const joinNames = (namesObj) => {
    let listString = ''

    for (let i=0; i<namesObj.length; i++) {
        listString += namesObj[i].name;

        if (i < namesObj.length - 2) {
        listString += ', ';
        } else if (i == namesObj.length - 2){
        listString += ' & ';
        }
    };

    return listString;
};

module.exports = joinNames;
