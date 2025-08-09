import axios from 'axios';
const API_URL = 'http://localhost:8000';

export const AppointmentBook = async (data) => {
    try{
        return await axios.post(`${API_URL}/bookappointment`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(error) {
        console.log("Error booking appointment:", error);
    }
}