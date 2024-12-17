import React from 'react'

const Header = () => {

    const user = 'Michael';
    var date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    // const hours = date.getHours()
    // const minuets = date.getMinutes()
    const time = date.toLocaleTimeString();
    const dayOfWeek = date.getDay()
    const timeZone = date.getTimezoneOffset();

    function findDayOfWeek(dayOfWeek: number) {
        let day = ''
        switch (dayOfWeek) {
					case 0:
						day = 'Sunday';
						break;
					case 1:
						day = 'Monday';
						break;
					case 2:
						day = 'Tuesday';
						break;
					case 3:
						day = 'Wednesday';
						break;
					case 4:
						day = 'Thursday';
						break;
					case 5:
						day = 'Friday';
						break;
					case 6:
						day = 'Saturday';
						break;
					
        }
        return day;
    }

   function findCurrentMonth(month:number) {
        
        let longMonth = '';
        let currentMonth = month + 1;
        switch (currentMonth) {
            case 1:
                longMonth = 'January'
                break;
            case 2:
                longMonth = 'Feburary'
                break;
            case 3:
                longMonth = 'March'
                break;
            case 4:
                longMonth = 'April'
                break;
            case 5:
                longMonth = 'May'
                break;
            case 6:
                longMonth = 'June'
                break;
            case 7:
                longMonth = 'July'
                break;
            case 8:
                longMonth = 'August'
                break;
            case 9:
                longMonth = 'September'
                break;
            case 10:
                longMonth = 'October'
                break;
            case 11:
                longMonth = 'November'
                break;
            case 12:
                longMonth = 'December'
                break;
            
            
        }
       return longMonth;
    }
   
    const finalMonth = findCurrentMonth(month)
    const finalDay = findDayOfWeek(dayOfWeek)
    


	return (
		<main>
			<div>
				<p className="text-2xl italic"> Welcome Back, {user}!</p>
				<p>
					{finalDay}, {finalMonth} {day} {year} - {time}
				</p>
				
			</div>

			{/* <div>{ todaysDate }</div> */}
		</main>
	);
}

export default Header