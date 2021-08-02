       module.exports = ({
        name:"remove-cash",
        code:`$title[Cash removed]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]]
        $setUserVar[cash;$sub[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
        $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
        })

