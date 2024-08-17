// Client data
const clients = [
    {
        id: 1,
        name: "Raven XD",
        price: "Free",
        tags: ["Free", "Ghost", "Blatant", "Hypixel"],
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
        description: " 1.21 minecraft client for Crystal / Sword hvh ",
        cover: "https://tiermaker.com/images/media/template_images/2024/17223351/minecraft-java-clients-17223351/thunderhack-recode-logo.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-1.jpg", "https://www.9minecraft.net/wp-content/uploads/2023/10/ThunderHack-Recode-Client-Mod-Screenshots-7.jpg"],
        downloadLink: "https://lootdest.org/s?37eb7f96",
        colors: {
            text: "#000000", // Text
            accent: "#fc03cf", // Accent
            header: "#0040ff" // Header
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