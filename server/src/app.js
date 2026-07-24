// import express from "express";
// import cors from "cors";
// import path from "path";

// import bannerRoutes from "./routes/banner.routes.js";
// import teamRoutes from "./routes/team.routes.js";
// import membershipRoutes from "./routes/membership.routes.js";
// import activityRoutes from "./routes/activity.routes.js";
// import eventRoutes from "./routes/event.routes.js";
// import artistRoutes from "./routes/artist.routes.js";
// import galleryRoutes from "./routes/gallery.routes.js";
// import newsRoutes from "./routes/newsletter.routes.js";
// import contactRoutes from "./routes/contact.routes.js";
// import dashboardRoutes from "./routes/dashboard.routes.js"; 
// import { notFound } from "./middleware/notFound.middleware.js";
// import { errorHandler } from "./middleware/error.middleware.js";

// import partnerRoutes from "./routes/partner.routes.js";

// import testimonialRoutes from "./routes/testimonial.routes.js";

// import authRoutes from "./routes/auth.routes.js";

// import homeRoutes from "./routes/home.routes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static Files (Uploaded Images)
// app.use(
//   "/uploads",
//   express.static(path.join(process.cwd(), "src/uploads"))
// );

// // Health Check
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "KITD API Running Successfully 🚀",
//   });
// });

// // API Routes

// app.use("/api/home", homeRoutes);

// app.use("/api/auth", authRoutes);

// app.use("/api/banners", bannerRoutes);
// app.use("/api/teams", teamRoutes);
// app.use("/api/memberships", membershipRoutes);
// app.use("/api/activities", activityRoutes);
// app.use("/api/events", eventRoutes);
// app.use("/api/artists", artistRoutes);
// app.use("/api/gallery", galleryRoutes);
// app.use("/api/news", newsRoutes);
// app.use("/api/contacts", contactRoutes);
// app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/partners", partnerRoutes);
// app.use("/api/testimonials", testimonialRoutes);


// app.use(notFound);

// app.use(errorHandler);

// app.use(
//   "/uploads",
//   express.static(path.join(process.cwd(), "src/uploads"))
// );

// export default app;

import express from "express";
import cors from "cors";
import path from "path";

// Routes
import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import bannerRoutes from "./routes/banner.routes.js";
import teamRoutes from "./routes/team.routes.js";
import membershipRoutes from "./routes/membership.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import eventRoutes from "./routes/event.routes.js";
import artistRoutes from "./routes/artist.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import newsRoutes from "./routes/newsletter.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import volunteerRegistrationRoutes from "./routes/volunteerRegistration.routes.js";
// Middleware
import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

/* -------------------------- Middleware -------------------------- */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* -------------------------- Static Files -------------------------- */

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "src/uploads"))
);

/* -------------------------- Health Check -------------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KITD API Running Successfully 🚀",
  });
});

/* -------------------------- API Routes -------------------------- */

// Authentication
app.use("/api/auth", authRoutes);

// Home
app.use("/api/home", homeRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// Website Management
app.use("/api/banners", bannerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/testimonials", testimonialRoutes);

// Membership
app.use("/api/memberships", membershipRoutes);

// Contact
app.use("/api/contacts", contactRoutes);


app.use(
  "/api/volunteer-registrations",
  volunteerRegistrationRoutes
);

/* -------------------------- Error Handling -------------------------- */

app.use(notFound);

app.use(errorHandler);

export default app;