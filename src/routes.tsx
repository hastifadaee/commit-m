import Layout from "./components/layout/Layout";
import CreateQuiz from "./pages/CreateQuiz";
import {RouteObject} from "react-router-dom";
import SelectQuiz from "./pages/SelectQuiz";
import Quiz from "./pages/Quiz";

export const routes:RouteObject[] = [
    {
        element:<Layout/>,
        children:[{
            path :'/',
            element:<CreateQuiz/>
        },{
            path:'/select-quiz',
            element:<SelectQuiz/>
        },{
            path:`test/:name`,
            element:<Quiz/>
        }]
    }
]