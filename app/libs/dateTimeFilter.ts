export function convertDateTime(dateTimeStr:any) {
    // Parse the input date-time string
    var dateObj = new Date(dateTimeStr);
    
    // Define month names
    var monthNames = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"];
    
    // Extract components of the date
    var year = dateObj.getFullYear();
    var month = monthNames[dateObj.getMonth()];
    var day = dateObj.getDate();
    
    // Format the date in the desired format
    var formattedDate = month + " " + day + ", " + year;
    
    return formattedDate;
}