import { pool } from "../db.js";

export const getCards = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM services ORDER BY fecha_creacion ASC"
    );
    res.json(result);
    //console.log(res.json(result));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




