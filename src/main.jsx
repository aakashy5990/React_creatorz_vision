import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './routes/Home.jsx';
import PhotoManupulation from './Components/ServiceComponents/PhotoManupulation/PhotoManupulation.jsx';
import VideoEditing from './Components/ServiceComponents/VideoEditing/VideoEditing.jsx';
import Brochure from './Components/ServiceComponents/Brochure/Brochure.jsx';
import ServiceLayout from './Layouts/ServiceLayout.jsx';
import LogoDesign from './Components/ServiceComponents/LogoDesign/LogoDesign.jsx';
import ProductVisualization from './Components/ServiceComponents/ProductVisualization/ProductVisualization.jsx';
import WebDesign from './Components/ServiceComponents/WebDesign/WebDesign.jsx';
import Guidelines from './Components/ServiceComponents/Guidelines/Guidelines.jsx';
import Animation from './Components/ServiceComponents/Animation/Animation.jsx';
import SocialMedia from './Components/ServiceComponents/SocialMedia/SocialMedia.jsx';

// photomanupulation child 
import Valkyrie from './Components/ServiceComponents/PhotoManupulation/Valkyrie/Valkyrie.jsx';
import Cybersoul from './Components/ServiceComponents/PhotoManupulation/Cybersoul/Cybersoul.jsx';
import Shadows from './Components/ServiceComponents/PhotoManupulation/Shadows/Shadows.jsx';
import LastEcho from './Components/ServiceComponents/PhotoManupulation/LastEcho/LastEcho.jsx';
import OceanWhisper from './Components/ServiceComponents/PhotoManupulation/OceanWhisper/OceanWhisper.jsx';
import WinterGuardians from './Components/ServiceComponents/PhotoManupulation/WinterGuardians/WinterGuardians.jsx';

// brochurecatalouge child 
import Eumix from './Components/ServiceComponents/Brochure/Eumix/Eumix.jsx';
import RisingDiamond from './Components/ServiceComponents/Brochure/RisingDiamond/RisingDiamond.jsx';
import TrifoldEumix from './Components/ServiceComponents/Brochure/TrifoldEumix/TrifoldEumix.jsx';
import WindowSpace from './Components/ServiceComponents/Brochure/WindowSpace/WindowSpace.jsx';

// productvisualization child
import Boat from './Components/ServiceComponents/ProductVisualization/Boat/Boat.jsx';
import NikkaWhisky from './Components/ServiceComponents/ProductVisualization/NikkaWhisky/NikkaWhisky.jsx';
import Perfume from './Components/ServiceComponents/ProductVisualization/Perfume/Perfume.jsx';
import WhiskyModel from './Components/ServiceComponents/ProductVisualization/WhiskyModel/WhiskyModel.jsx';
import Omnitrix from './Components/ServiceComponents/ProductVisualization/Omnitrix/Omnitrix.jsx';
import Window from './Components/ServiceComponents/ProductVisualization/Window/Window.jsx';
import Jewelry from './Components/ServiceComponents/ProductVisualization/Jewelry/Jewelry.jsx';
import AppleWatch from './Components/ServiceComponents/ProductVisualization/AppleWatch/AppleWatch.jsx';
import UVLC from './Components/ServiceComponents/ProductVisualization/UVLC/UVLC.jsx';

// brandguidlines child
import AlaknandaGuidelines from './Components/ServiceComponents/Guidelines/AlaknandaGuidelines/AlaknandaGuidelines.jsx';
import CreatorzVisionGuidelines from './Components/ServiceComponents/Guidelines/CreatorzVisionGuidelines/CreatorzVisionGuidelines.jsx';
import GreenDotGuidelines from './Components/ServiceComponents/Guidelines/GreenDotGuidelines/GreenDotGuidelines.jsx';
import PaceGuidelines from './Components/ServiceComponents/Guidelines/PaceGuidelines/PaceGuidelines.jsx';
import RisingDiamondGuidelines from './Components/ServiceComponents/Guidelines/RisingDiamondGuidelines/RisingDiamondGuidelines.jsx';
import RisingGemGuidelines from './Components/ServiceComponents/Guidelines/RisingGemGuidelines/RisingGemGuidelines.jsx';
import ThunderGuidelines from './Components/ServiceComponents/Guidelines/ThunderGuidelines/ThunderGuidelines.jsx';
import WindowSpaceGuidelines from './Components/ServiceComponents/Guidelines/WindowSpaceGuidelines/WindowSpaceGuidelines.jsx';

// socailmedia child
import Autism from './Components/ServiceComponents/SocialMedia/Autism/Autism.jsx';
import Bees from './Components/ServiceComponents/SocialMedia/Bees/Bees.jsx';
import Cgi from './Components/ServiceComponents/SocialMedia/Cgi/Cgi.jsx';
import Creative from './Components/ServiceComponents/SocialMedia/Creative/Creative.jsx';
import Informative from './Components/ServiceComponents/SocialMedia/Informative/Informative.jsx';
import SpecialDay from './Components/ServiceComponents/SocialMedia/SpecialDay/SpecialDay.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <Home /> },
    ]
  },  
  {
    path: "",
    element: <ServiceLayout/>,
    children: [
      {
        path: "photomanupulation",
        element: <PhotoManupulation />,
      },
      {
        path: "photomanupulation/valkyrie",
        element: <Valkyrie />,
      },
      {
        path: "photomanupulation/cybersoul",
        element: <Cybersoul/>,
      },
      {
        path: "photomanupulation/shadows",
        element: <Shadows/>,
      },
      {
        path: "photomanupulation/lastecho",
        element: <LastEcho/>,
      },
      {
        path: "photomanupulation/oceanwhisper",
        element: <OceanWhisper/>,
      },
      {
        path: "photomanupulation/guardians",
        element: <WinterGuardians/>,
      },

      { path: "videoediting", element: <VideoEditing /> },
      // brochure path 
      { path: "brochure", element: <Brochure /> },
      {
        path: "brochure/eumax",
        element: <Eumix/>,
      },
      {
        path: "brochure/risingdiamond",
        element: <RisingDiamond/>,
      },
      {
        path: "brochure/trifold",
        element: <TrifoldEumix/>,
      },
      {
        path: "brochure/windowspace",
        element: <WindowSpace/>,
      },
      { path: "logodesign", element: <LogoDesign /> },
      { path: "productvisualization", element: <ProductVisualization /> },
      {
        path: "productvisualization/boat",
        element: <Boat/>,
      },
      {
        path: "productvisualization/nikkawhisky",
        element: <NikkaWhisky/>,
      },
      {
        path: "productvisualization/whiskymodel",
        element: <WhiskyModel/>,
      },
      {
        path: "productvisualization/perfume",
        element: <Perfume/>,
      },
      {
        path: "productvisualization/omnitrix",
        element: <Omnitrix/>,
      },
      {
        path: "productvisualization/window",
        element: <Window/>,
      },
      {
        path: "productvisualization/jewelry",
        element: <Jewelry/>,
      },
      {
        path: "productvisualization/applewatch",
        element: <AppleWatch/>,
      },
      {
        path: "productvisualization/upvclangle",
        element: <UVLC/>,
      },
      { path: "WebDesign", element: <WebDesign /> },
      { path: "guidelines", element: <Guidelines /> },
      { path: "guidelines/creatorzvision", element: <CreatorzVisionGuidelines /> },
      { path: "guidelines/alaknanda", element: <AlaknandaGuidelines/> },
      { path: "guidelines/greendot", element: <GreenDotGuidelines/> },
      { path: "guidelines/paceguidelines", element: <PaceGuidelines/> },
      { path: "guidelines/risingdiamond", element: <RisingDiamondGuidelines/> },
      { path: "guidelines/risinggem", element: <RisingGemGuidelines/> },
      { path: "guidelines/thunder", element: <ThunderGuidelines/> },
      { path: "guidelines/windowspace", element: <WindowSpaceGuidelines/> },
      { path: "animation", element: <Animation /> },
      { path: "socialmedia", element: <SocialMedia /> },
      { path: "socialmedia/autism", element: <Autism /> },
      { path: "socialmedia/bees", element: <Bees /> },
      { path: "socialmedia/cgi", element: <Cgi /> },
      { path: "socialmedia/creative", element: <Creative /> },
      { path: "socialmedia/informative", element: <Informative /> },
      { path: "socialmedia/specialday", element: <SpecialDay /> },

      // { path: "photomanupulation/valkyrie", element: <Valkyrie /> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
