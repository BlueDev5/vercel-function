import { google } from "googleapis";

module.exports = (req, res) => {
  if (req.method === "POST") {
    // Auth
    const auth = google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      keyFile: "../secrets.json",
    });
    const sheetName = "Database";

    const { startIndex, endIndex } = req.body;

    let spreadsheets = google.sheets({ version: "v4" }).spreadsheets;

    const values = spreadsheets.values.get({
      spreadsheetId: "18F3aIpzvS5Xg11HX5bc4qlUajnjZVFcO-vcRd3KF81o",
      auth: auth,
      range: sheetName + "!" + `B${startIndex}` + ":" + `B${endIndex}`,
    });
  } else {
    res.send({ status: "The method must be POST" });
  }
};
