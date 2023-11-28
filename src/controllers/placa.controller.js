import Placa from '../models/placa.model.js'

export const getPlacas = async (req, res) => {
    try {
        const placas = await Placa.find
        res.json(placas);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const createPlaca = async (req, res) => {
    try {
        const { color, ancho, largo, alto, densidad, masa, date } = req.body;
        const newPlaca = new Placa({
          color,
          ancho,
          largo,
          alto,
          densidad,
          masa,
          date,
        });
        await newPlaca.save();
        res.json(newPlaca);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};


export const getPlaca = async (req, res) => {
    try {
        const placa = await Placa.findById(req.params.id);
        if (!placa) return res.status(404).json({ message: "Placa not found" });
        return res.json(placa);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const deletePlaca  = async (req, res) => {
    try {
        const deletedPlaca = await Placa.findByIdAndDelete(req.params.id);
        if (!deletedPlaca)
          return res.status(404).json({ message: "Placa not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const updatePlaca = async (req, res) => {
    try {
        const { color, ancho, largo, alto, densidad, masa, date } = req.body;
        const PlacaUpdated = await Placa.findOneAndUpdate(
          { _id: req.params.id },
          { color, ancho, largo, alto, densidad, masa, date },
          { new: true }
        );
        return res.json(PlacaUpdated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};
