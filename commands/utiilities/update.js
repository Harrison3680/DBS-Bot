module.exports = {
  name:"git-pull"
  code:`$djsEval[const exec = require('child_process').exec;
    if (message.member.roles.cache.find(r => r.id === "831412883270926387")) {
        exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    message.channel.send('Bot already up to date. No changes since last pull')
                } else {
                    message.channel.send('Pulled from GitHub. Restarting bot. \n\nLogs: \n```' + response + "```")
                    setTimeout(() => {
                        process.exit();
                    }, 1000)
                }
                ;
            }
        });
    } else {
        message.channel.send('OwO')
    }
}] }
