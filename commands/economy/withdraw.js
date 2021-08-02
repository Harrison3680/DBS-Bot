module.exports = ({
            name:"withdraw",
            code:`$description[you have deposited $$message[1] into your bank]
            $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$message[1]];$authorID]
            $setUserVar[bank;$sub[$getUserVar[bank;$authorID];$message[1]];$authorID]
            $onlyIf[$message[1]<1;You cannot withdraw or deposit less than 1.]
            $onlyIf[$message[1]>$getUserVar[bank;$authorID];You cannot withdraw more than you have]
            $onlyForUsers`
        })
