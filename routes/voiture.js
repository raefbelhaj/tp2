const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

const voitures = [
    { id: 1, name: 'golf' },
    { id: 2, name: 'polo' },
    { id: 3, name: 'porche' }
];

router.post('/add', (req, res) => {
    const nouvelleVoiture = req.body;
    voitures.push(nouvelleVoiture);
    res.status(201).json({ message: 'Voiture ajoutée', voiture: nouvelleVoiture });
});

router.get('/voitures', (req, res) => {
    res.json(voitures);
});

router.get('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});


router.put('/voitures/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = voitures.findIndex(v => v.id === id);
  if (index !== -1) {
      const updatedVoiture = req.body;
      voitures[index] = { ...voitures[index], ...updatedVoiture };
      res.json({ message: 'Voiture mise à jour', voiture: voitures[index] });
  } 
});

router.delete('/voitures/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = voitures.findIndex(v => v.id === id);
  if (index !== -1) {
      voitures.splice(index, 1);
      res.json({ message: 'Voiture supprimée' });
  }
});
















module.exports = router;
