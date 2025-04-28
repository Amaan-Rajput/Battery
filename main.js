intiBattery();
function intiBattery() {
    const batteryPercentage = document.querySelector(".batteryPercentage"),
        batteryAnimation = document.querySelector(".batteryAnimation"),
        liquid = document.querySelector(".liquid");

    navigator.getBattery().then((batt) => {
        updatebattery = () => {
            let level = Math.floor(batt.level * 100);
            batteryPercentage.innerHTML = level + '%';

            liquid.style.height = `${parseInt(batt.level * 100)}%`;

            if (level == 100) {
                liquid.style.height = '103%';
                batteryAnimation.innerHTML = `Full battery <i class="fa-solid fa-battery-full green"></i>`
            }
            else if (level <= 20 &! batt.charging) {
                batteryAnimation.innerHTML = `Low Battery <i class="fa-solid fa-plug-circle-xmark Animation-red"></i>`
            }
            else if (batt.charging) {
                batteryAnimation.innerHTML = `charging... <i class="fa-solid fa-bolt Animation-green"></i>`
            }
            else{
                batteryAnimation.innerHTML = '';
            }

            if (level <= 20) {
                liquid.classList.add('gradient-red'),
                liquid.classList.remove('gradient-orange','gradient-yellow','gradient-green')
            }else if(level <= 40){
                liquid.classList.add('gradient-orange'),
                liquid.classList.remove('gradient-red','gradient-yellow','gradient-green')
            }else if(level <= 80){
                liquid.classList.add('gradient-yellow'),
                liquid.classList.remove('gradient-orange','gradient-red','gradient-green')
            }else (
                liquid.classList.add('gradient-green'),
                liquid.classList.remove('gradient-orange','gradient-red','gradient-red')
            )
        }
        updatebattery()

        batt.addEventListener('chargingchange', () => { updatebattery() });
        batt.addEventListener('levelchange', () => { updatebattery() });
    })

}
