const dateFormater = (date) => {
  let publishedAt;
  let YYYY = new Date(date).toJSON().slice(0, 4);
  let MM = new Date(date).toJSON().slice(5, 7);
  let DD = new Date(date).toJSON().slice(8, 10);
  let mmName = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
  publishedAt = mmName[MM] + " " + DD + ", " + YYYY;
  return publishedAt;
};

export default dateFormater;
