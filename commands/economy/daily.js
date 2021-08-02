module.exports = ({
	name: "daily",
	code: `$setVar[cash;$sum[$getVar[cash;$authorID];$random[500;650]];$authorID]
$title[DAILY]
$description[You claimed your daily from ricky and got $$random[500;650]]
$color[RANDOM]
$globalCooldown[24h;You can claim again in {time}]`
})
