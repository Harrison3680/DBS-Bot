require('dotenv').config()
const Dlang = require('discordbot-script')
const { processes } = require('systeminformation')
const bot = new Dlang({
token: process.env.token,
prefix: ["F!"]
})

bot.MessageEvent()

bot.Variables({
  cash:"0",
  bank:"0"

})

bot.Status({
    0: {
        description:"Fable 2 with harrison", 
        type: "PLAYING" 
    }, 
    1: {
        description: "porn", 
        type: "WATCHING" 
    }
}, 12000)
 

bot.Command({
    name:"help",
    code:`Work 
    hack
    crime
    daily
    weekly
    balance
    add-bank
    add-cash
    remove-bank
    remove-cash
    eval`
})



bot.Command({
    name:"work",
    code:`$setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[100;500]];$authorID]
$title[Working for DB-Script]
$description[You worked as $randomText[staff.TrialSupport();staff.Support();staff.Mod();staff.Admin();staff.Lead();client.Developer()] and earned $$random[100;500] from speshul]
$color[RANDOM]
$globalCooldown[2h;take a break, You can work again in {time}]`
})

bot.Command({
    name:"hack",
    code:`$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$random[500;1000]];$authorID]
$title[hacking for DB-Script]
$description[You hacked $randomText[Amazon;Google;NPM;Github;Ebay;Freenom;Gitbook;Ricky's Bank Acc] and earned $$random[500;1000] from speshul]
$color[RANDOM]
$globalCooldown[2h;you may be caught by the FBI if you hack in a short amount of time. Come back in {time} for another hacking job.]`
})

bot.Command({
    name:"crime",
    code:`$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$random[1500;2000]];$authorID]
$title[Crime]
$description[You commited $randomText[Murder;Bank Robbery;Store Robbery;Credit Card Fraud;Drug Dealing;a Hitman Job;Income Tax Evasion] and earned $$random[500;1000] from ricky]
$color[RANDOM]
$globalCooldown[4h;Wait before you can commit another crime. Come back in {time} for another crime job.]`
})


bot.Command({
	name: "daily",
	code: `$setVar[cash;$sum[$getVar[cash;$authorID];$random[500;650]];$authorID]
$title[DAILY]
$description[You claimed your daily from ricky and got $$random[500;650]]
$color[RANDOM]
$globalCooldown[24h;You can claim again in {time}]`
})

bot.Command({
	name: "weekly",
	code: `$setVar[cash;$sum[$getVar[cash;$authorID];$random[700;900]];$authorID]
$title[WEEKLY]
$description[You claimed your weekly from ricky and got $$random[700;900]]
$color[RANDOM]
$globalCooldown[7d;You can claim again in {time}]`
})

bot.Command({
    name:"balance",    
    code: `
    $author[$username[$mentioned[1;yes]]'s Balance]
    $color[RANDOM]
    $addField[🏦Bank Acc :;$$getUserVar[bank;$mentioned[1;yes]]]
    $addField[💰Wallet :;$$getUserVar[cash;$mentioned[1;yes]]]
    $addField[Networth:;$$abbreviate[$sum[$getUserVar[bank;$mentioned[1;yes]];$getUserVar[cash;$mentioned[1;yes]]]]]
    $onlyIf[$isBot[$mentioned[1]]!=true;Bots don't have money!]`
    })
    
    bot.Command({
    name:"add-bank",
    code:`$title[Cash added to bank]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]'s bank]
    $setUserVar[bank;$sum[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
    })
    
    bot.Command({
    name:"add-cash",
    code:`$title[Cash added]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]]
    $setUserVar[cash;$sum[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
    })

    bot.Command({
        name:"remove-bank",
        code:`$title[Cash removed from bank]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]'s bank']
        $setUserVar[bank;$sub[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
        $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
        })
        
        bot.Command({
        name:"remove-cash",
        code:`$title[Cash removed]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]]
        $setUserVar[cash;$sub[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
        $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
        })

        bot.Command({
            name:"deposit",
            code:`$description[you have deposited $$message[1] into your bank]
            $setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message[1]];$authorID]
            $setUserVar[cash;$sub[$getUserVar[cash;$authorID];$message[1]];$authorID]
            $onlyIf[$message[1]<1;You cannot withdraw or deposit less than 1.]
            $onlyIf[$message[1]>$getUserVar[cash;$authorID];You cannot deposit more than you have]`
        })
        
        bot.Command({
            name:"withdraw",
            code:`$description[you have deposited $$message[1] into your bank]
            $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$message[1]];$authorID]
            $setUserVar[bank;$sub[$getUserVar[bank;$authorID];$message[1]];$authorID]
            $onlyIf[$message[1]<1;You cannot withdraw or deposit less than 1.]
            $onlyIf[$message[1]>$getUserVar[bank;$authorID];You cannot withdraw more than you have]
            $onlyForUsers`
        })


         

      bot.Command({
          name:"eval",
          code:`$eval[$message[]]
          $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;634860829132455937;NO]
          `
      })
