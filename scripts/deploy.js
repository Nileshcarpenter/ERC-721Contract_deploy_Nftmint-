async function main() {
    const MyNFT = await ethers.getContractFactory("MyNft");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x271D2BeB5db7266Cd34D512C8F8c06AD247fab4a

  //0x27c9fd3D5BF68D9dBeE7C0eDac58118fC89Ce2e1