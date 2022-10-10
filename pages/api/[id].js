import { pets } from "../../data/pets";

export default function handler(req, res) {
  const { id } = req.query;

  const pet = pets.find((pet) => pet.id === parseInt(id));

  res.status(200).json(pet);
}
