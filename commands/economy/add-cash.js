module.exports = ({
    name:"add-cash",
    code:`$title[Cash added]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]]
    $setUserVar[cash;$sum[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyForUsers[600824086943367168;376120479498633238;672215920558604332;You need to be Speshul, Chris, or Ricky to use this command]`
    })
