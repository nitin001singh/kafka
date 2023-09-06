const {kafka} = require('./client')
async function init(){
    console.log('dsd');
    const admin = kafka.admin();
    console.log('Admin connecting');
    await admin.connect();
    console.log('Admin connected');

    console.log('Creating Topics...rider updated');
    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions: 2
        }]
    })
    console.log('Created Topics...rider updated');

    console.log('Disconnecting Admin');
    await admin.disconnect();
}

init();