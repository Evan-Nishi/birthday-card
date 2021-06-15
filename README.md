# Birthday Card Template

WIP

To make a birthday card send a POST request in json to https://bday.evannishi.me/api/config with the body in JSON format.  

{
    roomcode: String //what the link is going to be ie bday.evannishi.me/\[roomcode\],
    name: String //the name of the person,
    date: Date //the date including year,
    old: Number //year oldm
    bgcolors: Array of Strings //each string should be a hex val that will be one section of the flowy background,
    email: String //email of host
    passcode: String //optional passcode for accessing card
    password: String //not optional password for editing card
}

example:
{
	"roomcode": "yokai",
	"name": "Yokai",
	"date": "1/1/2021",
    "year_old": 1,
	"bgcolors": ["#B57EDC", "#D198F9", "#EEB4FF", "#FFDoFF", "#FFECFF"],
    "email": "birbboi@evannishi.me",
	"password": "thisCodeBigBad"
}


sorry I'm bad at making docs, this codebase is a burning pile of spaghet, and this is supposed to only be for personal use 
