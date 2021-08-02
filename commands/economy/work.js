module.exports = ({
    name:"work",
    code:`$setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[100;500]];$authorID]
$title[Working for DB-Script]
$description[You worked as $randomText[staff.TrialSupport();staff.Support();staff.Mod();staff.Admin();staff.Lead();client.Developer()] and earned $$random[100;500] from speshul]
$color[RANDOM]
$globalCooldown[2h;take a break, You can work again in {time}]`
})
