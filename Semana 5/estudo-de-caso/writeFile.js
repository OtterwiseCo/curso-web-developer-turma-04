import fs from "fs";

export const saveToJSON = (data, fileName) => {
  const parsedJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, parsedJSON);
};
