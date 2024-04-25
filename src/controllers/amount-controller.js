import amountService from "../services/amount-service.js";

const createAm = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await amountService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};


const getAm = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await amountService.get(user);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
    createAm,
    getAm
};