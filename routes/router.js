import express from "express";
const router = express.Router();

router.get("/cars", (req, res) => {
    res.send(cars);
  });
  
router.get("/cars/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
  
    res.json(cars.find((car) => car.id == id));
  });
  
router.post("/cars", (req, res) => {
    const { brand, model, year } = req.body;
    console.log(req.body);
    cars.push({
      id: cars.length + 1,
      brand,
      model,
      year,
    });
  
    res.send(cars);
  });
  
router.put("/cars/:id", (req, res) => {
    const { brand, model, year } = req.body;
    const id = Number(req.params.id);
    const carIndex = cars.findIndex((car) => car.id == id);
  
    cars[carIndex] = { id, brand, model, year };
  
    res.send(cars[carIndex]);
  });
  
router.delete("/cars/:id", (req, res) => {
    const id = req.params.id;
  
    cars = cars.filter((car) => car.id != id);
  
    res.send(cars);
  }); 

export default router;