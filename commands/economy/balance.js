module.exports = ({
    name:"balance",    
    code: `
    $author[$username[$mentioned[1;yes]]'s Balance]
    $color[RANDOM]
    $addField[🏦Bank Acc :;$$getUserVar[bank;$mentioned[1;yes]]]
    $addField[💰Wallet :;$$getUserVar[cash;$mentioned[1;yes]]]
    $addField[Networth:;$$abbreviate[$sum[$getUserVar[bank;$mentioned[1;yes]];$getUserVar[cash;$mentioned[1;yes]]]]]
    $onlyIf[$isBot[$mentioned[1]]!=true;Bots don't have money!]`
    })
    
