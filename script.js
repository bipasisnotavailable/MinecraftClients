// Client data
const presetColors = {
        white: "#ffffff",
        black: "#000000",
        lime: "#00ff04",
        pink: "#ff00f2",
        purple: "#7700ff",
        lightGray: "#b5b5b5",
        gray: "#808080",
        darkGray: "#3b3b3b",
        red: "#ff0000",
        orange: "#ff8400",
        yellow: "#ffe600",
        lightGreen: "#91ff00",
        green: "#1aff00",
        darkGreen: "#0e8a00",
        turquoise: "#00ff8c",
        lightBlue: "#00ffd9",
        blue: "#0084ff",
        darkBlue: "#0800ff",
        darkPurple: "#2f0080",
        darkRed: "#800000"
    }

const clients = [
    {
        id: 1,
        name: "Raven XD",
        price: "Free",
        tags: ["Free", "Ghost", "Blatant", "Hypixel", "Forge", "recommended"],
        game: "Minecraft",
        description: "Raven XD is a forge mod based on Raven BS. It features multiple blatant features like Killaura or Scaffold but also less blatant ones.",
        cover: "https://raw.githubusercontent.com/xia-mc/Raven-XD/master/logo/logo.png",
        screenshots: ["https://github.com/user-attachments/assets/36e8920e-336e-4b62-ae3f-6b9962920812", "https://github.com/user-attachments/assets/85637f18-9d6b-47d9-9dc2-cb8594aff585"],
        downloadLink: "https://bstlar.com/3AL/Raven-XD",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#36fff5", // Accent
            header: "#f70cf0" // Header
        }
    },
    {
        id: 2,
        name: "Augustus",
        price: "80€",
        tags: ["Multi-Server", "Intave", "Polar", "Ghost", "Blatant", "recommended"],
        game: "Minecraft",
        description: "Introducing Augustus, a Minecraft 1.8 Client known for its extensive features. Boasting over 209 modules and a staggering 13,500+ customizable settings, Augustus is renowned for its unparalleled configurability. This client successfully bypasses popular servers like GommeHD, PikaNetwork, Mineblaze, and Gamster and outwits anti-cheats such as Intave, Polar, Grim, and Vulcan. Additionally, Augustus offers online configurations, allowing users to fine-tune their settings quickly. Elevate your Minecraft gameplay with Augustus – the ultimate choice for those seeking customization and performance.  ", // Stolen from Spezz.exchange
        cover: "https://spezz.exchange/uploads/monthly_2023_09/Augustus_Logo.webp.21990eea9fead38fbc9edfbc54b0a112.webp",
        screenshots: ["https://spezz.exchange/uploads/monthly_2023_09/menu.webp.8e9432567dc1832cbfc1aabbc28d21e8.webp", "https://spezz.exchange/uploads/monthly_2023_09/screenshot.webp.4d44057d55f05dfcf4dba55600a6e894.webp"],
        downloadLink: "https://spezz.exchange/store/product/191-augustus-client-lifetime/",
        otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"]],
        colors: {
            text: "#000000", // Text
            accent: "#007BFF", // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 3,
        name: "LiquidBounce",
        price: "Free",
        tags: ["Free", "Blatant", "Fabric", "recommended"],
        game: "Minecraft",
        description: "LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric.", // Stolen from official LiquidBounce website xd
        cover: "https://liquidbounce.net/img/logos/favicon.png",
        screenshots: ["https://liquidbounce.net/img/screenshots/clickgui-large.png", "https://liquidbounce.net/img/screenshots/hud-large.png", "https://liquidbounce.net/img/screenshots/xray-large.png", "https://liquidbounce.net/img/screenshots/main-menu-large.png"],
        downloadLink: "https://lootdest.org/s?9b96f488",
        otherButtons:[["https://bstlar.com/3AL/SimpleBounce", "SimpleBounce Theme"], ["https://www.youtube.com/watch?v=e2XqIRHpVOY", "Download Tutorial For Lunar"], ["https://liquidbounce.net/proxy", "LiquidProxy"]],
        colors: {
            text: "#000000", // Text
            accent: "#0040ff", // Accent
            header: "#0040ff" // Header
        }
    },
    {
        id: 4,
        name: "ThunderHack",
        price: "Free",
        tags: ["Free", "Blatant", "Fabric", "Crystal-PVP", "recommended", "Anarchy"],
        game: "Minecraft",
        description: "1.21 minecraft client for Crystal / Sword hvh",
        cover: "https://tiermaker.com/images/media/template_images/2024/17223351/minecraft-java-clients-17223351/thunderhack-recode-logo.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-1.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-7.jpg"],
        downloadLink: "https://bstlar.com/3AL/ThunderHack",
        otherButtons:[["https://fabricmc.net/", "Fabric"], ["https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/5531908", "Fabric API"]],
        colors: {
            text: "#000000", // Text
            accent: "#fc03cf", // Accent
            header: "#0040ff" // Header
        }
    },
    {
        id: 5,
        name: "DoomsDay",
        price: "Free",
        tags: ["Free", "Injectable", "Ghost"],
        game: "Minecraft",
        description: "DoomsDay is a multifunctional modification for Minecraft with many useful utilities. (like ghost client) Supports almost all versions of Minecraft!",
        cover: "https://assets-global.website-files.com/662ff817ffae75d95d2a93e4/662ffa85ecf13e98abc98ea9_Bez%20tytu%C5%82u.png",
        screenshots: ["https://doomsdayclient.com/doomsday.png"],
        downloadLink: 'https://lootdest.org/s?1f578b31',
        colors: {
            text: "#000000", // Text
            accent: "#b0b0b0", // Accent
            header: "#6b6b6b" // Header
        }
    },
    {
        id: 6,
        name: "BoyKisserCentral",
        price: "Free",
        tags: ["Free", "recommended"],
        game: "PG3D",
        description: "Cheat for Pixel Gun 3D PC. Download the injector and use the NEW DLL. Old one does not work anymore",
        cover: "https://fbi.cults3d.com/uploaders/16600790/illustration-file/16a0b6ea-d282-444a-b222-5853ccd49e35/IMG_0316.webp",
        screenshots: ["https://i.ytimg.com/vi/DCFoMVurCV0/maxresdefault.jpg"],
        downloadLink: "https://loot-link.com/s?e00f6698",
        otherButtons:[["https://discord.gg/XferVCVFkZ", "Join Their Discord"]],
        colors: {
            text: "#000000", // Text
            accent: "#b0b0b0", // Accent
            header: "#6b6b6b" // Header
        }
    },
    {
        id: 7,
        name: "FDP",
        price: "Free",
        tags: ["Free", "Blatant", "Forge"],
        game: "Minecraft",
        description: "FDP is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, FDP is completely free, open source and compatible with Forge. FDP is a fork of liquidbounce so you get the benefits of liquidbounce while still getting updates and support.",
        cover: "https://user-images.githubusercontent.com/105464811/177683437-8b768dcf-0e15-4ac4-85f0-2b673c2e8540.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-9.jpg"],
        downloadLink: "https://bstlar.com/3AL/FDP",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#df5eff", // Accent
            header: "#42bff5" // Header
        }
    },
    {
        id: 8,
        name: "Aristois",
        price: "Free",
        tags: ["Free", "Anarchy"],
        game: "Minecraft",
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting. Aristois offers over 100 in-game modules to extend and enhance your Minecraft gameplay. With a focus on PvE, we offer a modern and personlised experience — get it today! In addition to many unique modules and features, Aristois contains a worldwide in-game chat. Plan your next adventure and coordinate with players on other servers, right from the chat. The Aristois UI is designed with customisation in mind, so it can look exactly how you want it. We've also created two additional UIs to enhance speed and smoothness of enabling mods.",
        cover: "https://aristois.net/logo.webp",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://bstlar.com/3AL/Aristois",
        colors: {
            text: "#000000", // Text
            accent: "#85a9ff", // Accent
            header: "#d885ff" // Header
        }
    },
    {
        id: 9,
        name: "Meteor",
        price: "Free",
        tags: ["Free", "Anarchy"],
        game: "Minecraft",
        description: "Based Minecraft utility mod.",
        cover: "https://meteorclient.com/icon.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/06/Meteor-Client-Mod-Screenshots-10.jpg"],
        downloadLink: "https://bstlar.com/3AL/Meteor",
        colors: {
            text: "#000000", // Text
            accent: "#9000ff", // Accent
            header: "#ca85ff" // Header
        }
    },
    {
        id: 10,
        name: "Breeze",
        price: "$25",
        tags: ["Hypixel", "Blatant", "Ghost", "Injectable", "Forge", "recommended"],
        game: "Minecraft",
        description: "Elevate your gaming experience effortlessly with Breeze Client. Our state-of-the-art cheats and stunning visuals are designed to make winning a breeze, empowering you to dominate the game like never before.",
        cover: "https://breeze.rip/assets/logos/logo.png",
        screenshots: ["https://breeze.rip/assets/photos/ui.png", "https://www.9minecraft.net/wp-content/uploads/2024/06/Breeze-Client-Mod-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2024/06/Breeze-Client-Mod-Screenshots-6.jpg"],
        downloadLink: "https://breeze.rip",
        otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"], ["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#6420f7", // Accent
            header: "#20c5f7" // Header
        }
    },
    {
        id: 11,
        name: "Packet V3",
        price: "$50.30",
        tags: ["Injectable", "Hive", "recommended"],
        game: "Minecraft Bedrock",
        description: "key features: online integration (social menu): friend people, send dms, and share configs directly in dms; config manager: utilize local and cloud configs, allowing you to upload and share your best configs for any server; bypasses and visuals: experience better and more stable bypasses, insane visuals, and more crazy modules; compatibility: minecraft version: 1.21.21; platforms: windows 10/11; payment options (usd); $2.30: 1 week; $5.30: 1 month; $14.30: 3 months; $50.30: lifetime",
        cover: "assets/Logos/Packet.webp",
        screenshots: ["https://i.ytimg.com/vi/eVo6Oc7KGDY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAH0JbEZdTEI91oMZlcdMdle68_lw"],
        downloadLink: "https://discord.com/invite/packetv3",
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 12,
        name: "Raven B4",
        price: "$150",
        tags: ["Hypixel", "Forge"],
        game: "Minecraft",
        description: "25$ discount when you buy trough 'ihasedich', dm him on discord",
        cover: "https://i.pinimg.com/736x/28/bc/1d/28bc1d0c2420d7cea6238b1200b3b35f.jpg",
        screenshots: [],
        downloadLink: "ihasedich",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"]],
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 13,
        name: 'Wurst',
        price: 'Free',
        tags: ["Free", "Fabric", "Anarchy"],
        description: "OP Client",
        game: "Minecraft",
        cover: 'https://wurst.wiki/_media/logo/wurst_centered_256.png',
        screenshots: [],
        downloadLink: 'https://bstlar.com/3AL/Wurst',
        otherButtons:[["https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/5531908", "Fabric API"], ["https://fabricmc.net/", "Fabric"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.orange, // Accent
            header: presetColors.orange // Header
        }
    },
    {
        id: 14,
        name: 'Rise',
        price: '$29',
        tags: ["Hypixel" ,"Blatant"],
        game: "Minecraft",
        description: "Rise Client.The best Minecraft cheating solution.",
        cover: 'assets/Logos/rise.webp',
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/11/Rise-Client-Screenshots-9.jpg" , "https://preview.redd.it/wixg4tq2srf81.png?width=1875&format=png&auto=webp&s=70a5cccad83683227c3b62bb5aaf37511a9af160"],
        downloadLink: 'https://riseclient.com/',
        otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"]],
        colors: {
            text: "#ffffff", // Text
            accent: "#77257d", // Accent
            header: "#db14b7" // Header
        }
    },
    {
        id: 15,
        name: 'Novoline.lol',
        price: '$19.99',
        tags: ["Hypixel" ,"Blatant"],
        game: "Minecraft",
        description: "Arguably the best Utility Modification for Minecraft with a bunch of exclusive features. Built for the smo​othest experience.Supporting 1.8-1.18 Java Edition.",
        cover: 'https://www.novoline.lol/images/image3.png',
        screenshots: ["https://i.redd.it/3-0-update-v0-i5v2uw3b09l81.jpg?width=959&format=pjpg&auto=webp&s=576857df4dc80ac94e9342285e5bac5cb160838a" , "https://media.karousell.com/media/photos/products/2022/12/31/novolinelol_client_minecraft_c_1672506329_9b5006b5_progressive"],
        downloadLink: 'https://www.novoline.lol/',
        colors: {
            text: "#ffffff", // Text
            accent: "#5f59ff", // Accent
            header: "#0c001b" // Header
        }
    },
    {
        id: 16,
        name: 'Aqua Free',
        price: 'Free',
        tags: ["Free" ,"Blatant", "outdated"],
        game: "Minecraft",
        description: "Aqua is an outdated client made by LCA. There is an up to date paid version of it called Aqua Reborn (Aqua)",
        cover: 'https://pbs.twimg.com/profile_images/1288183040779399171/qScv_vQH_400x400.jpg',
        screenshots: ["https://i.ytimg.com/vi/bvCEL3b4wv4/maxresdefault.jpg"],
        downloadLink: 'https://loot-link.com/s?db866429',
        colors: {
            text: presetColors.black, // Text
            accent: "#5f59ff", // Accent
            header: "#0c001b" // Header
        }
    },
    {
        id: 17,
        name: 'Senura',
        price: 'Free',
        tags: ["Free" ,"Forge", "outdated", "Ghost"],
        game: "Minecraft",
        description: "Very old free Ghost client which might still work on bad server like Hypixel",
        cover: 'assets/Logos/Senura.png',
        screenshots: ["https://i.ytimg.com/vi/wjf6L3a8ieY/mqdefault.jpg", "assets/Logos/senuraingame.png"],
        downloadLink: 'https://lootdest.org/s?5d27659b',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.darkPurple // Header
        }
    },
    {
        id: 18,
        name: 'Tarasande',
        price: 'Free',
        tags: ["Free" ,"Fabric"],
        game: "Minecraft",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur explicabo ex maiores a odit sequi accusamus. Amet esse ad, at dolorem deserunt nostrum quo quaerat voluptatem, expedita provident excepturi.",
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0DKUHvvPLI-TXRIc11VGXUY3KMxUqd8zEQ&s',
        screenshots: ["https://github.com/Sumandora/tarasande/blob/1.20.4/media/GUI.png?raw=true", "https://github.com/Sumandora/tarasande/blob/1.20.4/media/BedESP%20showcase.png?raw=true"],
        downloadLink: 'https://bstlar.com/3AL/Tarasande',
        otherButtons:[["https://bstlar.com/3AL/TarasandeCustom", "Custom Tarasande Version"], ["https://github.com/FabricMC/fabric-language-kotlin/releases", "(required) Fabric Kotlin Support"]],
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.pink, // Accent
            header: presetColors.purple // Header
        }
    },
    {
        id: 19,
        name: "Rusher Hack",
        price: "$20",
        tags: ["Fabric", "Anarchy"], // Credits to wianis
        game: "Minecraft",
        description: "Focusing only 2b2t",
        cover: "assets/Logos/rusherhack-logo.png",
        screenshots: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wut5N3AIK7RvLBYBLtQUmKKfs9BkxNmOIPnkQdfWjcl9DVg8iENzLOxH&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6SUWSRCj63ffH_tYX64oYFk__c8850ijR7dLX9cNDTKKwTZr5uWqAHPC&s=10"],
        downloadLink: "https://rusherhack.org",
        colors: {
            text: "#800080", // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 20,
        name: "Opal Client",
        price: "$50",
        tags: ["Fabric", "Blatant", "Hypixel"], // Credits to wianis
        game: "Minecraft",
        description: "Focusing hypixel, don't have multiserver bypasses.",
        cover: "https://cdn.modrinth.com/data/wossRhga/e25cdbc6f5ba5db74c13a8797c044363b58e1e5c.webp",
        screenshots: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCUpfU4Ud3qytXA2JZ1LoryVg97b55dDAuIBVobb1xvCTRa4I9SxM5jHK&s=10", "assets/Logos/OpalIngame.png"],
        downloadLink: "https://opal.wtf",
        otherButtons:[["https://luren.wiki/", "中国采购(Chinese Purchase)"]],
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.lightBlue, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 21,
        name: "Sigma Jello",
        price: "Free",
        tags: ["Free", "Blatant", "outdated"],
        game: "Minecraft",
        description: "Discover the Sigma and Jello merge , Sigma 5.0 including Jello for Sigma  for FREE , 1.16 to 1.8",
        cover: "https://avatars.githubusercontent.com/u/83773282?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/0GwkNzz6wFc/maxresdefault.jpg", "https://cheater.fun/uploads/posts/2020-09/1600299856_prev.jpg"],
        downloadLink: "https://lootdest.org/s?a0af6607",
        colors: {
            text: "#000000", // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 22,
        name: "Augustus FREE (b2.6)",
        price: "Free",
        tags: ["Free", "Blatant"],
        game: "Minecraft",
        description: "Old Free Version of the 80€ Augustus Client. It does not get any updates but works fine on servers with bad anticheats like watchdog, ncp, verus or vulcan.",
        cover: "https://i.redd.it/4hqc4li4vdq51.png",
        screenshots: ["assets/Augustusb2_6/GUI.png"],
        downloadLink: "https://loot-link.com/s?9de8e0f7",
        colors: {
            text: "#000000", // Text
            accent: presetColors.red, // Accent 
            header: presetColors.darkRed // Header
        }
    },
    {
        id: 23,
        name: "Drip Lite",
        price: "$80",
        tags: ["Ghost", "Injectable", "recommended"],
        game: "Minecraft",
        description: "Vape, but better",
        cover: "https://avatars.githubusercontent.com/u/63714630?s=200&v=4",
        screenshots: ["https://drip.gg/menu-render.png"],
        downloadLink: "https://getd.rip/PJNLWXPJ",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.purple, // Accent
            header: presetColors.darkPurple // Header
        }
    },
    {
        id: 24,
        name: "Chimera",
        price: "Free",
        tags: ["Free", "Blatant"],
        game: "Minecraft",
        description: "Cancer, but for Minecraft",
        cover: "assets/Krebs/KrebsLogo.png",
        screenshots: ["assets/Krebs/Krebs1.webp", "assets/Krebs/Krebs2.webp", "assets/Krebs/Krebs3.webp", "assets/Krebs/krebs4.webp"],
        downloadLink: "https://lootdest.org/s?5d533527",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.darkPurple // Header
        }
    },
    {
        id: 25,
        name: "Flux",
        price: "$20",
        tags: ["Blatant", "Hypixel"],
        game: "Minecraft",
        description: "Goes beyond basic Minecraft Modifications. offering intuitive options for the best gameplay experience.",
        cover: "assets/Logos/Flux.png",
        screenshots: ["https://i.ytimg.com/vi/Jv4AZQojYEw/maxresdefault.jpg"],
        downloadLink: "https://flux.today/",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.darkPurple // Header
        }
    },
    {
        id: 26,
        name: "Schizoid",
        price: "Free",
        tags: ["Free", "Fabric", "Ghost", "Blatant"],
        game: "Minecraft",
        description: "Proof that not every IMGUI-ClickGUI looks ass",
        cover: "https://github.com/Lyzev/Schizoid/blob/master/.idea/icon.png?raw=true",
        screenshots: ["assets/Shit_zeugs/ClickGui.png", "assets/Shit_zeugs/ingame.png"],
        downloadLink: "https://lootdest.org/s?2af3a3b1",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.green, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 27,
        name: "Haru",
        price: "Free",
        tags: ["Free", "Forge", "Ghost", "outdated"],
        game: "Minecraft",
        description: "Old fork from Raven B+",
        cover: "https://i1.sndcdn.com/artworks-SzLbaS0fj7iaYG6i-yxZygQ-t500x500.jpg",
        screenshots: ["https://camo.githubusercontent.com/6478890dc499cceffee1c5d03a5693b01ad7fe5274858c719e6465c6c60d9e93/68747470733a2f2f692e696d6775722e636f6d2f31325a675045692e706e67"],
        downloadLink: "https://loot-link.com/s?09645ab1",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.green, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 28,
        name: "Speed Autoclicker",
        price: "Free",
        tags: ["Free", "Ghost"],
        game: "Minecraft",
        description: "Free fully external autoclicker",
        cover: "https://www.chip.de/ii/1/2/6/6/1/5/4/2/6/AutoClicker_logo.jpg-b459966fd229d8c6.png",
        screenshots: ["https://fabi.me/wp-content/uploads/2009/01/speedautoclicker1.png"],
        downloadLink: "https://lootdest.org/s?cf869e58",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.green, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 29,
        name: "Aqua",
        price: "15€",
        tags: ["Blatant"],
        game: "Minecraft",
        description: "Holy Moly its aqua",
        cover: "assets/Logos/Aqua.webp",
        screenshots: ["https://minecraft-clients.de/cdn/shop/products/Screenshot_20230124_184740_c1696b44-5082-45a9-9a53-c60fa23bfbd9_480x.png?v=1675532236", "https://minecraft-clients.de/cdn/shop/products/Screenshot_20230124_184704_aa344975-4991-46e0-826d-ab91a7fecafa_720x.png?v=1675532236", "https://minecraft-clients.de/cdn/shop/products/Screenshot_20230124_184815_17df24c2-304b-4c71-ba40-a5e5d41440af_720x.png?v=1675532235"],
        downloadLink: "https://minecraft-clients.de/products/aqua-client-1",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.red, // Accent
            header: presetColors.orange // Header
        }
    },
    {
        id: 30,
        name: "Peter",
        price: "30€",
        tags: ["Blatant"],
        game: "Minecraft",
        description: "Client sucht den Wolf oder so. Kp auf jeden Fall dropt PikaSS manchmal das N-Wort wenn er gegen den Client auf BMC verliert",
        cover: "https://yt3.googleusercontent.com/ytc/AIdro_m7JpXKUjIUuw1g-M2No8zobfuoNJKcy78Jafd69m_Ddg=s900-c-k-c0x00ffffff-no-rj",
        screenshots: [],
        downloadLink: "https://provided.space/",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.gray, // Accent
            header: presetColors.darkRed // Header
        }
    },
    {
        id: 31,
        name: "Prestige",
        price: "20€",
        tags: ["Blatant"],
        game: "Minecraft",
        description: "Im Namen des Vaters, des Sohnes, des Heiligen Ghosts. (WillShorts gefällt der Client hab ich gehört)",
        cover: "https://yt3.googleusercontent.com/ytc/AIdro_m7JpXKUjIUuw1g-M2No8zobfuoNJKcy78Jafd69m_Ddg=s900-c-k-c0x00ffffff-no-rj",
        screenshots: [],
        downloadLink: "https://provided.space/",
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.darkBlue // Header
        }
    },
    {
        id: 32,
        name: "Raven B+",
        price: "Free",
        tags: ["Free", "Hypixel", "Ghost"],
        game: "Minecraft",
        description: "Raven B3 but better. No updates but still works on Hypixel with decent settings",
        cover: "https://avatars.githubusercontent.com/u/88325435?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/J-MQASXPh9k/hqdefault.jpg"],
        downloadLink: "https://loot-link.com/s?df8b360d",
        colors: {
            text: presetColors.darkGray, // Text
            accent: presetColors.purple, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 33,
        name: "Dog",
        price: "15$", // Made by nocheatpius
        tags: ["Blatant", "Hypixel"],
        game: "Minecraft",
        description: "Dog client is a 15 bucks client made by ouuuu and badaiim",
        cover: "assets/Logos/dog.webp",
        screenshots: ["https://i.postimg.cc/Twh93MY2/Screenshot-2024-08-25-124322.png"],
        downloadLink: "https://discord.gg/svAju6czRV",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 34,
        name: "Akira",
        price: "15$",
        tags: ["Ghost", "Hypixel", "Injectable"],
        game: "Minecraft",
        description: "Enhancing the enjoyment of Minecraft with Akira.",
        cover: "https://ankleanl.sirv.com/Akira/akira_logo.png",
        screenshots: [],
        downloadLink: "https://akiraghost.com/",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.red // Header
        }
    },
    {
        id: 35,
        name: "Sapphire",
        price: "Free",
        tags: ["Free" ,"Ghost", "Forge"],
        game: "Minecraft",
        description: "Free open-source Java/Kotlin Minecraft client that comes with standard features, exclusive capabilities, and is easily expandable.",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Geschliffener_blauer_Saphir.jpg/170px-Geschliffener_blauer_Saphir.jpg",
        screenshots: [],
        downloadLink: "https://loot-link.com/s?fafcb71f",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 36,
        name: "Acrimony",
        price: "Free",
        tags: ["Free" ,"Blatant", "Hypixel"],
        game: "Minecraft",
        description: "this client is made by kitxtz and _sophia_yu",
        cover: "https://raw.githubusercontent.com/spartanoah/acrimony-client/main/assets/minecraft/acrimony/acrimony.png",
        screenshots: [],
        downloadLink: "https://loot-link.com/s?08ce2653",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 37,
        name: "Nemui",
        price: "Free",
        tags: ["Free" ,"Blatant", "Hypixel", "Ghost", "Lunar", "Injectable", "recommended"],
        game: "Minecraft",
        description: "Download Weave Manager and start Nemui with it",
        cover: "https://yt3.googleusercontent.com/kqtuZViV4z6hibCVYoaKPPkH16YyVsfLtofKGKdhZS1l_NE8C5OdH2_WtAlgnsoUCommTmiOnQ=s900-c-k-c0x00ffffff-no-rj",
        screenshots: [],
        downloadLink: "https://bstlar.com/3AL/Nemui",
        otherButtons:[["https://bstlar.com/3AL/WeaveManager", "Get Weave Manager for free"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.blue // Header
        }
    },
    {
        id: 38,
        name: "Akira Clicker",
        price: "Free",
        tags: ["Free", "Ghost", "Hypixel", "Injectable", "recommended"],
        game: "Minecraft",
        description: "Enhancing the enjoyment of Minecraft with Akira.",
        cover: "https://ankleanl.sirv.com/Akira/akira_logo.png",
        screenshots: [],
        downloadLink: "https://bstlar.com/3AL/AkiraFree",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.lightGray, // Accent 
            header: presetColors.red // Header
        }
    },
    {
        id: 39,
        name: "CrossSine",
        price: "Free",
        tags: ["Free", "Blatant", "Forge"],
        game: "Minecraft",
        description: "Custom FDP Fork with many changes",
        cover: "https://avatars.githubusercontent.com/u/129695204?v=4",
        screenshots: [],
        downloadLink: "https://bstlar.com/3AL/CrossSine",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.purple, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 40,
        name: "Solstoice",
        price: "Free",
        tags: ["Free", "Injectable", "Hive", "recommended"],
        game: "Minecraft Bedrock",
        description: "",
        cover: "https://www.9minecraft.net/wp-content/uploads/2024/08/Solstice-Client-MCPE-3.jpg",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2024/08/Solstice-Client-MCPE-11.jpg"],
        downloadLink: "https://bstlar.com/3AL/Solstice",
        otherButtons:[["https://bstlar.com/3AL/FateInjector", "Injector"], ["https://bstlar.com/3AL/Bedrock", "BedrockLauncher"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.orange, // Accent
            header: presetColors.red // Header
        }
    },
    {
        id: 41,
        name: "Slack Client",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        description: "",
        cover: "https://github.com/DGVPSH/SlackOpen/blob/main/src/main/resources/assets/minecraft/slack/menu/mainmenu.jpg?raw=true",
        screenshots: [],
        downloadLink: "https://bstlar.com/3AL/Slack",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.green, // Accent
            header: presetColors.blue // Header
        }
    },
    {
        id: 42,
        name: "Aristois",
        price: "Free",
        tags: ["Free", "recommended"],
        game: "Minecraft",
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting.",
        cover: "https://aristois.net/logo.webp",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://bstlar.com/3AL/Aristois",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.green, // Accent
            header: presetColors.blue // Header
        }
    },
    {
        id: 180,
        name: "BlockOverlay",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        description: "Minecraft blockoverlay forge mod 1.8.9. Command: /blockoverlay",
        cover: "assets/Logos/BlockOverlayLogo.png",
        screenshots: ["assets/Logos/BlockOverlaySS.png"],
        downloadLink: "https://loot-link.com/s?71257f9b",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.white, // Text
            accent: presetColors.lightBlue, // Accent
            header: presetColors.pink // Header
        }
    },
    {
        id: 181,
        name: "Forge Alt Manager",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        description: "Ingame Account Switcher",
        cover: "https://media.forgecdn.net/avatars/thumbnails/540/804/256/256/637866988360940386.png",
        screenshots: [],
        downloadLink: "https://lootdest.org/s?c3f7fca4",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.orange, // Accent
            header: presetColors.gray // Header
        }
    },
    {
        id: 182,
        name: "ViaFabricPlus",
        price: "Free",
        tags: ["Free", "Fabric", "recommended"],
        game: "Minecraft",
        description: "Fabric mod to connect to EVERY Minecraft server version (Release, Beta, Alpha, Classic, Snapshots, Bedrock) with QoL fixes to the gameplay",
        cover: "https://raw.githubusercontent.com/ViaVersion/ViaFabricPlus/main/src/main/resources/assets/viafabricplus/icon.png",
        screenshots: [],
        downloadLink: "https://lootdest.org/s?dc1c39cb",
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.orange, // Accent
            header: presetColors.gray // Header
        }
    },
    {
        id: 183,
        name: "Labymod 3",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        description: "Fuck Labymod 4. It's not even a 'mod' so rather use Labymod 3",
        cover: "https://labymod.net/page/tpl/assets/images/white_wolf_small.png",
        screenshots: [],
        downloadLink: "https://lootdest.org/s?d4b5d79d",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.white // Header
        }
    },
    // CS2
    {
        id: 199,
        name: 'Neverlose',
        price: 'from 29€',
        tags: ["recommended"],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://avatars.githubusercontent.com/u/64214782?s=280&v=4',
        screenshots: ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/271224896/original/321cca51830834cd769d3529a8f42f2327bc1336/make-a-neverlose-hvh-config-for-your-playstyle.jpg"],
        downloadLink: 'https://neverlose.cc',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 200,
        name: 'tkazer',
        price: 'Free',
        tags: ['Free'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?bcea7495',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 201,
        name: 'aimstar',
        price: 'Free',
        tags: ['Free'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?bcea7495',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 202,
        name: 'En1gma',
        price: 'Free',
        tags: ['Free'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?f0f7465a',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 203,
        name: 'Ext. XONE',
        price: 'Free',
        tags: ['Free'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?f263b49a',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 204,
        name: 'Osiris v2',
        price: 'Free',
        tags: ['Free', "recommended"],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?63d9c626',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 205,
        name: 'Asphyxia',
        price: 'Free',
        tags: ['Free', 'outdated'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?212500ed',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 206,
        name: 'IMXNOOBX',
        price: 'Free',
        tags: ['Free', 'outdated'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?34f3fdd0',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 207,
        name: 'Orbit',
        price: 'Free',
        tags: ['Free', 'outdated'],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?ea144cac',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 208,
        name: 'Plaguecheat.cc',
        price: 'from 15€',
        tags: [],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://gcscheats.com/wp-content/uploads/2024/05/gcs-cheats-store-logo.webp',
        screenshots: [],
        downloadLink: 'https://plaguecheat.cc/',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 209,
        name: 'SDK2Changer',
        price: 'Free',
        tags: ['Free', "outdated"],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?9be4491b',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
        {
        id: 210,
        name: 'Nixware',
        price: 'from 3€',
        tags: ["recommended"],
        game: "CS2",
        description: "CS2 Cheat",
        cover: 'https://safemarket.vip/wp-content/uploads/2024/05/nixwarrrrrr.png',
        screenshots: [],
        downloadLink: 'https://nixware.cc',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    // CSGO
    {
        id: 300,
        name: 'Osiris',
        price: 'Free',
        tags: ['Free'],
        game: "CSGO",
        description: "CSGO Cheat",
        cover: 'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png',
        screenshots: ["https://data.exloader.net/webp_images/Osiris/visuals_edited.webp", "https://data.exloader.net/webp_images/Osiris/aimbot_edited.webp"],
        downloadLink: 'https://lootdest.org/s?818e8fa2',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 301,
        name: 'RaweTrip',
        price: 'Free',
        tags: ['Free'],
        game: "CSGO",
        description: "CSGO Cheat",
        cover: 'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png',
        screenshots: ["https://data.exloader.net/webp_images/Rawetrip/rage_edited.webp", "https://data.exloader.net/webp_images/Rawetrip/gameplay_edited.webp", "https://data.exloader.net/webp_images/Rawetrip/skins_edited.webp"],
        downloadLink: 'https://loot-link.com/s?41a25ed2',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    // TF2
    {
        id: 320,
        name: 'Fusion',
        price: 'Free',
        tags: ['Free'],
        game: "TF2",
        description: "Amalgam rei-kes based open-sources TF2 modification with lots of features for HvH gameplay.",
        cover: 'https://wiki.teamfortress.com/w/images/thumb/c/ca/Spyfencingtauntkill.png/250px-Spyfencingtauntkill.png',
        screenshots: ["https://data.exloader.net/webp_images/Fusion/gameplay.webp"],
        downloadLink: 'https://loot-link.com/s?443f8f1a',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 321,
        name: 'MFEDChanger',
        price: 'Free',
        tags: ['Free'],
        game: "TF2",
        description: "A simple and working skin changer that allows you to change weapon skins, visual effects and other stuff. Easy to customize.",
        cover: 'https://wiki.teamfortress.com/w/images/thumb/c/ca/Spyfencingtauntkill.png/250px-Spyfencingtauntkill.png',
        screenshots: ["https://data.exloader.net/webp_images/MFEDChanger/menu.webp", "https://data.exloader.net/webp_images/MFEDChanger/skin.webp"],
        downloadLink: 'https://lootdest.org/s?f002f1fc',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    // GTA and shit
    {
        id: 400,
        name: 'Kiddions',
        price: 'Free',
        tags: ['Free', "recommended"],
        game: "GTA V",
        description: "GTA Cheat",
        cover: 'https://i.pinimg.com/originals/5b/ec/47/5bec474d275dbdf8fdb071f30fc978f4.png',
        screenshots: ["https://www.kiddionsmodmenu.com/img/12.jpg"],
        downloadLink: 'https://lootdest.org/s?abf9416d',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 410,
        name: 'AmongUsCosmetics',
        price: 'Free',
        tags: ['Free'],
        game: "AmongUS",
        description: "Cosmetics unlocker",
        cover: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?0e2c7551',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 411,
        name: 'AmongUsMenu',
        price: 'Free',
        tags: ['Free'],
        game: "AmongUS",
        description: "AmongUS Cheat",
        cover: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        screenshots: ["https://data.exloader.net/webp_images/AmongUsMenu/replay.webp"],
        downloadLink: 'https://lootdest.org/s?f6716ab0',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    },
    {
        id: 420,
        name: 'Cheat Engine',
        price: 'Free',
        tags: ['Free', "recommended"],
        game: "Offline-Games",
        description: "Can be used to modify values (health, money, etc.) in most offline games",
        cover: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Cheat_Engine_Logo.png',
        screenshots: ["https://wiki.cheatengine.org/images/8/8e/Tutorials.CETutorialx64.step02.04.png"],
        downloadLink: 'https://lootdest.org/s?45e78dd6',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10000,
        name: 'Hidden Item',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Some Random hidden item lol. Item added: 23.08.2024",
        cover: 'https://images.emojiterra.com/google/android-11/512px/1f92b.png',
        screenshots: [],
        downloadLink: '',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10001,
        name: 'Raven XD Invis config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "How to use a config: Open clickgui, under profiles go to manager and press open folder. Then drop in the .json file and press on load profiles. Then just press on the profile name. Config uploaded: 24.08.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?a1b109db',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10002,
        name: 'LiquidBounce Nextgen BlocksMC config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Use '.localconfig load bmc' to load the config. No need to spoof version for this config. Config uploaded: 25.08.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?03b52de0',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10003,
        name: 'FDP Client Polar/Pikanetwork config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Use '.localconfig load Polar' to load the config. No need to spoof version for this config. Config uploaded: 28.08.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?a5a95bd5',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10004,
        name: 'FDP Client Vulcan/Supercraft config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Use '.localconfig load Vulcant' to load the config. No need to spoof version for this config. Config uploaded: 30.08.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?93e10e32',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10005,
        name: 'FDP Client BlocksMC config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Use '.localconfig load BMC' to load the config. No need to spoof version for this config. Config uploaded: 04.09.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?42f42070',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10006,
        name: 'Raven XD Hypixel Config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "How to use a config: Open clickgui, under profiles go to manager and press open folder. Then drop in the .json file and press on load profiles. Then just press on the profile name. Config uploaded: 13.09.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?8926bd0d',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10007,
        name: 'Raven XD Hypixel Config Bundle',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "How to use a config: Open clickgui, under profiles go to manager and press open folder. Then drop in the .json file and press on load profiles. Then just press on the profile name. Config uploaded: 20.09.2024.",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?e9b78a95',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10008,
        name: 'Enigma Legit Config',
        price: 'Free',
        tags: ['hidden'],
        game: "CS2",
        description: "",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?fb644d78',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10009,
        name: 'FDP Intave Fly config (gothaj gonna skid)',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Don't use FDP reload, use fdp 5.6.1!!!!!!!",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?16b519fc',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10010,
        name: 'Nemui Polar/ Legit Config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Config for Nemui Client",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://loot-link.com/s?9747eb27',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10011,
        name: 'Nixware Legit, Semirage/MM Rage Config',
        price: 'Free',
        tags: ['hidden'],
        game: "CS2",
        description: "Config for Nixware",
        cover: 'https://cdn-icons-png.flaticon.com/512/2246/2246713.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?6a3baaef',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10012,
        name: 'RavenXD Configs <3',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Configs for RavenXD. How to use a config: Open clickgui, under profiles go to manager and press open folder. Then drop in the .json file and press on load profiles. Then just press on the profile name.",
        cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/84fa5dcf-cf2f-4e1d-9522-2d70fe37c301/d64swdz-208d84f8-6ec5-4f85-a730-b736e5985c01.png',
        screenshots: [],
        downloadLink: 'https://bstlar.com/3AL/RavenXD-Configs',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    },
    {
        id: 10013,
        name: 'Tarasande MMCIsland Config',
        price: 'Free',
        tags: ['hidden'],
        game: "Minecraft",
        description: "Put the config file in C:/Users/Your_PCName/tarasande",
        cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/84fa5dcf-cf2f-4e1d-9522-2d70fe37c301/d64swdz-208d84f8-6ec5-4f85-a730-b736e5985c01.png',
        screenshots: [],
        downloadLink: 'https://bstlar.com/3AL/TarasandeMMCIsland',
        colors: {
            text: presetColors.black, // Text
            accent: presetColors.blue, // Accent
            header: presetColors.lightGray // Header
        }
    }
];
// Boolean flag to hide clients with "outdated" tag
let hideOutdated = true;

// Populate clients and filter options
document.addEventListener("DOMContentLoaded", () => {
    populateClients();
    populateTagFilter();
    populateGameFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
    const selectedTag = document.getElementById('tagFilter').value;
    const selectedGame = document.getElementById('gameFilter').value;
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        // Skip clients with "hidden" tag
        if (client.tags.includes("hidden")) {
            return;
        }

        // Skip clients with "outdated" tag if hideOutdated is true
        if (hideOutdated && client.tags.includes("outdated")) {
            return;
        }

        if ((selectedTag === "all" || client.tags.includes(selectedTag)) &&
            (selectedGame === "all" || client.game === selectedGame)) {
            const clientDiv = document.createElement('div');
            clientDiv.className = 'client';

            // Apply rainbow border if client is recommended
            if (client.tags.includes("recommended")) {
                clientDiv.classList.add('recommended');
            }

            clientDiv.innerHTML = `
                <img src="${client.cover}" alt="if you see this, firefox messed up (or bipas did lol)${client.name}">
                <h2>${client.name}</h2>
                <p>${client.game}</p>
                <p>${client.price}</p>
                <a href="client.html?id=${client.id}">View Client</a>
            `;
            clientList.appendChild(clientDiv);
        }
    });
}


// Function to populate tag filter options
function populateTagFilter() {
    const tagFilter = document.getElementById('tagFilter');
    let allTags = new Set();
    clients.forEach(client => {
        client.tags.forEach(tag => {
            if (tag !== 'hidden') {
                allTags.add(tag);
            }
        });
    });

    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// Function to populate game filter options
function populateGameFilter() {
    const gameFilter = document.getElementById('gameFilter');
    let allGames = new Set();
    clients.forEach(client => {
        allGames.add(client.game);
    });

    allGames.forEach(game => {
        const option = document.createElement('option');
        option.value = game;
        option.textContent = game;
        gameFilter.appendChild(option);
    });
}

// Function to toggle outdated clients visibility
function toggleOutdatedClients() {
    hideOutdated = !hideOutdated;
    document.getElementById('toggleOutdated').textContent = hideOutdated ? "Hide Outdated" : "Show Outdated";
    filterClients();
}

// Function to filter clients based on selected tag and game
function filterClients() {
    populateClients();
}
