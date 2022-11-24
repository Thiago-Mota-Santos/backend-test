import { AppointmentRepository } from './../repositories/appointmente-repository';
import { Appointment } from './../entities/appointment';
interface CreateAppointmenteRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmenteResponse = Appointment

export class CreateAppointment {

    constructor(
      private appointmentsRepository: AppointmentRepository
    ){}

    async execute({ customer,startsAt,endsAt }: CreateAppointmenteRequest): Promise<CreateAppointmenteResponse>{
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt,
        })

        await this.appointmentsRepository.create(appointment);
        return appointment;
    }
}