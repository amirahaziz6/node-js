function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    // Convert the start and end dates from string format to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    let currentDate = new Date(start);  // The current date being processed
    const daysExcludingFridays = [];  // Array to hold the number of working days excluding Fridays for each month
    const daysWorkedExcludingFridays = [];  // Array to hold the number of worked days excluding Fridays for each month
    const monthlyTargets = [];  // Array to hold the monthly target calculations
    let totalDaysWorked = 0;  // Variable to accumulate the total number of worked days

    // Loop through each month from the start date to the end date
    while (currentDate <= end) {
        let month = currentDate.getMonth();  // Get the current month (0-11)
        let year = currentDate.getFullYear();  // Get the current year

        // Get the total number of days in the current month
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDaysInMonth = 0;  // Counter for the number of working days in the current month (excluding Fridays)
        let daysWorkedInCurrentMonth = 0;  // Counter for the number of worked days in the current month (excluding Fridays)

        // Loop through all the days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            let date = new Date(year, month, day);  // Create a new Date object for the current day

            // If the current day is not a Friday
            if (date.getDay() !== 5) {  // Fridays have a day index of 5
                workingDaysInMonth++;  // Increment the count of working days
                if (date >= start && date <= end) {
                    daysWorkedInCurrentMonth++;  // If the day is within the given date range, increment worked days
                }
            }
        }

        // Add the number of working days (excluding Fridays) for the current month to the array
        daysExcludingFridays.push(workingDaysInMonth);
        // Add the number of worked days (excluding Fridays) for the current month to the array
        daysWorkedExcludingFridays.push(daysWorkedInCurrentMonth);
        // Add the number of worked days to the total count of worked days
        totalDaysWorked += daysWorkedInCurrentMonth;
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(1);  // Reset the day to the 1st of the next month
    }

    // Calculate the daily target based on the total annual target and the total number of worked days
    const dailyTarget = totalAnnualTarget / totalDaysWorked;
    // Calculate the target for each month based on the number of worked days in that month
    daysWorkedExcludingFridays.forEach(days => {
        monthlyTargets.push(dailyTarget * days);  // Multiply the daily target by the number of worked days in the month
    });

    // Return the results, including:
    // - The number of working days (excluding Fridays) for each month
    // - The number of worked days (excluding Fridays) for each month
    // - The calculated monthly targets
    // - The total target based on the total number of worked days
    return {
        daysExcludingFridays,  // Working days excluding Fridays for each month
        daysWorkedExcludingFridays,  // Worked days excluding Fridays for each month
        monthlyTargets,  // Monthly target for each month
        totalTarget: dailyTarget * totalDaysWorked  // Total target for the entire period
    };
}

// Example: Calculate the total target for a 4-month range
const result = calculateTotalTarget('2024-01-01', '2024-04-30', 5220);
console.log(result);  // Print the result to the console