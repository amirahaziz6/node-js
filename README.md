# ASSIGMENT
-------------
 ##Student Information
#Name: musbaax abdiaziiz nuur
#Class ID: C1211184
#Class Name: CA211
------

Function Explanation
calculateTotalTarget(startDate, endDate, totalAnnualTarget)
Parameters:

startDate: The start date of the period in YYYY-MM-DD format.
endDate: The end date of the period in YYYY-MM-DD format.
totalAnnualTarget: The total target for the year to be distributed.
Returns: An object containing:

daysExcludingFridays: An array of the number of working days (excluding Fridays) for each month.
daysWorkedExcludingFridays: An array of the number of worked days (excluding Fridays) for each month.
monthlyTargets: An array of calculated monthly targets based on the worked days.
totalTarget: The overall target for the specified date range.
How It Works
Converts startDate and endDate from strings to Date objects.
Loops through each month from startDate to endDate.
For each month:
Counts the total working days excluding Fridays.
Counts the number of worked days within the specified date range (also excluding Fridays).
Calculates the daily target based on the total annual target and the total number of worked days.
Distributes the daily target across the months based on the number of worked days in each month.
example 
{ "daysWorkedExcludingFridays": [Number, ...],
// Array of working days per month (excluding Fridays) "monthlyTargets":
[Number, ...], // Array of monthly targets for months with working days "totalTarget": 
Number // Sum of all the distributed monthly targets } 
Example javascript
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220)); Output:
json { "daysWorkedExcludingFridays": [ 22, // January 21, // February 21 // March ],
"monthlyTargets": [ 435, // January 435, // February 435 // March ], 
"totalTarget": 1305 // Sum of monthly targets for January to March }
Assumptions and Limitations
The function assumes that the input dates are valid and in the YYYY-MM-DD format.
It only excludes Fridays from the calculation; other holidays or non-working days are not considered.
The total annual target must be a non-negative number.
Feel free to customize this README as needed!





