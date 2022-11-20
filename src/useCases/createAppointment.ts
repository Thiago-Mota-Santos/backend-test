import { Appointment } from './../entities/appointment';
interface CreateAppointmenteRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmenteResponse = Appointment

export class CreateAppointment {
    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmenteRequest): Promise<CreateAppointmenteResponse>{
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        });

        return appointment;
    }
}