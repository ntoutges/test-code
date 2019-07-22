// put into console of https://highlow.mrcodeswildride.com/

// might be broken

// function highLowBeater(times) {
//     var counter = 0;
//     var interval = setInterval(function() {
//         counter++;
//         if (counter >= times) {
//             clearInterval(interval);
//         }
//         document.getElementById("pickNumber").click();
//         document.getElementById("betSlider").value = 5;

//         // takes advantage of rounding
//         var h = document.getElementById("higherPayout").innerHTML.split("$")[1];
//         var l = document.getElementById("lowerPayout").innerHTML.split("$")[1];
//         var number = document.getElementById("number").innerHTML.split(" ")[3];

//         var payoutH = h / (parseFloat(h, 10) + parseFloat(l, 10));
//         var payoutL = l / (parseFloat(h, 10) + parseFloat(l, 10));

//         var probH = number / 99;
//         var probL = (99 - number) / 99;
 
//         if (payoutH > probH) {
//             document.getElementById("higher").click();
//         }
//         else if (payoutL > probL) {
//             document.getElementById("lower").click();
//         }
//         else if (probL == payoutL && payoutH == payoutH) {
//             if (Math.random() > 0.5) {
//                 document.getElementById("higher").click();
//             }
//             else {
//                 document.getElementById("lower").click();
//             }
//         }
//         document.getElementById("playAgain").click();
//     }, 1)
// }
