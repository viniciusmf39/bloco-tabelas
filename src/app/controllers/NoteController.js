import Note from '../models/Note';

class NoteController {
  async store(req, res) {
    try {
      const createNote = await Note.create(req.body);

      return res.json({ createNote });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async index(req, res) {
    try {
      const notes = await Note.findAll();

      return res.json({ notes });
    } catch (error) {
      const response = {
        message: 'erro ao buscar notas',
        error,
      };
      return res.json(response);
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const note = await Note.findOne({ where: { uid } });

      return res.json({ note });
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updatedNote = await Note.update(req.body, { where: { uid } });

      return res.json({ updatedNote });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deletedNote = await Note.destroy({ where: { uid } });

      return res.json({ deletedNote });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new NoteController();
