import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/admin/Auth/Login";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import Banner from "../pages/admin/Banner/Banner";
import AddBanner from "../pages/admin/Banner/AddBanner";
import EditBanner from "../pages/admin/Banner/EditBanner";
import Team from "../pages/admin/Team/Team";
import AddTeam from "../pages/admin/Team/AddTeam";
import EditTeam from "../pages/admin/Team/EditTeam";
import Activity from "../pages/admin/Activity/Activity";
import AddActivity from "../pages/admin/Activity/AddActivity";
import EditActivity from "../pages/admin/Activity/EditActivity";
import Gallery from "../pages/admin/Gallery/Gallery";
import AddGallery from "../pages/admin/Gallery/AddGallery";
import EditGallery from "../pages/admin/Gallery/EditGallery";
import Members from "../pages/admin/Membership/Members";
import AddMember from "../pages/admin/Membership/AddMember";
import EditMember from "../pages/admin/Membership/EditMember";
import Artists from "../pages/admin/Artist/Artist";
import AddArtist from "../pages/admin/Artist/AddArtist";
import EditArtist from "../pages/admin/Artist/EditArtist";
import Events from "../pages/admin/Event/Events";
import AddEvent from "../pages/admin/Event/AddEvent";
import EditEvent from "../pages/admin/Event/EditEvent";
import Testimonials from "../pages/admin/Testimonial/Testimonial";

import EditTestimonial from "../pages/admin/Testimonial/EditTestimonial";
import AddTestimonial from "../pages/admin/Testimonial/AddTestimonial";
import Newsletter from "../pages/admin/Newsletter/Newsletter";
import AddNewsletter from "../pages/admin/Newsletter/AddNewsletter";
import EditNewsletter from "../pages/admin/Newsletter/EditNewsletter";
import Contact from "../pages/admin/Contact/Contact";
import ViewContact from "../pages/admin/Contact/ViewContact";
import Partners from "../pages/admin/Partner/Partner";
import AddPartner from "../pages/admin/Partner/AddPartner";
import EditPartner from "../pages/admin/Partner/EditPartner";
import News from "../pages/admin/News/News";
import AddNews from "../pages/admin/News/AddNews";
import EditNews from "../pages/admin/News/EditNews";
import MembershipEnquiries from "../pages/admin/membership-enquiry/MembershipEnquiries";
import ViewMembershipEnquiry from "../pages/admin/membership-enquiry/ViewMembershipEnquiry";
import VolunteerRegistrations from "../pages/admin/volunteer-registration/VolunteerRegistrations";
import ViewVolunteerRegistration from "../pages/admin/volunteer-registration/ViewVolunteerRegistration";
import Home from "../pages/Home/Home";
import PublicLayout from "../layouts/PublicLayout";
import AboutSection from "../pages/public/About/AboutSection";
import AboutPage from "../pages/About/AboutPage";
import MissionPage from "../pages/Mission/MissionPage";
import ExecutiveCommitteePage from "../pages/About/ExecutiveCommitteePage";
import ActivitiesPage from "../pages/Activities/ActivitiesPage";
import EventsPage from "../pages/Events/EventsPage";
import ArtistsPage from "../pages/Artists/ArtistsPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import NewsPage from "../pages/News/NewsPage";
import NewsDetails from "../pages/News/NewsDetails";
import MembershipPage from "../pages/Membership/MembershipPage";
import MembershipBenefits from "../pages/Membership/MembershipBenefits";
import MembershipFAQ from "../pages/Membership/MembershipFAQ";
import VolunteerPage from "../pages/Volunteer/VolunteerPage";
import ContactPage from "../pages/Contact/ContactPage";
import SEPAConsent from "../pages/Sepa/SEPAConsent";
import ActivityDetail from "../pages/Activities/ActivityDetail";
import SpandaPage from "../pages/Activities/SpandaPage";
import EventDetail from "../pages/Events/EventDetail";
import ArtistDetail from "../pages/Artists/ArtistDetail";
import NewsDetail from "../pages/News/NewsDetails";
import TestimonialsPage from "../pages/Testimonials/TestimonialPage";
import ProfileVisibility from "../pages/ProfileVisibility/ProfileVisibility";
// import MemberRegistration from "../pages/member-registration/MemberRegistration";

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}


            {/* Public Website */}

            <Route element={<PublicLayout />}>

                <Route
                    path="/"
                    element={<Home />}


                />

                <Route
                    path="/about"
                    element={<AboutPage />}
                />


                <Route
                    path="/about/mission-vision"
                    element={<MissionPage />}
                />



                <Route
                    path="/about/executive-committee"
                    element={<ExecutiveCommitteePage />}
                />


<Route path="/artists/:id" element={<ArtistDetail />} />
<Route path="/news/:id" element={<NewsDetail />} />
                <Route
                    path="/activities"
                    element={<ActivitiesPage />}
                />
                <Route
                    path="/events"
                    element={<EventsPage />}
                />

                <Route
                    path="/artists"
                    element={<ArtistsPage />}
                />
                <Route
                    path="/gallery"
                    element={<GalleryPage />}


                />

                {/* <Route
        path="/gallery"
        element={<GalleryPage />}
    /> */}

                <Route
                    path="/news"
                    element={<NewsPage />}
                />

                <Route path="/news/:slug" element={<NewsDetails />} />

                <Route
                    path="/membership"
                    element={<MembershipPage />}
                />

                <Route
                    path="/membership/benefits"
                    element={<MembershipBenefits />}
                />
<Route path="/activities/:id" element={<ActivityDetail />} />
<Route path="/activities/spanda" element={<SpandaPage />} />

<Route path="/events/:id" element={<EventDetail />} />


                <Route
                    path="/membership/faq"
                    element={<MembershipFAQ />}
                />
                <Route
                    path="/volunteer"
                    element={<VolunteerPage />}
                />

                <Route
                    path="/contact"
                    element={<ContactPage />}
                />

                {/* 
   

   

    

 

  

    <Route
        path="/membership"
        element={<Membership />}
    />

    <Route
        path="/volunteer"
        element={<Volunteer />}
    />

    <Route
        path="/contact"
        element={<ContactPage />}
    /> */}

            </Route>
<Route path="/testimonials" element={<TestimonialsPage />} />

            {/* Public */}
            <Route path="/login" element={<Login />} />

            {/* Protected */}
            <Route
                element={
                    <ProtectedRoute allowedRoles={["ADMIN"]} />
                }
            >
                <Route element={<AdminLayout />}>
                    <Route
                        path="/admin/dashboard"
                        element={<Dashboard />}
                    />
                </Route>
                <Route element={<AdminLayout />}>

                    <Route path="/admin/team" element={<Team />} />

                    <Route
                        path="/admin/team/create"
                        element={<AddTeam />}
                    />

                    <Route
                        path="/admin/team/edit/:id"
                        element={<EditTeam />}
                    />


                </Route>
            </Route>
            <Route element={<AdminLayout />}>

                <Route
                    path="/admin/activities"
                    element={<Activity />}
                />

                <Route
                    path="/admin/activities/create"
                    element={<AddActivity />}
                />

                <Route
                    path="/admin/activities/edit/:id"
                    element={<EditActivity />}
                />
            </Route>
            <Route element={<AdminLayout />}>

                {/* Dashboard */}
                <Route
                    path="/admin/dashboard"
                    element={<Dashboard />}
                />

                {/* Hero Banner Management */}
                <Route
                    path="/admin/banners"
                    element={<Banner />}
                />

                <Route
                    path="/admin/banner/create"
                    element={<AddBanner />}
                />

                <Route
                    path="/admin/banner/edit/:id"
                    element={<EditBanner />}
                />



            </Route>
            <Route element={<AdminLayout />}>
                <Route path="admin/gallery" element={<Gallery />} />
                <Route path="admin/gallery/create" element={<AddGallery />} />
                <Route path="admin/gallery/edit/:id" element={<EditGallery />} />
            </Route>


            <Route element={<AdminLayout />}>

                <Route path="/admin/members" element={<Members />} />

                <Route
                    path="/admin/members/create"
                    element={<AddMember />}
                />

                <Route
                    path="/admin/members/edit/:id"
                    element={<EditMember />}
                />

            </Route>





            <Route element={<AdminLayout />}>

                <Route path="/admin/artists" element={<Artists />} />

                <Route
                    path="/admin/artists/create"
                    element={<AddArtist />}
                />

                <Route
                    path="/admin/artists/edit/:id"
                    element={<EditArtist />}
                />

            </Route>



            <Route element={<AdminLayout />}>
                <Route path="/admin/events" element={<Events />} />

                <Route
                    path="/admin/events/create"
                    element={<AddEvent />}
                />

                <Route
                    path="/admin/events/edit/:id"
                    element={<EditEvent />}
                />





            </Route>















            <Route element={<AdminLayout />}>


                <Route
                    path="/admin/testimonials"
                    element={<Testimonials />}
                />

                <Route
                    path="/admin/testimonials/create"
                    element={<AddTestimonial />}
                />

                <Route
                    path="/admin/testimonials/edit/:id"
                    element={<EditTestimonial />}
                />

            </Route>

            <Route element={<AdminLayout />}>

                <Route
                    path="/admin/newsletter"
                    element={<Newsletter />}
                />

                <Route
                    path="/admin/newsletter/create"
                    element={<AddNewsletter />}
                />

                <Route
                    path="/admin/newsletter/edit/:id"
                    element={<EditNewsletter />}
                />

            </Route>


            <Route element={<AdminLayout />}>
                <Route
                    path="/admin/contact"
                    element={<Contact />}
                />

                <Route
                    path="/admin/contact/view/:id"
                    element={<ViewContact />}
                />

            </Route>







            <Route element={<AdminLayout />}>

                <Route
                    path="/admin/partners"
                    element={<Partners />}
                />

                <Route
                    path="/admin/partners/create"
                    element={<AddPartner />}
                />

                <Route
                    path="/admin/partners/edit/:id"
                    element={<EditPartner />}
                />



















            </Route>

            <Route element={<AdminLayout />}>


                <Route
                    path="/admin/news"
                    element={<News />}
                />

                <Route
                    path="/admin/news/create"
                    element={<AddNews />}
                />

                <Route
                    path="/admin/news/edit/:id"
                    element={<EditNews />}
                />



            </Route>













            {/* <Route
  path="/member-registration/:token"
  element={<MemberRegistration />}
/> */}





            <Route element={<AdminLayout />}>



                <Route
                    path="/admin/membership-enquiries"
                    element={<MembershipEnquiries />}
                />

                <Route
                    path="/admin/membership-enquiries/view/:id"
                    element={<ViewMembershipEnquiry />}
                />




            </Route>

            <Route element={<AdminLayout />}>

                <Route
                    path="/admin/volunteer-registrations"
                    element={<VolunteerRegistrations />}
                />

                <Route
                    path="/admin/volunteer-registrations/view/:id"
                    element={<ViewVolunteerRegistration />}
                />

            </Route>


            <Route path="/sepa-consent/:token" element={<SEPAConsent />} />

            <Route path="/profile-visibility/:token" element={<ProfileVisibility />} />




            {/* Default */}
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            {/* 404 */}
            <Route
                path="*"
                element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>}
            />

        </Routes>
    );
};

export default AppRoutes;