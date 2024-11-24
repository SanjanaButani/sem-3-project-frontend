import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import { useEffect, useState } from "react";

const Appointment = () => {

    const [appointment, setAppointment] = useState();
    
    const fetchAppointmentDetails = async () => {
        try {
            const token = sessionStorage.getItem('b-token');
            const config = {
                method: "get",
                url: `${baseUrl}/user/appointment-details`,
                headers: { 
                    "authorization": `Bearer ${token}`,
                },
            };
            const res = await axios.request(config);
            if(res.data.success){
                setAppointment(res.data.appointment[0]);
            }        
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchAppointmentDetails();
    }, []);
    
    return (
        <div className="h-screen w-screen px-28 flex justify-center items-center">
            <div className="w-full px-20 py-20 bg-[#fff] border border-current rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-current text-3xl text-center drop-shadow">Appointment Details</h1>
                <div className="flex justify-between items-center w-full mt-20">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Name: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{appointment && appointment.createdBy.username}</p>
                </div>
                <div className="flex justify-between items-center w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Date: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{appointment && new Date(appointment.date).toDateString()}</p>
                </div>
                <div className="flex justify-between items-center w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Time: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{appointment && new Date(appointment.date).toLocaleTimeString()}</p>
                </div>
                <div className="flex justify-between items-start w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Service: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">
                        {appointment && appointment.services.map(item => item.name + ', ')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Appointment;