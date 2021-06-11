# [Ty-Sir.github.io](https://ty-sir.github.io/client/index.html)

## OpenMint
OpenMint is a [dapp](https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp) that combines aspects of social media platforms and a marketplace. It allows any (Open) user to create (Mint), buy, sell, and transfer ERC-721 tokens, which represent artworks in the form of an image, audio, or video file. It is important to clarify that ownership of the ERC-721 token proves ownership of the artwork it represents. It's similar to owning a deed to a house in that anyone can still see the house, it could appreciate or depreciate in value, but the one who owns the deed owns the house and can sell if they want.

OpenMint utilizes the powerful nature of [Moralis](https://moralis.io/) which takes the place of writing backend infrastructure and allows the dapp to easily populate a database using user input, emitted events in smart contracts, and balances in each user's [MetaMask](https://metamask.io/) wallet.

### Visit OpenMint-Testnet
OpenMint is currently on Binance Smart Chain Testnet. To interact with, follow these steps:

 - Open up your MetaMask wallet and click on the current network, then click on "Custom RPC" at the bottom of the dropdown.
 - Enter the follow information in the corresponding input fields:
   -  **Network Name:** BSC Testnet 
   -  **New RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545/
   -  **Chain ID:** 97
   -  **Currency Symbol:** BNB
   -  **Block Explorer URL:** https://testnet.bscscan.com
 - You are now connected to BSC Testnet, now you need some test BNB to interact with OpenMint.
   -  Here is the [BSC Faucet for test BNB](https://testnet.binance.org/faucet-smart), you can only get 1 test BNB every 24 hours via this faucet.
 - Now that your wallet has some test BNB, you [click here to interact with OpenMint](https://ty-sir.github.io/client).

### Features

#### File Types
When creating an NFT a user can upload any png, jpeg, gif, webp, mp4, video/webm, mp3, audio/webm, or mpeg file 64 MB or less. If a user would like to upload a file larger than 64 MB see Unlockable Content below.

#### Securely Stored Metadata
OpenMint stores and pins the ERC-721 metadata on [IPFS](https://ipfs.io/) using a gateway provided by [Moralis](https://moralis.io/).

#### Unlockable Content
Unlockable content is any information that can be described in text format that you want the owner of the NFT you create on OpenMint to have exclusive access to.  This can be anything such as a link to a high-res download since the maximum file size you can upload to IPFS on OpenMint is 64 MB, or it could be a password to a website to unlock a physical product. Your imagination is the limit! 

The description of what the unlockable content contains is typically found under Additional Info which can be found by clicking on an artwork that takes you to the token's page. This information stays with the token and transfers with ownership on sale or when transferred. This information can only be set when creating the NFT and cannot be changed later.

#### Search Bar
At the top of every page in the navigation bar, there is a search bar that can be used to find any NFT or user on OpenMint based on either their username, the title they have given to the NFT, or their wallet address. If searching for an NFT the username and wallet address is checked against the creator or current owner, and the title is checked against the title.  If searching for a specific user the username is checked against the current username, and the wallet address is checked against the wallet address used when they connected to OpenMint initially.

#### Tipping
Users can send tips in the form of crypto-currency to each other using a Send Tip button found on their profile page.

#### Buying
In two clicks a user can own an ERC-721 token, and while not visually shown in their wallet, can be seen in their profile which shows all the ERC-721 tokens they currently own and have created among other categories such as tokens they have for sale, liked, and encouraged to sell.

#### Selling
After setting approval for the OpenMint marketplace contract, which is done with a single click, users can sell their ERC-721 tokens to any other OpenMint users.

#### Transferring
If the ERC-721 token is not on sale a user can transfer their token to any address they desire. Once the new owner connects their [MetaMask](https://metamask.io/) wallet to OpenMint they can view the token(s) on their profile page.  

Transferring is also how a user can make sure their token can never be owned again. This is done by transferring the token to the equivalent of a zero address. If desired we recommend this one: `0x000000000000000000000000000000000000dead`. By transferring to this address or one similar, others can still view the artwork on OpenMint, but new ownership is not possible since the owner is now an address to which no one has the private keys.

#### Royalties
A royalty is a certain percentage of the sale price that is automatically held in an escrow contract when a sale is successful and sits securely until withdrawn by the original creator. It is set during the creation process and cannot be changed due to the nature of a blockchain. At OpenMint we have a minimum of 1% and a maximum of 50% able to be set.

#### 2% Sales Fee
Before deployment of the smart contracts, a wallet address (known as publisher wallet in `OpenMintMarketplace.sol`) can be set to receive a hardcoded 2% fee of what the artwork sells for. 

For example, if an artwork is resold for 1 ETH, the royalty is 10%, and the sales fee is 2%. 
 - The seller will receive 0.88 ETH.
 - The creator will receive 0.10 ETH.
 - The publisher wallet will receive 0.02 ETH.

#### Likes & Shares
Just like other social media platforms, OpenMint allows users who connect their wallet to like a certain ERC-721 token. These ERC-721 tokens along with user profiles can be shared via a Tweet, a Facebook post, or an email. Facebook posts will not work when hosted locally.

#### Following
A user can follow another via the "Follow" button on their profile page. A list of who each user follows and is followed by is on their profile page under "Following" and "Followers" respectively. When a user's wallet is connected, if a user follows another, and if the one they are following has created NFTs on OpenMint, their created work, regardless of who the current owner is, will show up under the Following tab found in the navigation bar at the top of each page.

#### Encouragements
If a token is not on sale, but a user would like it to be, a bell button can be clicked and a count is incremented which signifies to the owner that a certain number of people would like that artwork put for sale.  Once the owner puts the artwork for sale this encouragement count is reset.

### Security
#### Withdrawal Payment Pattern

OpenMint integrates [OpenZeppelin](https://openzeppelin.com/contracts/) contracts, and a payment gateway contract alongside an escrow contract to keep a user's earned funds secure until they are ready to withdraw to their [MetaMask](https://metamask.io/) wallet. The button to withdraw can be found on the profile page under the bio when a wallet is connected.  If the green button just says "Withdraw" and is unable to be clicked, there is nothing to withdraw. If the button says "Withdraw" followed by a number amount of ETH (Withdraw 1.1234 ETH), then a user can click the button, confirm in the popup modal, and then confirm the transaction in [MetaMask](https://metamask.io/).


### License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/Ty-Sir/OpenMint/blob/main/LICENSE)
