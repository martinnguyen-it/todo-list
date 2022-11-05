function TodoHeader() {
    // TODO improve this, this is just to test the design
    const date = new Date();
    const day = date.getDate();
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][date.getDay()];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()];

    const getHeaderImageClass = (hour) => {
      if (hour >= 6 && hour < 12) {
        return "bg-todo-header-day";
      } else if (hour >= 12 && hour < 18) {
        return "bg-todo-header-afternoon";
      } else if (hour >= 18 || hour <= 6) {
        return "bg-todo-header-night";
      }
    };
  
    return (
      <header
        className={`${getHeaderImageClass(date.getHours())} bg-cover bg-center border-b-1 border-gray-300 px-4 py-6`}
      >
        <h1 className="text-2xl text-white">
          {`${weekDay}, ${day}`}
        </h1>
        <p className="pt-1 text-lg text-gray-100">
          {month}
        </p>
      </header>
    );
  }
  
  export default TodoHeader;
  