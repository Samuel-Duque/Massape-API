import connection from "../config.js";

export const addMarkers = (req, res) => {
  const q =
    "INSERT INTO markers(`marknivel`, `markcoord`, `markbairro`) VALUES(?)";

  const values = [req.body.marknivel, req.body.markcoord, req.body.markbairro];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Marcador adicionado com sucesso.");
  });
};

export const getMarkers = (_, res) => {
  const q = "SELECT * FROM markers";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateMarkers = (req, res) => {
  const q =
    "UPDATE markers SET `marknivel` = ?, `markcoord` = ?, `markbairro` = ? WHERE `markid` = ?";

  const values = [
    req.body.marknivel,
    req.body.markcoord,
    req.body.markbairro,
    req.params.markid,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Marcador alterado com sucesso.");
  });
};

export const deleteMarkers = (req, res) => {
  const q = "DELETE FROM markers WHERE `markid` = ?";

  connection.query(q, [req.params.markid], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Marcador deletado com sucesso.");
  });
};
