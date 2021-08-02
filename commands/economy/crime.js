module.exports = ({
    name:"crime",
    code:`$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$random[1500;2000]];$authorID]
$title[Crime]
$description[You commited $randomText[Murder;Bank Robbery;Store Robbery;Credit Card Fraud;Drug Dealing;a Hitman Job;Income Tax Evasion] and earned $$random[500;1000] from ricky]
$color[RANDOM]
$globalCooldown[4h;Wait before you can commit another crime. Come back in {time} for another crime job.]`
})

