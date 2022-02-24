import { Router } from "express";
import rescue from "express-rescue";
import StatusCode from "../enums/StatusCode";
import { create, findAll } from "../services/product";
import validate from './validations/validateProduct';
import { verify } from "../utils/jwt";

const router = Router();

router.post('/',
  validate,
  rescue(async (req, res) => {
    const auth = req.headers.authorization
    verify(auth);
    const newProduct: any = req.body;
    const item = await create(newProduct);
    res.status(StatusCode.CREATED).json({ item: item })
  }));

router.get('/',
  validate[2],
  rescue(async (req, res) => {
    const auth = req.headers.authorization
    verify(auth);
    const allProduct = await findAll();
    res.status(StatusCode.OK).json(allProduct)
  }))

export default router;
