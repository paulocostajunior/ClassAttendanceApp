// import { createSign } from "crypto";
// import { EAGAIN } from "constants";
// import { template } from "@babel/core";

export const getData = async () => {
    let response = await fetch("https://student-attendance-fb7b8.firebaseio.com/classes.json")
    .catch(err => {
        alert("Something went wrong, sorry :/");
        console.log(err);
    })
    let parsedRes = await response.json();
    return parsedRes;
}