Moralis.initialize("WrQJkJZs66S7Dp31Hm5Ujtn1o5uZ3pzZTmZmLOok"); // Application id from moralis.io
Moralis.serverURL = 'https://l5qznev3yhuw.moralis.io:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='ty-sir.github.io/client/erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
