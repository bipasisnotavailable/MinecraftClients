// Client data
const clients = [
    {
        id: 1,
        name: "Raven XD",
        price: "Free",
        tags: ["Free", "Ghost", "Blatant", "Hypixel", "Forge"],
        description: "Raven XD is a forge mod based on Raven BS. It features multiple blatant features like Killaura or Scaffold but also less blatant ones.",
        cover: "https://raw.githubusercontent.com/xia-mc/Raven-XD/master/logo/logo.png",
        screenshots: ["https://github.com/user-attachments/assets/36e8920e-336e-4b62-ae3f-6b9962920812", "https://github.com/user-attachments/assets/85637f18-9d6b-47d9-9dc2-cb8594aff585"],
        downloadLink: "https://lootdest.org/s?abc853f3",
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
        tags: ["Multi-Server", "Intave", "Polar", "Ghost", "Blatant"],
        description: "Introducing Augustus, a Minecraft 1.8 Client known for its extensive features. Boasting over 209 modules and a staggering 13,500+ customizable settings, Augustus is renowned for its unparalleled configurability. This client successfully bypasses popular servers like GommeHD, PikaNetwork, Mineblaze, and Gamster and outwits anti-cheats such as Intave, Polar, Grim, and Vulcan. Additionally, Augustus offers online configurations, allowing users to fine-tune their settings quickly. Elevate your Minecraft gameplay with Augustus – the ultimate choice for those seeking customization and performance.  ", // Stolen from Spezz.exchange
        cover: "https://spezz.exchange/uploads/monthly_2023_09/Augustus_Logo.webp.21990eea9fead38fbc9edfbc54b0a112.webp",
        screenshots: ["https://spezz.exchange/uploads/monthly_2023_09/menu.webp.8e9432567dc1832cbfc1aabbc28d21e8.webp", "https://spezz.exchange/uploads/monthly_2023_09/screenshot.webp.4d44057d55f05dfcf4dba55600a6e894.webp"],
        downloadLink: "https://spezz.exchange/store/product/191-augustus-client-lifetime/",
        colors: {
            text: "#000000", // Text
            accent: "#007BFF", // Accent
            header: "#343A40" // Header
        }
    },
    {
        id: 3,
        name: "LiquidBounce",
        price: "Free",
        tags: ["Free", "Blatant", "Fabric"],
        description: "LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric.", // Stolen from official LiquidBounce website xd
        cover: "https://liquidbounce.net/img/logos/favicon.png",
        screenshots: ["https://liquidbounce.net/img/screenshots/clickgui-large.png", "https://liquidbounce.net/img/screenshots/hud-large.png", "https://liquidbounce.net/img/screenshots/xray-large.png", "https://liquidbounce.net/img/screenshots/main-menu-large.png"],
        downloadLink: "https://lootdest.org/s?9b96f488",
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
        tags: ["Free", "Blatant", "Fabric", "Crystal-PVP"],
        description: "1.21 minecraft client for Crystal / Sword hvh",
        cover: "https://tiermaker.com/images/media/template_images/2024/17223351/minecraft-java-clients-17223351/thunderhack-recode-logo.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-1.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-7.jpg"],
        downloadLink: "https://lootdest.org/s?37eb7f96",
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
        name: "PG3D",
        price: "Free",
        tags: ["PG3D"],
        description: "Cheat for Pixel Gun 3D PC",
        cover: "https://fbi.cults3d.com/uploaders/16600790/illustration-file/16a0b6ea-d282-444a-b222-5853ccd49e35/IMG_0316.webp",
        screenshots: ["https://i.ytimg.com/vi/DCFoMVurCV0/maxresdefault.jpg"],
        downloadLink: "https://lootdest.org/s?d566af46",
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
        description: "FDP is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, FDP is completely free, open source and compatible with Forge. FDP is a fork of liquidbounce so you get the benefits of liquidbounce while still getting updates and support.",
        cover: "https://user-images.githubusercontent.com/105464811/177683437-8b768dcf-0e15-4ac4-85f0-2b673c2e8540.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-9.jpg"],
        downloadLink: "https://lootdest.org/s?db52142d",
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
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting. Aristois offers over 100 in-game modules to extend and enhance your Minecraft gameplay. With a focus on PvE, we offer a modern and personlised experience — get it today! In addition to many unique modules and features, Aristois contains a worldwide in-game chat. Plan your next adventure and coordinate with players on other servers, right from the chat. The Aristois UI is designed with customisation in mind, so it can look exactly how you want it. We've also created two additional UIs to enhance speed and smoothness of enabling mods.",
        cover: "https://aristois.net/logo.webp",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://lootdest.org/s?1384c193'",
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
        description: "Based Minecraft utility mod.",
        cover: "https://meteorclient.com/icon.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/06/Meteor-Client-Mod-Screenshots-10.jpg"],
        downloadLink: "https://lootdest.org/s?6912fd22",
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
        tags: ["Hypixel", "Blatant", "Ghost", "Injectable", "Forge"],
        description: "Elevate your gaming experience effortlessly with Breeze Client. Our state-of-the-art cheats and stunning visuals are designed to make winning a breeze, empowering you to dominate the game like never before.",
        cover: "https://breeze.rip/assets/logos/logo.png",
        screenshots: ["https://breeze.rip/assets/photos/ui.png", "https://www.9minecraft.net/wp-content/uploads/2024/06/Breeze-Client-Mod-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2024/06/Breeze-Client-Mod-Screenshots-6.jpg"],
        downloadLink: "https://breeze.rip",
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
        tags: ["Bedrock", "Injectable", "Hive"],
        description: "key features: online integration (social menu): friend people, send dms, and share configs directly in dms; config manager: utilize local and cloud configs, allowing you to upload and share your best configs for any server; bypasses and visuals: experience better and more stable bypasses, insane visuals, and more crazy modules; compatibility: minecraft version: 1.21.21; platforms: windows 10/11; payment options (usd); $2.30: 1 week; $5.30: 1 month; $14.30: 3 months; $50.30: lifetime",
        cover: "https://media.discordapp.net/attachments/1223650631060033649/1274749678327566386/png.png?ex=66c362a7&is=66c21127&hm=fe0de67b678d837b1b22ea3dc4b0f9c62e35c7b7082c89ea6400a4f9bb823bb7&=&format=webp&quality=lossless&width=676&height=676",
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
        description: "25$ discount when you buy trough 'ihasedich'",
        cover: "https://i.pinimg.com/736x/28/bc/1d/28bc1d0c2420d7cea6238b1200b3b35f.jpg",
        screenshots: [],
        downloadLink: "ihasedich",
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
        tags: [],
        description: "OP Client",
        cover: 'https://wurst.wiki/_media/logo/wurst_centered_256.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?357de362',
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        tags: ['CS2', 'Free'],
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
        price: 'Free',
        tags: ['CS2', 'Free'],
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?ba5ed5c6',
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
        tags: ['CS2', 'Free'],
        description: "CS2 Cheat",
        cover: 'https://de.exloader.net/resources/favicon.png',
        screenshots: [],
        downloadLink: 'https://lootdest.org/s?9be4491b',
        colors: {
            text: "#ffffff", // Text
            accent: "#00bf2d", // Accent
            header: "#009fbf" // Header
        }
    }
];
// Populate clients and filter options
document.addEventListener("DOMContentLoaded", () => {
    populateClients();
    populateTagFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        if (filteredTag === "all" || client.tags.includes(filteredTag)) {
            const clientDiv = document.createElement('div');
            clientDiv.className = 'client';
            clientDiv.innerHTML = `
                <img src="${client.cover}" alt="${client.name}">
                <h2>${client.name}</h2>
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
        client.tags.forEach(tag => allTags.add(tag));
    });

    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// Function to filter clients based on selected tag
function filterClients() {
    const selectedTag = document.getElementById('tagFilter').value;
    populateClients(selectedTag);
}