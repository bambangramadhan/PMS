module.exports = {

  formatDate: function(dateString){
    let date = new Date(dateString);

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    // YYYY-MM-DD
    return `${month}/${day}/${year}`;
  },

  formatEditDate: function(dateString){
    let date = new Date(dateString);

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    // YYYY-MM-DD
    return `${year}-${month}-${day}`;
  },

  formatDates: function(){
    let date = new Date();
    let dates = [];
    let yer, month, day;
    for (var i = 0; i < 7; i++) {
      year = date.getFullYear();
      month = date.getMonth()+1;
      day = date.getDate();

        // if (day < 10) {
        //   day = '0' + day;
        // }
        // if (month < 10) {
        //   month = '0' + month;
        // }
      // YYYY-MM-DD
      dates.push(`${month}/${day}/${year}`);
      date.setDate(date.getDate()-1);
    }
    return dates;
  },

  formatDays: function(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let index = new Date().getDay();
    let date = new Date();
    let fixedDays = [];
    for (var i = 0; i < 7; i++) {
      if(index < 0) index=6;
      fixedDays.push(days[index]);
      index--;
    }
    return fixedDays;
  },

  isLoggedIn: function(req, res, next){
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
    return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
  }

}
