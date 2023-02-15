const getItems = require("../dynamodb/getItems");

module.exports = async () => {
  let params = {
    ExpressionAttributeValues: {
      ":draft": {
        BOOL: true,
      },
    },
    FilterExpression: "draft <> :draft",
  };
  const result = await getItems(params, "watchInventory");
  return result;
};
