
const Appointment = () => {
    return (
        <div className="h-screen w-screen px-28 flex justify-center items-center">
            <div className="w-full px-20 py-20 bg-[#fff] border border-current rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-current text-3xl text-center drop-shadow">Appointment Details</h1>
                <div className="flex justify-between items-center w-full mt-20">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Name: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">Sanjana Butani</p>
                </div>
                <div className="flex justify-between items-center w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Mobile: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">8573451901</p>
                </div>
                <div className="flex justify-between items-center w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Date: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">2 Dec 2024, 3:00 PM</p>
                </div>
                <div className="flex justify-between items-start w-full mt-10">
                    <p className="basis-1/2 text-current text-lg drop-shadow">Service: </p>
                    <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">Hair Cut, Hair Wash, Hair Color</p>
                </div>
            </div>
        </div>
    )
}

export default Appointment;