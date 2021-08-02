module.exports = ({
    name:"hack",
    code:`$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$random[500;1000]];$authorID]
$title[hacking for DB-Script]
$description[You hacked $randomText[Amazon;Google;NPM;Github;Ebay;Freenom;Gitbook;Ricky's Bank Acc] and earned $$random[500;1000] from speshul]
$color[RANDOM]
$globalCooldown[2h;you may be caught by the FBI if you hack in a short amount of time. Come back in {time} for another hacking job.]`
})
