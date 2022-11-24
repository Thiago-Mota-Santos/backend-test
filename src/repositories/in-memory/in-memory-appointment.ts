import { Appointment } from "../../entities/appointment";
import { AppointmentRepository } from "../appointmente-repository";

export class InMemoryAppointmenteRepository implements AppointmentRepository {
    public appointments: Appointment [] = [];

    async create(appointment: Appointment): Promise<void> {
        this.appointments.push(appointment);
    }

}