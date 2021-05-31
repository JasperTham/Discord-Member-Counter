module.exports = async (client) => {
    const guild = client.guilds.cache.get('755378684915089418');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("848887105493008414");
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');

    }, 5000);
}
//toLocalString sets commas on numbers
