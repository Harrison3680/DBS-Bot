 module.exports = ({
        name:"remove-bank",
        code:`$title[Cash removed from bank]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]'s bank']
        $setUserVar[bank;$sub[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
        $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
        })
        
