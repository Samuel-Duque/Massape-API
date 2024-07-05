import connection from "../config.js";

export const addAlerts = (req, res) => {
  const q = "INSERT INTO alerts(`alertlevel`, `alertmsg`) VALUES(?)";

  const values = [req.body.alertlevel, req.body.alertmsg];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Alerta adicionado com sucesso.");
  });
};

export const getAlerts = (_, res) => {
  const q = "SELECT * FROM alerts";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateAlerts = (req, res) => {
  const q =
    "UPDATE alerts SET `alertlevel` = ?, `alertmsg` = ? WHERE `alertid` = ?";

  const values = [req.body.alertlevel, req.body.alertmsg, req.params.alertid];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Alerta alterado com sucesso.");
  });
};

export const deleteAlerts = (req, res) => {
  const q = "DELETE FROM alerts WHERE `alertid` = ?";

  connection.query(q, [req.params.alertid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Alerta deletado com sucesso.");
  });
};
