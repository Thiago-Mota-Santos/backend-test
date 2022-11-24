import { InMemoryAppointmenteRepository } from './../repositories/in-memory/in-memory-appointment';
import { Appointment } from './../entities/appointment';
import { expect, it } from 'vitest'
import { CreateAppointment } from './createAppointment';


it('should be able to create useCase', () =>{

    
    const appointmentRepository = new InMemoryAppointmenteRepository()
    const createAppointment = new CreateAppointment(appointmentRepository)

    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1) // 1 day added to actual date


    expect(createAppointment.execute({
        customer: 'john doe',
        startsAt,
        endsAt
    })).resolves.toBeInstanceOf(Appointment)

})