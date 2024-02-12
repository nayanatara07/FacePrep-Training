import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import DayView from "./components/DayView";
import NotFoundPage from "./components/404Error";
import Programs from "./data/programs.json";


const days = [ "day_0", "day_1", "day_2", "day_3", "day_4"];

const initializeApp = async () => {

    // Getting the DOM element with the id "root"
    const divContainer = document.getElementById("root");

    // Creating a root for the React application using createRoot and associating it with the divContainer  
    const root = createRoot(divContainer);

    const router = createBrowserRouter([
        {
            path: "",
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    errorElement: <NotFoundPage />,
                    children: [
                        {
                            index: true,
                            element: <DayView programData={days[0]} />
                        },
                        ...days.map((day, index) => ({
                            path: day,
                            element: <DayView programData={days[index]} />,
                        })),
                    ]
                },
            ],
        },
    ]);

    // Rendering the main App component within the root
    root.render(<RouterProvider router={router} />);
};

// Initialize the app
initializeApp();
