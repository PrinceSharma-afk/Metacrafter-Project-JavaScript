/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFTS=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (name,desc,art,mrp) {
    let nft={"Name":name,
    "Description":desc,
    "Artist":art,
    "Price":mrp
        
    };
    NFTS.push(nft);
    console.log("All properties successfully pushed into NFTS array")
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
let i = NFTS.length;
console.log("List of all NFT is as follows:")
for(let j=0;j<i;j++){
    console.log("Name of NFT:" + NFTS[j].Name);
    console.log("Description:" + NFTS[j].Description);
    console.log("Artist Name:" + NFTS[j].Artist);
    console.log("Price:" + NFTS[j].Price);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("The total number of NFT minted is:" + NFTS.length);
}

// call your functions below this line
mintNFT("Morning", "Art of beautiful view of morning just after dawn.", "Lavanya","Rs 796");
mintNFT("Afternoon", "Art of the vast afternoon sky.", "Rohit","Rs 899");
mintNFT("Evening", "Art of sunset in the evening.", "Sandhya","Rs 600");
listNFTs();
getTotalSupply();
