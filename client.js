const {Kafka} = require('kafkajs')
exports.kafka = new Kafka({
    brokers:["192.168.0.5:9092"],
    clientId:'my-app',
})