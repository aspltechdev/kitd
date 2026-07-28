import * as eventService from "../services/event.service.js";

export const getAll = async (req, res) => {
  try {
    const events = await eventService.getAll();

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const event = await eventService.getById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const create = async (req, res) => {
//   try {
//     const event = await eventService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Event created successfully",
//       data: event,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// export const create = async (req, res) => {
//   try {
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const data = {
//       title: req.body.title,
//       shortDescription: req.body.shortDescription,
//       description: req.body.description,
//       eventDate: req.body.eventDate
//         ? new Date(req.body.eventDate)
//         : null,
//       location: req.body.location,
//       image: req.file?.filename || null,
//       isActive: req.body.isActive === "true",
//     };

//     console.log("DATA:", data);

//     const event = await eventService.create(data);

//     res.status(201).json({
//       success: true,
//       message: "Event created successfully",
//       data: event,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


export const create = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      venue: req.body.venue,
      eventDate: new Date(req.body.eventDate),
      image: req.file?.filename || null,
    };

    console.log("DATA:", data);

    const event = await eventService.create(data);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const update = async (req, res) => {
//   try {
//     const event = await eventService.update(req.params.id, req.body);

//     res.status(200).json({
//       success: true,
//       message: "Event updated successfully",
//       data: event,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const update = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      venue: req.body.venue,
      eventDate: req.body.eventDate
        ? new Date(req.body.eventDate)
        : undefined,
    };

    // Update image only if a new file is uploaded
    if (req.file) {
      data.image = req.file.filename;
    }

    const event = await eventService.update(req.params.id, data);

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const remove = async (req, res) => {
  try {
    await eventService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};