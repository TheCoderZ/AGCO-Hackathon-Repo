function randomizeData() {

    for (i = 0; i < testData.length; i++) {

        variance = generateRandomNumber();

        //testData[i][1] = testData + variance + 10;
        //alert(testData[i][1]);

        testData[i][1] = testData[i][1] + variance;
    }

    return true;
}

function generateRandomNumber() {
    var min = -2.246,
        max = 2.120,
        highlightedNumber = Math.random() * (max - min) + min;
    
        highlightedNumber = Math.round(highlightedNumber * 100) / 100;
    //alert(highlightedNumber);



    return highlightedNumber;
};

