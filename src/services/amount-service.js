import { validate } from "../validations/validation.js";
import { createAmountValidation } from "../validations/amount-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/response-error.js";
import { v4 as uuidv4 } from "uuid";

const create = async (user, request) => {
  const amount = validate(createAmountValidation, request);
  const existingRecord = await prismaClient.amount.findFirst({
    where: {
      userId: user.id,
    },
  });

  let exceedsLimit = false; // Inisialisasi nilai exceedsLimit

  if (existingRecord) {
    const totalAmount = existingRecord.amount + amount.amount;
    const hydrationNeeded = await calculateHydrationNeeded(user.id); // Anda perlu menyesuaikan fungsi ini agar sesuai dengan logika perhitungan Anda

    if (totalAmount > hydrationNeeded) {
      exceedsLimit = true; // Jika jumlah air melebihi kebutuhan air, atur exceedsLimit menjadi true
    }

    await prismaClient.amount.update({
      where: { id: existingRecord.id },
      data: {
        amount: existingRecord.amount + amount.amount,
      },
    });
  } else {
    await prismaClient.amount.create({
      data: {
        ...amount,
        user: { connect: { id: user.id } },
      },
    });
  }

  return { exceedsLimit }; // Mengembalikan nilai exceedsLimit
};


const get = async (user) => {
  const amount = await prismaClient.amount.findMany({
    select: {
      id: true,
      amount: true,
    },
  });

  return amount;
};

export default {
  create,
  get
};