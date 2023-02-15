const readItems = require("../dynamodb/getWatches");

module.exports = async () => {
  let params = {
    ExpressionAttributeValues: {
      ":draft": {
        BOOL: "true",
      },
    },
    FilterExpression: "draft <> :draft",
  };
  const result = await readItems(params, "watchInventory");
  return result;
};
