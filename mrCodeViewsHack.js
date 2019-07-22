var request = require("request");
console.log("Running");
var counter = 0;
var a = "";
var b = "";

setInterval(function() {
    counter++;
    request.post("https://www.mrcodeswildride.com/showcase/record", { form: { projectId: "hangout" } });
}, 3);

var lastAmount = 0;
var lastAmount2 = 0;
var firstTime = true;


var username1 = "nicholast";
var projectName1 = "hangout";

var username2 = "trevorp";
var projectName2 = "global-clicker"

setInterval(function() {
    request.get("https://www.mrcodeswildride.com/showcase/projects?sort=points&type=all-project-types&value=all-project-values&student=" + username1, {},
        function(error, response) {
            for (var i = 0; i < JSON.parse(response.body).projects.length; i++) {
                var project1 = JSON.parse(response.body).projects[i];
                if (project1._id == projectName1) {
                    if (firstTime) {
                        lastAmount = project1.views;
                    }
                    var amountGained = project1.views - lastAmount;
                    lastAmount = project1.views;
                    request.get("https://www.mrcodeswildride.com/showcase/projects?sort=points&type=all-project-types&value=all-project-values&student=" + username2, {},
                        function(error, response2) {
                            for (var i = 0; i < JSON.parse(response2.body).projects.length; i++) {
                                var project2 = JSON.parse(response2.body).projects[i];
                                if (project2._id == projectName2) {
                                    if (firstTime) {
                                        lastAmount2 = project2.views;
                                        firstTime = false;
                                    }
                                    var amountGained2 = project2.views - lastAmount2;
                                    lastAmount2 = project2.views;
                                    var nextPassIn = 0;
                                    if (amountGained > amountGained2) {
                                        nextPassIn = (project2.views - lastAmount) / (amountGained - amountGained2);
                                    }
                                    else {
                                        nextPassIn = (lastAmount - project2.views) / (amountGained2 - amountGained);
                                    }

                                    if (lastAmount > project2.views) {
                                        a = "\x1b[46m";
                                        b = "\x1b[0m";
                                    }
                                    else {
                                        a = "\x1b[0m";
                                        b = "\x1b[46m";
                                    }

                                    if (Math.abs(nextPassIn) > 3600) {
                                        nextPassIn /= 3600;
                                        nextPassIn = Math.round(nextPassIn * 1000) / 1000;
                                        nextPassIn += " hours";
                                    }
                                    else if (Math.abs(nextPassIn) > 120) {
                                        nextPassIn /= 60;
                                        nextPassIn = Math.round(nextPassIn * 1000) / 1000;
                                        nextPassIn += " minutes";
                                    }
                                    else {
                                        nextPassIn = Math.round(nextPassIn * 1000) / 1000;
                                        nextPassIn += " seconds";
                                    }
                                    console.log(a, username1 + ":" + lastAmount + " : " + amountGained + "/sec" + "  |  ", b, username2 + ":" + project2.views + " : " + amountGained2 + "/sec", "\x1b[0m" + "  |   Next pass in " + nextPassIn)
                                }
                            }
                        });
                }
            }
        });
}, 1000);

// in the browser console

// var $ = window.$;

// //filters
// var username = "trevorp";
// var projectName = "global-clicker"
// var interval = setInterval(function() {
//     $.get("https://www.mrcodeswildride.com/showcase/projects", {
//         sort: "points",
//         type: "all-project-types",
//         value: "all-project-values",
//         student: username,
//         page: "0"
//     }, function(response) {
//         for (var i = 0; i < response.projects.length; i  ) {
//             if (response.projects[i]._id == projectName) {
//                 console.log(response.projects[i].views);
//             }
//         }
//     });
// }, 1000);
