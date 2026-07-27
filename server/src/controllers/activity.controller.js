import * as activityService from "../services/activity.service.js";

export const getAll = async (req, res) => {
  try {
    const activities = await activityService.getAll();

    res.status(200).json({
      success: true,
      data: activities,
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
    const activity = await activityService.getById(req.params.id);

    if (!activity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found",
      });
    }

    res.status(200).json({
      success: true,
      data: activity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//   try {
//     const activity = await activityService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Activity created successfully",
//       data: activity,
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


//     const data = {
//   title: req.body.title,
//   shortDescription: req.body.shortDescription,
//   description: req.body.description,
//   date: req.body.date ? new Date(req.body.date) : null,
//   location: req.body.location,
//   displayOrder: Number(req.body.displayOrder),
//   isActive: req.body.isActive === "true",
// };

// if (req.file) {
//   data.image = req.file.filename;
// }

// const activity = await activityService.create(data);

//     res.status(201).json({
//       success: true,
//       message: "Activity created successfully",
//       data: activity,
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
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      date: req.body.date ? new Date(req.body.date) : null,
      location: req.body.location,
      displayOrder: Number(req.body.displayOrder),
      isActive: req.body.isActive === "true",
      image: req.file?.filename || null,
    };

    const activity = await activityService.create(data);

    res.status(201).json({
      success: true,
      message: "Activity created successfully",
      data: activity,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      description: req.body.description,
      date: req.body.date ? new Date(req.body.date) : null,
      location: req.body.location,
      displayOrder: Number(req.body.displayOrder),
      isActive: req.body.isActive === "true",
    };

    if (req.file) {
      data.image = req.file.filename;
    }

    console.log("Params:", req.params);

    const activity = await activityService.create(data);

    res.status(200).json({
      success: true,
      data: activity,
    });
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (req, res) => {
  try {
    await activityService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Activity deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};