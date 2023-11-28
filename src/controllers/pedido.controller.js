import pedido from '../models/pedido.model.js'

export const getPedidos = async (req, res) => {
    try {
        const pedidos = await pedido.find
        res.json(pedidos);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const createPedido = async (req, res) => {
    try {
        const { cliente, responsable, date } = req.body;
        const newpedido = new pedido({
          cliente,
          responsable,
          date,
        });
        await newpedido.save();
        res.json(newpedido);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};


export const getPedido = async (req, res) => {
    try {
        const pedido = await pedido.findById(req.params.id);
        if (!pedido) return res.status(404).json({ message: "pedido not found" });
        return res.json(pedido);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const deletePedido  = async (req, res) => {
    try {
        const deletedPedido = await pedido.findByIdAndDelete(req.params.id);
        if (!deletedPedido)
          return res.status(404).json({ message: "pedido not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const updatePedido = async (req, res) => {
    try {
        const { cliente, responsable, date } = req.body;
        const pedidoUpdated = await pedido.findOneAndUpdate(
          { _id: req.params.id },
          { cliente, responsable, date },
          { new: true }
        );
        return res.json(pedidoUpdated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};
