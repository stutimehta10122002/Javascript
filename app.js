const favmovie = "yjhd";

let guess = prompt(" guess the movie name");
while ( ( guess != favmovie) && ( guess != "quit")) 
{ 
    guess =prompt("  wrong! guess the movie name again");
}
if (guess == favmovie) {
    console.log ( "congrats!");
}
else {
    console.log ("you quit!");
}