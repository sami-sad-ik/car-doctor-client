import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
// axios.defaults.withCredentials = true;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((data) => {
      setBookings(data.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [url]);

  const handleDelete = (_id) => {
    const proceed = confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booking) => booking._id !== _id);
            setBookings(remaining);
            // alert("deleted successfully !");
          }
        });
    }
  };
  const handleConfirm = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== _id);
          const updated = bookings.find((booking) => booking._id === _id);
          updated.status = "confirm";
          const newBookings = [...remaining, updated];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-xs btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
                <td>{booking.username}</td>
                <td>{booking.service}</td>
                <td>$ {booking.price}</td>
                <td>
                  {booking.status === "confirm" ? (
                    <span className="text-green-500 font-bold">Confirmed</span>
                  ) : (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="btn btn-sm">
                      Please Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
