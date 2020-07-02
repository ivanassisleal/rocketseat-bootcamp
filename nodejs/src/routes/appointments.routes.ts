import { Router } from "express";
import { parseISO } from "date-fns";
import { getCustomRepository } from "typeorm";

import CreateAppointmentService from "../services/CreateAppointmentService";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import ensureAuthenticate from '../middleware/ensureAuthenticate';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticate);

appointmentsRouter.get("/", async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  return response.json(await appointmentsRepository.find());
});

appointmentsRouter.post("/", async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointmentService = new CreateAppointmentService();

  const appointment = await createAppointmentService.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
