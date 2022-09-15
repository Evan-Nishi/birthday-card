# Birthday Card Template

WIP

To make a birthday card send a POST request in json to https://bday.evannishi.me/api/config with the body in JSON format.  

create card example:

>{\
>	"roomcode": "yokai",\
>	"name": "Yokai",\
>	"date": "1/1/2021",\
>    "old": 1,\
>	"bgcolors": ["#B57EDC", "#D198F9", "#EEB4FF", "#FFDoFF", "#FFECFF"],\
>    "email": "birbboi@evannishi.me",\
>	"password": "thisCodeBigBad",\
>   "front": "https://somerandomimg.com",\
>}

create message example:
>{\
>   "first": "Evan",\
>   "last": "Nishi",\
>   "message": "Happy birthday son!"\
>}

Card Result (click on card to open!)
![opened card](https://github.com/Evan-Nishi/birthday-card/blob/master/opencard.png?raw=true)

NOTE this was meant only for personal use and has literally no security, so any data stored on the mongo cluster is basically freely open to the web
TODO:
- Documentation
- Security
- Error handling
- Duplicate roomcode checking
- Card deletion
- Email alert
- Card editing
- Multiple signatures
- Auth for sign/edit
- More detailed response errors
