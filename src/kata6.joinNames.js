const joinNames = (namesObj) => {
    const namesArr = namesObj.map(x => x.name);
    const firstItem = namesArr.shift();
    const lastItem = namesArr.pop();
    const listString = namesArr.join(', ');
    return firstItem + ', ' + listString + ' & ' + lastItem;
};

module.exports = joinNames;
