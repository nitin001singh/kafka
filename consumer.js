const {kafka} = require('./client')
const group = process.argv[2]

async function init(){
    const consumer = kafka.consumer({
        groupId: group
    });
    console.log('Consumer connecting');
    await consumer.connect();
    await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: true })
    console.log('Consumer connected');

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`${group}: ${topic}: PART: ${partition}:`, message.value.toString())
        }
    })

    // console.log('Disconnecting Consumer');
    // await consumer.disconnect();
}

init();