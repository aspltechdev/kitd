import * as teamService from "../services/team.service.js";

export const getAll = async (req, res) => {
  try {
    const teams = await teamService.getAll();

    res.status(200).json({
      success: true,
      data: teams,
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
    const team = await teamService.getById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      data: team,
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
//     const team = await teamService.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Team member created successfully",
//       data: team,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const create = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const data = {
      name: req.body.name,
      designation: req.body.designation,
      biography: req.body.biography,
      image: req.file?.filename,
    };

    const team = await teamService.create(data);

    res.status(201).json({
      success: true,
      message: "Team member created successfully",
      data: team,
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
    const team = await teamService.update(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Team member updated successfully",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await teamService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};