const Booking = require('../models/booking.model')

const booking = async (req, res) => {
    try {
        const { event_id } = req.body

        const book = await Booking.create({ event_id, user_id: req.user._id })

        return res
            .json(
                {
                    success: true,
                    message: "Event Booked Successfully",
                }
            )
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const getBooking = async (req, res) => {
    try {
        const book = await Booking.find({ user_id: req.user._id }).populate(["event_id", "user_id"]).select("-user_id -__v")

        console.log(book)
        if (!book) {
            return res
                .json(
                    {
                        success: true,
                        message: "No Event Booked",
                    }
                )
        }

        return res
            .json(
                {
                    success: true,
                    message: "Booking event fetched",
                    data: book
                }
            )
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}
// for show all the bookings
const showallBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate(["event_id", "user_id"]).select("-user_id -__v")

        return res.json({
            success: true,
            data: bookings
        });
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

const deleteBooking = async (req, res) => {
    try {
        // Retrieve event ID from request parameters
        const { _id } = req.body;

        // Check if the event ID is provided
        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Event ID is required"
            });
        }

        // Find and delete the booking
        const deletedBooking = await Booking.findOneAndDelete({ _id: _id });

        // Check if the booking was found and deleted
        if (!deletedBooking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Booking successfully deleted",
            data: deletedBooking
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



module.exports = { booking, getBooking, showallBookings, deleteBooking }