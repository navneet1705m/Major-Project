import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const IndianCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const checkIfWeekend = () => {
      const dayOfWeek = selectedDate.getDay();
      setIsWeekend(dayOfWeek === 0 || dayOfWeek === 6);
    };

    const fetchHolidays = async () => {
      try {
        // Replace this with your actual JSON data
        const jsonHolidays = {
          "holidays": [
            {"date": "2024-01-01", "name": "New Year's Day"},
      {"date": "2024-01-13", "name": "Lohri"},
      {"date": "2024-01-14", "name": "Makar Sankranti"},
      {"date": "2024-01-15", "name": "Pongal"},
      {"date": "2024-01-17", "name": "Guru Govind Singh Jayanti"},
      {"date": "2024-01-25", "name": "Hazarat Ali's Birthday"},
      {"date": "2024-01-26", "name": "Republic Day"},
      {"date": "2024-02-10", "name": "Lunar New Year"},
      {"date": "2024-02-14", "name": "Vasant Panchami"},
      {"date": "2024-02-14", "name": "Valentine's Day"},
      {"date": "2024-02-19", "name": "Shivaji Jayanti"},
      {"date": "2024-02-24", "name": "Guru Ravidas Jayanti"},
      {"date": "2024-03-06", "name": "Maharishi Dayanand Saraswati Jayanti"},
      {"date": "2024-03-08", "name": "Maha Shivaratri/Shivaratri"},
      {"date": "2024-03-12", "name": "Ramadan Start (Tentative Date)"},
      {"date": "2024-03-20", "name": "March Equinox"},
      {"date": "2024-03-24", "name": "Holika Dahana"},
      {"date": "2024-03-25", "name": "Holi"},
      {"date": "2024-03-25", "name": "Dolyatra"},
      {"date": "2024-03-28", "name": "Maundy Thursday"},
      {"date": "2024-03-29", "name": "Good Friday"},
      {"date": "2024-03-31", "name": "Easter Day"},
      {"date": "2024-04-05", "name": "Jamat Ul-Vida (Tentative Date)"},
      {"date": "2024-04-09", "name": "Chaitra Sukhladi"},
      {"date": "2024-04-09", "name": "Ugadi"},
      {"date": "2024-04-09", "name": "Gudi Padwa"},
      {"date": "2024-04-11", "name": "Ramzan Id/Eid-ul-Fitar (Tentative Date)"},
      {"date": "2024-04-13", "name": "Vaisakhi"},
      {"date": "2024-04-14", "name": "Mesadi / Vaisakhadi"},
      {"date": "2024-04-14", "name": "Ambedkar Jayanti"},
      {"date": "2024-04-17", "name": "Rama Navami"},
      {"date": "2024-04-21", "name": "Mahavir Jayanti"},
      {"date": "2024-04-23", "name": "First day of Passover"},
      {"date": "2024-05-01", "name": "International Worker's Day"},
      {"date": "2024-05-08", "name": "Birthday of Rabindranath"},
      {"date": "2024-05-12", "name": "Mothers' Day"},
      {"date": "2024-05-23", "name": "Buddha Purnima/Vesak"},
      {"date": "2024-06-16", "name": "Fathers' Day"},
      {"date": "2024-06-17", "name": "Bakrid/Eid ul-Adha (Tentative Date)"},
      {"date": "2024-06-21", "name": "June Solstice"},
      {"date": "2024-07-07", "name": "Rath Yatra"},
      {"date": "2024-07-17", "name": "Muharram/Ashura (Tentative Date)"},
      {"date": "2024-07-21", "name": "Guru Purnima"},
      {"date": "2024-08-04", "name": "Friendship Day"},
      {"date": "2024-08-15", "name": "Independence Day"},
      {"date": "2024-08-15", "name": "Parsi New Year"},
      {"date": "2024-08-19", "name": "Raksha Bandhan (Rakhi)"},
      {"date": "2024-08-26", "name": "Janmashtami"},
      {"date": "2024-08-26", "name": "Janmashtami (Smarta)"},
      {"date": "2024-09-07", "name": "Ganesh Chaturthi/Vinayaka Chaturthi"},
      {"date": "2024-09-15", "name": "Onam"},
      {"date": "2024-09-16", "name": "Milad un-Nabi/Id-e-Milad (Tentative Date)"},
      {"date": "2024-09-22", "name": "September Equinox"},
      {"date": "2024-10-02", "name": "Mahatma Gandhi Jayanti"},
      {"date": "2024-10-03", "name": "First Day of Sharad Navratri"},
      {"date": "2024-10-09", "name": "First Day of Durga Puja Festivities"},
      {"date": "2024-10-10", "name": "Maha Saptami"},
      {"date": "2024-10-11", "name": "Maha Navami"},
      {"date": "2024-10-11", "name": "Maha Ashtami"},
      {"date": "2024-10-12", "name": "Dussehra"},
      {"date": "2024-10-17", "name": "Maharishi Valmiki Jayanti"},
      {"date": "2024-10-20", "name": "Karaka Chaturthi (Karva Chauth)"},
      {"date": "2024-10-31", "name": "Halloween"},
      {"date": "2024-10-31", "name": "Naraka Chaturdasi"},
      {"date": "2024-10-31", "name": "Diwali/Deepavali"},
      {"date": "2024-11-02", "name": "Govardhan Puja"}
          ]
        };
        
        setHolidays(jsonHolidays.holidays);
      } catch (error) {
        console.error('Error fetching holidays', error);
      }
    };

    fetchHolidays().then(() => {
      checkIfWeekend();
    });
  }, [selectedDate]);

  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const getHolidayReason = () => {
    const holiday = holidays.find((holiday) => isSameDate(new Date(holiday.date), selectedDate));
    return holiday ? holiday.name : null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-center text-purple-900">Indian Calendar</h2>
        <div className="my-4">
          <h3 className="mb-2 text-xl font-bold text-purple-900">Select a Date</h3>
          <div className="p-4 border rounded-md shadow-md">
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>
          <div className="mt-4 text-center text-gray-700">
            {holidays.length > 0 && (
              <div>
                <p>
                  {getHolidayReason()
                    ? `Selected date ${selectedDate.toISOString().split('T')[0]} is a holiday: ${getHolidayReason()}`
                    : ''}
                </p>
              </div>
            )}
            {!getHolidayReason() && isWeekend && (
              <p>{`Selected date ${selectedDate.toISOString().split('T')[0]} is a weekend.`}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianCalendarPage;