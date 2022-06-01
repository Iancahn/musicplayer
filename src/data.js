import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Kokon",
            artist: "Plusma, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ["#A3835C", "#7BBAB7"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28895"
        },
        {
            name: "Montauk Paddling",
            artist: "auv",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/50d1e8b673f1afde1fefeb1c8cc895139def15c5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#222F53", "#C43151"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34372"
        },
        {
            name: "Indian Summer Rally",
            artist: "oddfish, cocabona",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#C88B70", "#C1B697"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32863"
        },
        {
            name: "Caramel",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/d47e340cee0956dd4457620a97e4a9df7f849ddb-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#CF2B4C", "#2D3666"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34162"
        },
        {
            name: "Lose Her Way",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#2D9933", "#3D3D2E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31589"
        },
        {
            name: "Eclaircie",
            artist: "Plusma, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#A3835C", "#7BBAB7"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28905"
        }
    ];
}

export default chillHop;