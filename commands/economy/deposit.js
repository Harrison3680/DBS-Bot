module.exports = ({
            name:"deposit",
            code:`$description[you have deposited $$message[1] into your bank]
            $setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message[1]];$authorID]
            $setUserVar[cash;$sub[$getUserVar[cash;$authorID];$message[1]];$authorID]
            $onlyIf[$message[1]<1;You cannot withdraw or deposit less than 1.]
            $onlyIf[$message[1]>$getUserVar[cash;$authorID];You cannot deposit more than you have]`
        })
