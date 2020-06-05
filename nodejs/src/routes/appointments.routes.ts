import { Router } from "express";
import { startOfHour, parseISO, isEqual } from "date-fns";

import CreateAppointmentService from "../services/CreateAppointmentService";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import Appointment from "../models/Appointment";
import { getCustomRepository } from "typeorm";

const appointmentsRouter = Router();

appointmentsRouter.get("/", async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  return response.json(await appointmentsRepository.find());
});

appointmentsRouter.post("/", async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService();

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default appointmentsRouter;
