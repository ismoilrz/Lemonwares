const btns = document.querySelectorAll('.viewBtn')
const contents = document.querySelectorAll('.contentView')

const hostingLogos = document.getElementById('hostingLogos')
const hostingBuild = document.getElementById('hostingBuild')

const chack = document.getElementById('chackbox')
const startedBtn = document.querySelectorAll('.startedBtn')
const startedCon = document.querySelectorAll('.startedCon')
const basicCon = document.getElementById('basicCon')
const premiumCon = document.getElementById('premiumCon')

const tabletMenuBtn = document.getElementById('tabletMenuesBtn')
const tabletMenues = document.getElementById('tabletMenues')


// Drawer Menues ///////////////////////////////////

function initDrawer() {
    const menuDrawerBtn = document.getElementById('menuDrawerBtn')
    const drawer = document.getElementById('drawer')
    const overlay = document.getElementById('overlay')
    const cancelDrawer = document.getElementById('cancelDrawer')
    const body = document.querySelector('body')
   

    function open() {
        overlay.classList.add('active')
        drawer.classList.add('active')
        body.classList.add('sc')
    }

    function close() {
        overlay.classList.remove('active')
        drawer.classList.remove('active')
        body.classList.remove('sc')
    } 

    drawer.addEventListener('click', (e) => e.stopPropagation())

    menuDrawerBtn.addEventListener('click', open)
    overlay.addEventListener('click', close)
    cancelDrawer.addEventListener('click', close)
}

initDrawer();

// Tablet Menues ////////////////////////////////////////

tabletMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    tabletMenues.classList.toggle('active')
})

window.addEventListener('click', () => {
    tabletMenues.classList.remove('active')
})


// Top Navigation Btns our Contents logic ///////////////////////////////////

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'))
        contents.forEach(cnt => cnt.classList.remove('active'))
        
        btn.classList.add('active')

        const btnTar = btn.getAttribute('data-view')
        document.getElementById(btnTar).classList.add('active')
    })
})

// Hosting Logos Data /////////////////////////////////////////////////////

const HostingLogos = [
    { id: 1, url: './assets/webHostingLogo1.svg', name: 'cPanel' },
    { id: 2, url: './assets/webHostingLogo2.svg', name: 'immunify 360' },
    { id: 3, url: './assets/webHostingLogo3.svg', name: 'LITESPEED' },
    { id: 4, url: './assets/webHostingLogo4.svg', name: 'Softaculous' },
    { id: 5, url: './assets/webHostingLogo5.svg', name: 'WordPress' },
    { id: 6, url: './assets/webHostingLogo6.svg', name: 'CLOUDFLARE' }
]

// Hosting build data ///////////////////////////////////////////////////////

const HostingBuild = [
    {
        id: 1,
        url: './assets/hostingBuild1.png',
        title: '99.9% Uptime',
        description: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        id: 2,
        url: './assets/hostingBuild2.png',
        title: 'Blazing Fast Web Hosting',
        description: 'Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        id: 3,
        url: './assets/hostingBuild3.png',
        title: 'Free SSL Certificates',
        description: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        id: 4,
        url: './assets/hostingBuild4.png',
        title: '24x7 Friendly Support',
        description: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    }
]

hostingLogos.innerHTML = HostingLogos.map(logos => 
    `<a href="#" class="w-[22%]" key="${logos.id}">
        <img class="w-full h-full object-contain" src="${logos.url}" alt="${logos.name}" />
    </a>`
).join('')

hostingBuild.innerHTML = HostingBuild.map(build => 
    `<div class="w-1/5 flex flex-col items-center gap-3 max-md:w-[40%] max-md:mt-10 max-sm:w-[80%] max-sm:gap-5"
        key="${build.id}">
        <img class="w-25 h-25 max-sm:w-30 max-sm:h-30" src="${build.url}" />
        <h5 class="text-[20px] font-bold text-black max-sm:text-[24px] max-sm:max-w-full">${build.title}</h5>
        <p class="text-center text-[12px] max-sm:text-[16px] text-black max-md:max-w-[80%]">${build.description}</p>
    </div>`
).join('')

const StartedBasic = [
    {
        id: 1,
        title: 'Starter',
        description: 'with all your customers via all conversation channels in one central dashboard.',
        price: 2.80,
        advance: {
            ssd: '2GB SSD',
            bandwidth: '10GB Bandwidth',
            accounts: '15 Email Accounts',
            database: 'Unlimited Database',
            subdomains: '4 Subdomains',
            parked: '1 Parked Domain',
            website: '2 Websites',
            ssl: 'Free SSL',
            softaculous: 'Softaculous'
        }
    },
    {
        id: 2,
        title: 'Standart',
        description: 'with all your customers via all conversation channels in one central dashboard.',
        price: 4.20,
        advance: {
            ssd: '5GB SSD',
            bandwidth: '25GB Bandwidth',
            accounts: '30 Email Accounts',
            database: 'Unlimited Database',
            subdomains: '10 Subdomains',
            parked: '3 Parked Domain',
            website: '5 Websites',
            ssl: 'Free SSL',
            softaculous: 'Softaculous'
        }
    },
    {
        id: 3,
        title: 'Suprem',
        description: 'with all your customers via all conversation channels in one central dashboard.',
        price: 7.00,
        advance: {
            ssd: '15GB SSD',
            bandwidth: '60GB Bandwidth',
            accounts: '60 Email Accounts',
            database: 'Unlimited Database',
            subdomains: '20 Subdomains',
            parked: '8 Parked Domain',
            website: '10 Websites',
            ssl: 'Free SSL',
            softaculous: 'Softaculous'
        }
    }
]

const StartedPremium = [
    {
        id: 1,
        title: 'Pro',
        description: 'with all your customers via all conversation channels in one central dashboard.',
        price: 20.00,
        advance: {
            ssd: '50GB SSD',
            bandwidth: '200GB Bandwidth',
            accounts: '200 Email Accounts',
            database: 'Unlimited database',
            subdomains: '60 Subdomains',
            parked: '25 Parked Domain',
            website: '30 Websites',
            ssl: 'Free SSL',
            softaculous: 'Softaculous'
        }
    },
    {
        id: 2,
        title: 'Plus',
        description: 'with all your customers via all conversation channels in one central dashboard.',
        price: 50.00,
        advance: {
            ssd: '130GB SSD',
            bandwidth: '500GB Bandwidth',
            accounts: '500 Email Accounts',
            database: 'Unlimited database',
            subdomains: '150 Subdomains',
            parked: '65 Parked Domain',
            website: '80 Websites',
            ssl: 'Free SSL',
            softaculous: 'Softaculous'
        }
    }
]

let isYearly = false

function RenderPlans() {
    const calculatePrice = (monthlyPrice) => {
        if (isYearly) {
            const fullYearPrice = monthlyPrice * 12
            const discountedYearlyPrice = fullYearPrice * 0.8
            return discountedYearlyPrice.toFixed(2)
        }
        return monthlyPrice.toFixed(2)
    }

    basicCon.innerHTML = StartedBasic.map(strt => 
        `<div key="${strt.id}" class="w-[300px] px-[30px] max-sm:px-[26px] max-sm:py-[16px] max-sm:w-[94%] py-[20px] border-2 border-solid border-[#C4C4C4] rounded-[15px] max-sm:rounded-[20px] max-md:shrink-0">
            <h5 class="text-[28px] max-sm:text-[25px] font-[600]">${strt.title}</h5>
            <p class="max-w-[85%] max-sm:max-w-full mt-1 mb-3 text-[12px]">${strt.description}</p>
            <strong class="text-[42px] max-sm:text-[36px] font-bold">$${calculatePrice(strt.price)}</strong>
            <p class="text-[12px]">${isYearly ? 'Per year (20% discount)' : 'Per month'}</p>
            <button class="w-full h-[50px] border-2 border-solid border-black mx-auto rounded-[12px] text-[14px] font-medium my-[35px] max-sm:my-[20px] hover:bg-black hover:text-white duration-300">
                Choose this plan
            </button>
            <div class="flex flex-col gap-[15px] max-sm:gap-[10px]">
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.ssd}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.bandwidth}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.accounts}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.database}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.subdomains}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.parked}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.website}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.ssl}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${strt.advance.softaculous}</span></div>
            </div>
        </div>`
    ).join('')

    premiumCon.innerHTML = StartedPremium.map(pr => 
        `<div key="${pr.id}" class="w-[300px] max-sm:w-[94%] max-sm:px-[26px] max-sm:py-[16px] px-[30px] py-[20px] border-2 border-solid border-[#C4C4C4] rounded-[15px] max-sm:rounded-[20px] shrink-0">
            <h5 class="text-[28px] max-sm:text-[25px] font-[600]">${pr.title}</h5>
            <p class="max-w-[85%] max-sm:max-w-full mt-1 mb-3 text-[12px]">${pr.description}</p>
            <strong class="text-[42px] max-sm:text-[36px] font-bold">$${calculatePrice(pr.price)}</strong>
            <p class="text-[12px]">${isYearly ? 'Per year(20% discount)' : 'Per month'}</p>
            <button class="w-full h-[50px] border-2 border-solid border-black mx-auto rounded-[12px] text-[14px] font-medium my-[35px] max-sm:my-[20px] hover:bg-black hover:text-white duration-300">
                Choose this plan
            </button>
            <div class="flex flex-col gap-[15px] max-sm:gap-[10px]">
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.ssd}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.bandwidth}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.accounts}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.database}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.subdomains}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.parked}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.website}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.ssl}</span></div>
                <div class="flex gap-6 w-full"><img src="./assets/Checkmark.svg" /> <span class="text-[16px] font-bold text-[#808080]">${pr.advance.softaculous}</span></div>
            </div>
        </div>`
    ).join('')
}

chack.addEventListener('click', () => {
    isYearly = chack.classList.toggle('active')
    const circle = chack.querySelector('.chackCircle')
    if (circle) {
        circle.setAttribute('chackcircle', isYearly)
    }
    RenderPlans()
})

startedBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        startedBtn.forEach(btn => btn.classList.remove('active'))
        startedCon.forEach(cnt => cnt.classList.remove('active'))

        btn.classList.add('active')

        const startedTar = btn.getAttribute('startedTab')
        document.getElementById(startedTar).classList.add('active')
    })
})

RenderPlans()