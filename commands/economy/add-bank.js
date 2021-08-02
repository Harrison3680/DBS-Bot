
 module.exports = ({
    name:"add-bank",
    code:`$title[Cash added to bank]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]'s bank]
    $setUserVar[bank;$sum[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
    })
    
