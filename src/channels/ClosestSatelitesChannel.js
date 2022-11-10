import consumer from "services/createConsumer";

const ClosestSatelitesChannel = consumer.subscriptions.create(
  "ClosestSatelitesChannel"
);

export default ClosestSatelitesChannel;
