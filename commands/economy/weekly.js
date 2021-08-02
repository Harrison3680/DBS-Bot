module.exports = ({
	name: "weekly",
	code: `$setVar[cash;$sum[$getVar[cash;$authorID];$random[500;650]];$authorID]
$title[DAILY]
$description[You claimed your daily from ricky and got $$random[500;650]]
$color[RANDOM]
$globalCooldown[7d;You can claim again in {time}]`
})
