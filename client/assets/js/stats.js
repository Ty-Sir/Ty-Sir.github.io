Moralis.initialize("WrQJkJZs66S7Dp31Hm5Ujtn1o5uZ3pzZTmZmLOok"); // Application id from moralis.io
Moralis.serverURL = 'https://l5qznev3yhuw.moralis.io:2053/server'; //Server url from moralis.io

const user = Moralis.User.current();

$(document).ready(()=>{
  $('[data-toggle="tooltip"]').tooltip();
  getAmountSold();
});

// if(user == null){
//   $('.container').html(`<p id="notYetConnectedText">Please connect wallet to view your stats</p>`);
//   $('#ifWalletNotConnectedModal').modal('show');
// };


async function getAmountSold(){
  const params = {ethAddress: user.attributes.ethAddress};
  let userInfo = await Moralis.Cloud.run('getUser', params);
  let amountSold = userInfo.amountSold;
  if(amountSold == undefined){
    $('#amountSold').html(0);
  } else{
    $('#amountSold').html(amountSold);
  }
  console.log(amountSold);
};
