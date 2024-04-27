const processorArr = [{name: 'i3-10100', platform: 'lga1200', TDP: 100}, {name: 'i3-10320', platform: 'lga1200', TDP: 100}, 
{name: 'i5-10400', platform: 'lga1200', TDP: 100}, {name: 'i5-10600K', platform: 'lga1200', TDP: 100}, {name: 'i7-10700', platform: 'lga1200', TDP: 100}, 
{name: 'i7-10700K', platform: 'lga1200', TDP: 100}, {name: 'i9-10900', platform: 'lga1200', TDP: 125}, {name: 'i9-10900K', platform: 'lga1200', TDP: 125}, 
{name: 'i3-11100', platform: 'lga1200', TDP: 100}, {name: 'i3-11320', platform: 'lga1200', TDP: 100}, {name: 'i5-11400', platform: 'lga1200', TDP: 100}, 
{name: 'i5-11600K', platform: 'lga1200', TDP: 100}, {name: 'i7-11700', platform: 'lga1200', TDP: 100}, {name: 'i7-11700K', platform: 'lga1200', TDP: 100}, 
{name: 'i9-11900', platform: 'lga1200', TDP: 125}, {name: 'i9-11900K', platform: 'lga1200', TDP: 125}, {name: 'i3-12100', platform: 'lga1700', TDP: 100}, 
{name: 'i3-12320', platform: 'lga1700', TDP: 100}, {name: 'i5-12400', platform: 'lga1700', TDP: 100}, {name: 'i5-12600K', platform: 'lga1700', TDP: 180}, 
{name: 'i7-12700', platform: 'lga1700', TDP: 180}, {name: 'i7-12700K', platform: 'lga1700', TDP: 250}, {name: 'i9-12900', platform: 'lga1700', TDP: 250}, 
{name: 'i9-12900K', platform: 'lga1700', TDP: 250}, {name: 'i3-13100', platform: 'lga1700', TDP: 100}, {name: 'i3-13320', platform: 'lga1700', TDP: 100}, 
{name: 'i5-13400', platform: 'lga1700'}, {name: 'i5-13600K', platform: 'lga1700', TDP: 180}, {name: 'i7-13700', platform: 'lga1700', TDP: 250}, 
{name: 'i7-13700K', platform: 'lga1700', TDP: 250}, {name: 'i9-13900', platform: 'lga1700', TDP: 250}, {name: 'i9-13900K', platform: 'lga1700', TDP: 300}, 
{name: 'i3-14100', platform: 'lga1700', TDP: 100}, {name: 'i3-14320', platform: 'lga1700', TDP: 100}, {name: 'i5-14400', platform: 'lga1700', TDP: 180}, 
{name: 'i5-14600K', platform: 'lga1700', TDP: 250}, {name: 'i7-14700', platform: 'lga1700', TDP: 250}, {name: 'i7-14700K', platform: 'lga1700', TDP: 250}, 
{name: 'i9-14900', platform: 'lga1700', TDP: 250}, {name: 'i9-14900K', platform: 'lga1700', TDP: 300}, {name: 'Ryzen 3 2300X', platform: 'am4', TDP: 100}, 
{name: 'Ryzen 5 2500X', platform: 'am4', TDP: 100}, {name: 'Ryzen 5 2600', platform: 'am4', TDP: 100}, {name: 'Ryzen 5 2600X', platform: 'am4', TDP: 100}, 
{name: 'Ryzen 7 2700', platform: 'am4', TDP: 100}, {name: 'Ryzen 7 2700X', platform: 'am4', TDP: 100}, {name: 'Ryzen 3 3300X', platform: 'am4', TDP: 100}, 
{name: 'Ryzen 5 3500X', platform: 'am4', TDP: 100}, {name: 'Ryzen 5 3600', platform: 'am4', TDP: 100}, {name: 'Ryzen 5 3600X', platform: 'am4', TDP: 100}, 
{name: 'Ryzen 5 3600XT', platform: 'am4', TDP: 100}, {name: 'Ryzen 7 3700X', platform: 'am4', TDP: 100}, {name: 'Ryzen 7 3800X', platform: 'am4', TDP: 105}, 
{name: 'Ryzen 7 3800XT', platform: 'am4', TDP: 105}, {name: 'Ryzen 9 3900', platform: 'am4', TDP: 105}, {name: 'Ryzen 9 3900X', platform: 'am4', TDP: 105}, 
{name: 'Ryzen 9 3900XT', platform: 'am4', TDP: 105}, {name: 'Ryzen 9 3950X', platform: 'am4', TDP: 105}, {name: 'Ryzen 5 5600', platform: 'am4', TDP: 100}, 
{name: 'Ryzen 5 5600X', platform: 'am4', TDP: 100}, {name: 'Ryzen 7 5700X', platform: 'am4', TDP: 100}, {name: 'Ryzen 7 5800X', platform: 'am4', TDP: 105}, 
{name: 'Ryzen 7 5800X3D', platform: 'am4', TDP: 105}, {name: 'Ryzen 9 5900', platform: 'am4', TDP: 105}, {name: 'Ryzen 9 5900X', platform: 'am4', TDP: 105}, 
{name: 'Ryzen 9 5950X', platform: 'am4', TDP: 105}, {name: 'Ryzen 5 7500F', platform: 'am5', TDP: 100}, {name: 'Ryzen 5 7600X', platform: 'am5', TDP: 100}, 
{name: 'Ryzen 7 7700', platform: 'am5', TDP: 105}, {name: 'Ryzen 7 7700X', platform: 'am5', TDP: 105}, {name: 'Ryzen 7 7800X3D', platform: 'am5', TDP: 105}, 
{name: 'Ryzen 9 7900', platform: 'am5', TDP: 105}, {name: 'Ryzen 9 7900X', platform: 'am5', TDP: 170}, {name: 'Ryzen 9 7900X3D', platform: 'am5', TDP: 170}, 
{name: 'Ryzen 9 7950X', platform: 'am5', TDP: 210}, {name: 'Ryzen 9 7950X3D', platform: 'am5', TDP: 210}];

const motherboardArr = [{name: 'ASUS Prime H410M-A', platform: 'lga1200', TDP: 100}, {name: 'MSI H410M PRO', platform: 'lga1200', TDP: 100}, 
{name: 'Gigabyte B460M DS3H', platform: 'lga1200', TDP: 100}, {name: 'ASRock B460 Steel Legend', platform: 'lga1200', TDP: 100}, 
{name: 'ASUS TUF Gaming H470-PRO', platform: 'lga1200', TDP: 100}, {name: 'MSI MAG B460M MORTAR', platform: 'lga1200', TDP: 100}, 
{name: 'MSI MPG Z490 GAMING EDGE WIFI', platform: 'lga1200', TDP: 180},{name: 'ASUS ROG Strix Z490-E Gaming', platform: 'lga1200', TDP: 180},
{name: 'ASRock B560M-ITX/ac', platform: 'lga1700', TDP: 180}, {name: 'ASUS Prime B560M-A', platform: 'lga1700', TDP: 180}, 
{name: 'Gigabyte H570 AORUS PRO AX', platform: 'lga1700', TDP: 100}, {name: 'MSI MAG B560M BAZOOKA', platform: 'lga1700', TDP: 180}, 
{name: 'ASUS ROG Strix Z590-E Gaming WiFi 6E', platform: 'lga1700', TDP: 250}, {name: 'MSI MPG Z590 GAMING EDGE WIFI', platform: 'lga1700', TDP: 250}, 
{name: 'ASUS PRIME H670-PLUS', platform: 'lga1700', TDP: 100}, {name: 'MSI MAG H670 TOMAHAWK WIFI', platform: 'lga1700', TDP: 100}, 
{name: 'Gigabyte B660M DS3H', platform: 'lga1700', TDP: 180}, {name: 'ASRock B660M PRO4', platform: 'lga1700', TDP: 180}, 
{name: 'ASUS ROG Strix Z690-E Gaming WiFi 6E', platform: 'lga1700', TDP: 300}, {name: 'MSI MEG Z690 UNIFY', platform: 'lga1700', TDP: 300}, 
{name: 'MSI B450 TOMAHAWK MAX', platform: 'am4', TDP: 100}, {name: 'ASUS ROG Strix B450-F Gaming', platform: 'am4', TDP: 100}, 
{name: 'Gigabyte B550 AORUS PRO AC', platform: 'am4', TDP: 100}, {name: 'ASRock B550 Steel Legend', platform: 'am4', TDP: 100}, 
{name: 'MSI X470 GAMING PRO CARBON', platform: 'am4', TDP: 180}, 
{name: 'ASUS ROG Strix X570-E Gaming', platform: 'am4', TDP: 180}, {name: 'Gigabyte X570 AORUS PRO WIFI', platform: 'am4', TDP: 180}, 
{name: 'ASRock X670E Taichi Carrara', platform: 'am5', TDP: 250}, {name: 'Asus ROG Crosshair X670E Extreme', platform: 'am5', TDP: 250}, 
{name: 'ASRock B650E Steel Legend', platform: 'am5', TDP: 180}, {name: 'Asus ROG Strix B650E-E Gaming Wifi', platform: 'am5', TDP: 180}, 
{name: 'Gigabyte X670E AORUS Extreme', platform: 'am5', TDP: 250}, {name: 'MSI MEG X670E Ace', platform: 'am5', TDP: 250}, 
{name: 'MSI B650 Carbon WiFi', platform: 'am5', TDP: 180}, {name: 'MSI Pro B650-P WIFI', platform: 'am5', TDP: 180}];

const ramDDR4 = ['Corsair Vengeance LPX 2666', 'Corsair Vengeance LPX 3000', 'Corsair Vengeance LPX 2400', 
'Corsair Dominator Platinum 3200', 'Corsair Dominator Platinum 3600', 'G.SKILL Ripjaws V 2666', 
'G.SKILL Ripjaws V 3000', 'G.SKILL Ripjaws V 2400', 'G.SKILL Trident Z 3200', 'Corsair Trident Z 3600', 
'Kingston HyperX Fury 2133', 'Kingston HyperX Fury 2400', 'Kingston HyperX Fury 2666', 
'Kingston HyperX Fury 3000', 'Kingston HyperX Predator 3200', 'Kingston HyperX Predator 3600'];

const ramDDR5 = ['Corsair Vengeance DDR5 6400', 'Corsair Vengeance DDR5 8400', 'G.SKILL Ripjaws DDR5 5600', 
'G.SKILL Ripjaws DDR5 6000', 'G.SKILL Trident Z DDR5 6000', 'G.SKILL Trident Z DDR5 6400', 
'G.SKILL Trident Z DDR5 6800', 'Kingston Fury Beast DDR5 5600', 'Kingston Fury Beast DDR5 6000', 
'Kingston Fury Beast DDR5 6400', 'Adata XPG DDR5 5600', 'Adata XPG DDR5 6000', 'Adata XPG DDR5 6400', 
'TeamGroup T-Force DDR5 5600', 'TeamGroup T-Force DDR5 6000', 'TeamGroup T-Force DDR5 6400', 
'TeamGroup T-Force DDR5 6800'];

function randomProcessor(cpu) {
    let randomProcessorInArr = Math.floor(Math.random() * cpu.length);
    let actualProcessor = cpu[randomProcessorInArr];
    return actualProcessor
}

function randomMotherboard(platform) {
    const filterByPlatform = motherboardArr.filter((mb) => mb.platform === platform);
    let randomMotherboard = Math.floor(Math.random() * filterByPlatform.length);
    let actualMotherboard = filterByPlatform[randomMotherboard];
    return actualMotherboard
}

function randomRAM(platform) {
    if (platform === 'lga1200' || platform === 'am4'){
        let randomRAMArr = Math.floor(Math.random() * ramDDR4.length);
        let actualRAM = ramDDR4[randomRAMArr];
        return actualRAM
    } else {
        let randomRAMArr = Math.floor(Math.random() * ramDDR5.length);
        let actualRAM = ramDDR5[randomRAMArr];
        return actualRAM
    }
}

let cpuTDP; // To compare afterwords
let mbTDP;

const cpuMbRAM = () => {
    let cpu = randomProcessor(processorArr);
    let mb = randomMotherboard(cpu.platform);
    let ram = randomRAM(cpu.platform);
    cpuTDP = cpu.TDP;
    mbTDP = mb.TDP;
    let makeAQuestion = `What do you think about this setup: ${cpu.name}, ${mb.name}, ${ram}?`;
    let question = document.getElementById('question');
    question.innerHTML = makeAQuestion;
}

cpuMbRAM();
// Function for button YES
const forPossitiveResp = () => {
    let announcement = document.getElementById('announcementpart');
    let givePositiveAnswer = `Yeah, that's good idea, motherboard can maintain ${mbTDP}W while CPU draws ${cpuTDP}W.`
    let giveNegativeAnswer = `It's bad idea. This motherboard can support only ${mbTDP}W and less, while CPU draws ${cpuTDP}W.`
    if (cpuTDP == mbTDP || cpuTDP < mbTDP) {
        announcement.innerHTML = givePositiveAnswer;
    } else {
        announcement.innerHTML = giveNegativeAnswer;
    }
}
// Function for button NO
const forNegativeResp = () => {
    let announcement = document.getElementById('announcementpart');
    let givePositiveAnswer = `You're right, that's bad idea, motherboard withstand ${mbTDP}W while CPU draws ${cpuTDP}W.`
    let giveNegativeAnswer = `Actually, that's good. We have a motherboard with save zone ${mbTDP}W , while CPU draws ${cpuTDP}W.`
    if (cpuTDP > mbTDP) {
        announcement.innerHTML = givePositiveAnswer;
    } else {
        announcement.innerHTML = giveNegativeAnswer;
    }
}

let announcementpart = document.getElementById('announcementpart');
let btn1 = document.getElementById('yesButton');
let btn2 = document.getElementById('noButton');

btn1.addEventListener('click', () => {
    forPossitiveResp();
    if (announcementpart.classList.contains('hidden')) {
        announcementpart.classList.remove('hidden');
        setTimeout(function () {
            announcementpart.classList.remove('visuallyHidden');
        }, 20)
    } else {
        announcementpart.classList.add('visuallyHidden');
        announcementpart.addEventListener('transitionend', 
        function(e) {
            announcementpart.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        })
    };
}, false);

btn2.addEventListener('click', () => {
    forNegativeResp();
    if (announcementpart.classList.contains('hidden')) {
        announcementpart.classList.remove('hidden');
        setTimeout(function () {
            announcementpart.classList.remove('visuallyHidden');
        }, 20)
    } else {
        announcementpart.classList.add('visuallyHidden');
        announcementpart.addEventListener('transitionend', 
        function(e) {
            announcementpart.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        })
    };
}, false);
