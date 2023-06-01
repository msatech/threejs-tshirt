import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#3c4852',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
    presetColors:["#3c4852", "#ffffff", "#80c670"]
})

export default state