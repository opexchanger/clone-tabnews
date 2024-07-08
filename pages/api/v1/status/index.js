import database from "../../../../infra/database";

export default async function status(request, response) {
  const result = await database.query("SELECT 1+1;");
  console.log("result :>> ", result);
  response.status(200).json({ status: "OK" });
}
