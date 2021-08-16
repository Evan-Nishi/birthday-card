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
>   "roomcode": "yokai",\
>   "first": "Evan",\
>   "last": "Nishi",\
>   "message": "Happy birthday son!"\
>}

Sorry I'm bad at making docs, this codebase is a burning pile of spaghet, and this is supposed to only be for personal use.

TODO (let's be honest this proj dead):
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