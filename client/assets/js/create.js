Moralis.initialize("WrQJkJZs66S7Dp31Hm5Ujtn1o5uZ3pzZTmZmLOok"); // Application id from moralis.io
Moralis.serverURL = 'https://l5qznev3yhuw.moralis.io:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721';
});
